using Backend.Domain.Entities;

namespace Backend.Infra.Constant
{
    public static class ProdutoConstant
    {
        public static List<Produto> Produtos { get; set; } = new List<Produto>
        {
            new Produto { Id = 1, Nome = "Produto 1", Preco = 12.00m },
            new Produto { Id = 2, Nome = "Produto 2", Preco = 15.50m },
            new Produto { Id = 3, Nome = "Produto 3", Preco = 18.75m },
            new Produto { Id = 4, Nome = "Produto 4", Preco = 22.30m },
            new Produto { Id = 5, Nome = "Produto 5", Preco = 9.99m },
            new Produto { Id = 6, Nome = "Produto 6", Preco = 30.00m },
            new Produto { Id = 7, Nome = "Produto 7", Preco = 45.20m },
            new Produto { Id = 8, Nome = "Produto 8", Preco = 50.00m },
            new Produto { Id = 9, Nome = "Produto 9", Preco = 60.75m },
            new Produto { Id = 10, Nome = "Produto 10", Preco = 25.40m },
            new Produto { Id = 11, Nome = "Produto 11", Preco = 35.90m },
            new Produto { Id = 12, Nome = "Produto 12", Preco = 40.00m },
            new Produto { Id = 13, Nome = "Produto 13", Preco = 12.50m },
            new Produto { Id = 14, Nome = "Produto 14", Preco = 27.80m },
            new Produto { Id = 15, Nome = "Produto 15", Preco = 19.99m }
        };
    }
}
