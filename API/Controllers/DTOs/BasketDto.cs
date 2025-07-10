namespace API.Controllers.DTOs
{
    public class BasketDto
    {
        public string BasketId { get; set; }
        public List<BasketItemDto> Items { get; set; }
    }

    public class BasketItemDto
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string PictureUrl { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public string Brand { get; set; }
        public string Type { get; set; }
    }
} 