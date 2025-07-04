using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BasketController : ControllerBase
    {
        private readonly AppDbContext _dbContext;
        private readonly ILogger<BasketController> _logger;

        public BasketController(AppDbContext dbContext, ILogger<BasketController> logger)
        {
            _dbContext = dbContext;
            _logger = logger;
        }

        // GET: /api/basket/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Basket>> GetBasket(string id)
        {
            var basket = await _dbContext.Baskets
                .Include(b => b.Items)
                .ThenInclude(i => i.Product)
                .FirstOrDefaultAsync(b => b.BasketId == id);

            if (basket == null)
            {
                _logger.LogWarning("Basket not found: {BasketId}", id);
                return NotFound("Basket not found");
            }

            return Ok(basket);
        }

        // POST: /api/basket
        [HttpPost]
        public async Task<ActionResult<Basket>> CreateBasket([FromBody] string basketId)
        {
            if (await _dbContext.Baskets.AnyAsync(b => b.BasketId == basketId))
                return BadRequest("Basket already exists");

            var basket = new Basket
            {
                BasketId = basketId,
                Items = new List<BasketItem>()
            };

            _dbContext.Baskets.Add(basket);
            await _dbContext.SaveChangesAsync();

            _logger.LogInformation("Created new basket: {BasketId}", basketId);

            return CreatedAtAction(nameof(GetBasket), new { id = basket.BasketId }, basket);
        }

        // POST: /api/basket/items
        [HttpPost("items")]
        public async Task<ActionResult> AddItemToBasket([FromBody] BasketItem item)
        {
            var basket = await _dbContext.Baskets
                .Include(b => b.Items)
                .FirstOrDefaultAsync(b => b.BasketId == item.Basket.BasketId);

            if (basket == null) return NotFound("Basket not found");

            var product = await _dbContext.Products.FindAsync(item.ProductId);
            if (product == null) return NotFound("Product not found");

            var existingItem = basket.Items.FirstOrDefault(i => i.ProductId == item.ProductId);
            if (existingItem != null)
            {
                existingItem.Quantity += item.Quantity;
            }
            else
            {
                basket.Items.Add(new BasketItem
                {
                    ProductId = item.ProductId,
                    Quantity = item.Quantity,
                    Product = product
                });
            }

            await _dbContext.SaveChangesAsync();

            _logger.LogInformation("Added product {ProductId} x{Qty} to basket {BasketId}", item.ProductId, item.Quantity, basket.BasketId);

            return Ok(basket);
        }

        // PUT: /api/basket/items
        [HttpPut("items")]
        public async Task<ActionResult> UpdateItemQuantity([FromBody] BasketItem item)
        {
            var basket = await _dbContext.Baskets
                .Include(b => b.Items)
                .FirstOrDefaultAsync(b => b.BasketId == item.Basket.BasketId);

            if (basket == null) return NotFound("Basket not found");

            var existingItem = basket.Items.FirstOrDefault(i => i.ProductId == item.ProductId);
            if (existingItem == null) return NotFound("Item not found");

            existingItem.Quantity = item.Quantity;
            await _dbContext.SaveChangesAsync();

            _logger.LogInformation("Updated item quantity for product {ProductId} to {Qty} in basket {BasketId}", item.ProductId, item.Quantity, basket.BasketId);

            return Ok(basket);
        }

        // DELETE: /api/basket/items/{id}
        [HttpDelete("items/{id}")]
        public async Task<ActionResult> RemoveItem(int id)
        {
            var item = await _dbContext.BasketItems.FindAsync(id);
            if (item == null) return NotFound("Item not found");

            _dbContext.BasketItems.Remove(item);
            await _dbContext.SaveChangesAsync();

            _logger.LogInformation("Removed basket item {ItemId}", id);

            return NoContent();
        }

        // POST: /api/basket/clear
        [HttpPost("clear")]
        public async Task<ActionResult> ClearBasket([FromBody] string basketId)
        {
            var basket = await _dbContext.Baskets
                .Include(b => b.Items)
                .FirstOrDefaultAsync(b => b.BasketId == basketId);

            if (basket == null) return NotFound("Basket not found");

            basket.Items.Clear();
            await _dbContext.SaveChangesAsync();

            _logger.LogInformation("Cleared basket {BasketId}", basketId);

            return Ok();
        }

        // POST: /api/basket/checkout
        [HttpPost("checkout")]
        public ActionResult Checkout()
        {
            _logger.LogInformation("Checkout process triggered (not implemented)");
            return Ok("Checkout process not yet implemented");
        }
    }
}
