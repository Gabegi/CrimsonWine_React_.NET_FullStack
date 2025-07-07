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

        // GET: /api/basket
        [HttpGet]
        public async Task<ActionResult<Basket>> GetBasket()
        {
            var basket = await RetrieveBasket();

            if (basket == null)
            {
                basket = CreateBasket();
                await _dbContext.SaveChangesAsync();
                _logger.LogInformation("Created new basket automatically: {BasketId}", basket.BasketId);
            }

            return Ok(basket);
        }

        // POST: /api/basket/items
        [HttpPost("items")]
        public async Task<ActionResult> AddItemToBasket([FromBody] BasketItem item)
        {
            var basket = await RetrieveBasket();
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
                    Product = product,
                    Basket = basket
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
            var basket = await RetrieveBasket();
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
        public async Task<ActionResult> ClearBasket()
        {
            var basket = await RetrieveBasket();
            if (basket == null) return NotFound("Basket not found");

            basket.Items.Clear();
            await _dbContext.SaveChangesAsync();

            _logger.LogInformation("Cleared basket {BasketId}", basket.BasketId);

            return Ok();
        }

        // POST: /api/basket/checkout
        [HttpPost("checkout")]
        public ActionResult Checkout()
        {
            _logger.LogInformation("Checkout process triggered (not implemented)");
            return Ok("Checkout process not yet implemented");
        }

        // ---------------------------
        // Private helper methods
        // ---------------------------
        
        private async Task<Basket?> RetrieveBasket()
        {
            var basketId = Request.Cookies["basketId"];
            if (string.IsNullOrEmpty(basketId)) return null;

            return await _dbContext.Baskets
                .Include(b => b.Items)
                .ThenInclude(i => i.Product)
                .FirstOrDefaultAsync(b => b.BasketId == basketId);
        }

        private Basket CreateBasket()
        {
            var basketId = Guid.NewGuid().ToString();
            var basket = new Basket
            {
                BasketId = basketId,
                Items = new List<BasketItem>()
            };

            var cookieOptions = new CookieOptions
            {
                IsEssential = true,
                Expires = DateTime.UtcNow.AddDays(30)
            };

            Response.Cookies.Append("basketId", basketId, cookieOptions);

            _dbContext.Baskets.Add(basket);

            return basket;
        }
    }
}
