namespace API.Entities
{
    public class Basket
    {
        public int Id { get; init; }
        public required string BasketId { get; init; }
        public List<BasketItem> Items { get; set; }
    }
}
