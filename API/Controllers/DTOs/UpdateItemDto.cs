using System.Text.Json.Serialization;

namespace API.Controllers.DTOs
{
    public class UpdateItemDto
    {
        [JsonPropertyName("productId")]

        public int ProductId { get; set; }
        [JsonPropertyName("quantity")]

        public int Quantity { get; set; }
    }
}
