using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Basket> Baskets { get; set; }
        public DbSet<BasketItem> BasketItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().HasData(
                new Product
                {
                    Id = 1,
                    Name = "Châteauneuf-du-Pape",
                    Description = "A bold, complex red wine with notes of dark fruit, spice, and herbs.",
                    Price = 49.99m,
                    PictureUrl = "/images/chateauneuf.png",
                    Type = "Red Wine",
                    Brand = "Rhône Valley",
                    QuantityInStock = 20
                },
                new Product
                {
                    Id = 2,
                    Name = "Gigondas",
                    Description = "Rich and powerful with deep cherry and pepper flavors.",
                    Price = 34.99m,
                    PictureUrl = "/images/gigondas.png",
                    Type = "Red Wine",
                    Brand = "Rhône Valley",
                    QuantityInStock = 15
                },
                new Product
                {
                    Id = 3,
                    Name = "Vacqueyras",
                    Description = "Elegant and full-bodied, blending Grenache and Syrah grapes.",
                    Price = 29.99m,
                    PictureUrl = "/images/vacqueyras.png",
                    Type = "Red Wine",
                    Brand = "Rhône Valley",
                    QuantityInStock = 18
                },
                new Product
                {
                    Id = 4,
                    Name = "Rasteau",
                    Description = "Dry and intense, known for its bold tannins and ripe fruit profile.",
                    Price = 27.99m,
                    PictureUrl = "/images/rasteau.png",
                    Type = "Red Wine",
                    Brand = "Rhône Valley",
                    QuantityInStock = 12
                },
                new Product
                {
                    Id = 5,
                    Name = "Beaumes-de-Venise (Red)",
                    Description = "Spicy and velvety, distinct from its strong neighbours.",
                    Price = 25.99m,
                    PictureUrl = "/images/beaumes.png",
                    Type = "Red Wine",
                    Brand = "Rhône Valley",
                    QuantityInStock = 10
                },
                new Product
                {
                    Id = 6,
                    Name = "Vinsobres",
                    Description = "Spicy and structured with good aging potential.",
                    Price = 23.99m,
                    PictureUrl = "/images/vinsobres.png",
                    Type = "Red Wine",
                    Brand = "Rhône Valley",
                    QuantityInStock = 14
                },
                new Product
                {
                    Id = 7,
                    Name = "Cairanne",
                    Description = "Balanced and aromatic, with red berry and herbal notes.",
                    Price = 22.99m,
                    PictureUrl = "/images/cairanne.png",
                    Type = "Red Wine",
                    Brand = "Rhône Valley",
                    QuantityInStock = 16
                },
                new Product
                {
                    Id = 8,
                    Name = "Cornas",
                    Description = "A deep, brooding Syrah with intense black fruit, smoke, and spice.",
                    Price = 44.99m,
                    PictureUrl = "/images/cornas.png",
                    Type = "Red Wine",
                    Brand = "Rhône Valley",
                    QuantityInStock = 11
                },
                new Product
                {
                    Id = 9,
                    Name = "Crozes-Hermitage",
                    Description = "A balanced Syrah showcasing red berries, pepper, and earthy minerality.",
                    Price = 38.5m,
                    PictureUrl = "/images/crozes.png",
                    Type = "Red Wine",
                    Brand = "Rhône Valley",
                    QuantityInStock = 15
                }
            );
        }

    }

}
