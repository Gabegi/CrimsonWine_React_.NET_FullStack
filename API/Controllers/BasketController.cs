using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Entities;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BasketController : ControllerBase
    {
        private readonly DataContext _context;

        public BasketController(DataContext context)
        {
            _context = context;
        }

        // GET: /api/basket/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Basket>> GetBasket(string id)
        {
            var basket = await _context.Baskets
                .Include(b => b.Items)
                .ThenInclude(i => i.Product)
                .FirstOrDefaultAsync(b => b.BasketId == id);

            if (basket == null) return NotFound("Basket not found");
            return Ok(basket);
        }

        // POST: /api/basket
        [HttpPost]
        public async Task<ActionResult<Basket>> CreateBasket([FromBody] string basketId)
        {
            if (await _context.Baskets.AnyAsync(b => b.BasketId == basketId))
                return BadRequest("Basket already exists");

            var basket = new Basket
            {
                BasketId = basketId,
                Items = new List<BasketItem>()
            };

            _context.Baskets.Add(basket);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetBasket), new { id = basket.BasketId }, basket);
        }

        // POST: /api/basket/items
        [HttpPost("items")]
        public async Task<ActionResult> AddItemToBasket([FromBody] AddBasketItemDto dto)
        {
            var basket = await _context.Baskets
                .Include(b => b.Items)
                .FirstOrDefaultAsync(b => b.BasketId == dto.BasketId);

            if (basket == null) return NotFound("Basket not found");

            var product = await _context.Products.FindAsync(dto.ProductId);
            if (product == null) return NotFound("Product not found");

            var existingItem = basket.Items.FirstOrDefault(i => i.ProductId == dto.ProductId);
            if (existingItem != null)
            {
                existingItem.Quantity += dto.Quantity;
            }
            else
            {
                basket.Items.Add(new BasketItem
                {
                    ProductId = dto.ProductId,
                    Quantity = dto.Quantity,
                    Product = product
                });
            }

            await _context.SaveChangesAsync();
            return Ok(basket);
        }

        // PUT: /api/basket/items
        [HttpPut("items")]
        public async Task<ActionResult> UpdateItemQuantity([FromBody] UpdateBasketItemDto dto)
        {
            var basket = await _context.Baskets
                .Include(b => b.Items)
                .FirstOrDefaultAsync(b => b.BasketId == dto.BasketId);

            if (basket == null) return NotFound("Basket not found");

            var item = basket.Items.FirstOrDefault(i => i.ProductId == dto.ProductId);
            if (item == null) return NotFound("Item not found in basket");

            item.Quantity = dto.Quantity;
            await _context.SaveChangesAsync();

            return Ok(basket);
        }

        // DELETE: /api/basket/items/{id}
        [HttpDelete("items/{id}")]
        public async Task<ActionResult> RemoveItem(int id)
        {
            var item = await _context.BasketItems.FindAsync(id);
            if (item == null) return NotFound("Item not found");

            _context.BasketItems.Remove(item);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // POST: /api/basket/clear
        [HttpPost("clear")]
        public async Task<ActionResult> ClearBasket([FromBody] string basketId)
        {
            var basket = await _context.Baskets
                .Include(b => b.Items)
                .FirstOrDefaultAsync(b => b.BasketId == basketId);

            if (basket == null) return NotFound("Basket not found");

            basket.Items.Clear();
            await _context.SaveChangesAsync();

            return Ok();
        }

        // POST: /api/basket/checkout
        [HttpPost("checkout")]
        public ActionResult Checkout()
        {
            // Placeholder — you can add integration with payment and order systems here
            return Ok("Checkout process not yet implemented");
        }
    }
}
