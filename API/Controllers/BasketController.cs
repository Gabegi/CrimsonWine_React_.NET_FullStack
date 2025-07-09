using API.Controllers.DTOs;
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
        public async Task<ActionResult<Basket>> AddItemToBasket([FromBody] AddItemDto addItemDto)
        {
            _logger.LogInformation("AddItemToBasket called with ProductId: {ProductId}, Quantity: {Quantity}", addItemDto.ProductId, addItemDto.Quantity);
            // Get or create basket automatically
            var basket = await RetrieveBasket();
            if (basket == null)
            {
                basket = CreateBasket();
                await _dbContext.SaveChangesAsync();
                _logger.LogInformation("Created new basket for item addition: {BasketId}", basket.BasketId);
            }

            // Validate product exists
            var product = await _dbContext.Products.FindAsync(addItemDto.ProductId);
            if (product == null) return NotFound("Product not found");

            // Check if item already exists in basket
            var existingItem = basket.Items.FirstOrDefault(i => i.ProductId == addItemDto.ProductId);
            if (existingItem != null)
            {
                // Update quantity if item exists
                existingItem.Quantity += addItemDto.Quantity;
                _logger.LogInformation("Updated existing item quantity for product {ProductId} to {Qty} in basket {BasketId}",
                    addItemDto.ProductId, existingItem.Quantity, basket.BasketId);
            }
            else
            {
                // Add new item to basket
                var newItem = new BasketItem
                {
                    ProductId = addItemDto.ProductId,
                    Quantity = addItemDto.Quantity,
                    Product = product,
                    Basket = basket
                };
                basket.Items.Add(newItem);
                _logger.LogInformation("Added new product {ProductId} x{Qty} to basket {BasketId}",
                    addItemDto.ProductId, addItemDto.Quantity, basket.BasketId);
            }

            var result = await _dbContext.SaveChangesAsync() > 0;

            if (result)
            {
                // Return the current basket instance (in-memory, up-to-date)
                return Ok(basket);
            }

            return BadRequest("Problem adding item to basket");
        }

        // PUT: /api/basket/items
        [HttpPut("items")]
        public async Task<ActionResult<Basket>> UpdateItemQuantity([FromBody] UpdateItemDto updateItemDto)
        {
            var basket = await RetrieveBasket();
            if (basket == null) return NotFound("Basket not found");

            var existingItem = basket.Items.FirstOrDefault(i => i.ProductId == updateItemDto.ProductId);
            if (existingItem == null) return NotFound("Item not found");

            existingItem.Quantity = updateItemDto.Quantity;

            var result = await _dbContext.SaveChangesAsync() > 0;

            if (result)
            {
                _logger.LogInformation("Updated item quantity for product {ProductId} to {Qty} in basket {BasketId}",
                    updateItemDto.ProductId, updateItemDto.Quantity, basket.BasketId);
                return Ok(basket);
            }

            return BadRequest("Problem updating basket");
        }

        // DELETE: /api/basket/items/{productId}
        [HttpDelete("items/{productId}")]
        public async Task<ActionResult> RemoveItem(int productId)
        {
            var basket = await RetrieveBasket();
            if (basket == null) return NotFound("Basket not found");

            var item = basket.Items.FirstOrDefault(i => i.ProductId == productId);
            if (item == null) return NotFound("Item not found");

            basket.Items.Remove(item);

            var result = await _dbContext.SaveChangesAsync() > 0;

            if (result)
            {
                _logger.LogInformation("Removed product {ProductId} from basket {BasketId}", productId, basket.BasketId);
                return Ok();
            }

            return BadRequest("Problem removing item from basket");
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
                Expires = DateTime.UtcNow.AddDays(30),
                SameSite = SameSiteMode.Lax,
                Secure = false // Set to true in production with HTTPS
            };

            Response.Cookies.Append("basketId", basketId, cookieOptions);

            _dbContext.Baskets.Add(basket);

            return basket;
        }
    }
}