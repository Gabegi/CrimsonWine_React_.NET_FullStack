namespace API.Entities
{
    public class BasketItem
    {
        public int Id { get; init; }
        public int Quantity { get; set; }


        // Foreign Keys
        public int ProductId { get; set; }
        public required Product Product {get;set;}

        public int BasketId { get; set; }
        public required Basket Basket { get; set; }
    }
}