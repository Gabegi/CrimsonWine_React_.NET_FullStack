using API.Controllers.DTOs;

namespace API.Entities
{
    public class Basket
    {
        public int Id { get; init; }
        public required string BasketId { get; init; }
        public List<BasketItem> Items { get; set; }

        public BasketDto ToDto()
        {
            return new BasketDto
            {
                BasketId = this.BasketId,
                Items = this.Items?.Select(i => new BasketItemDto
                {
                    ProductId = i.ProductId,
                    Name = i.Product.Name,
                    PictureUrl = i.Product.PictureUrl,
                    Price = i.Product.Price,
                    Quantity = i.Quantity,
                    Brand = i.Product.Brand,
                    Type = i.Product.Type
                }).ToList() ?? new List<BasketItemDto>()
            };
        }
    }
}
