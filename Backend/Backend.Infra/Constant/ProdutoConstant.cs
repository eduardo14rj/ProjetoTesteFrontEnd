﻿using Backend.Domain.Entities;

namespace Backend.Infra.Constant
{
    public static class ProdutoConstant
    {
        public static List<Produto> Produtos { get; set; } = new List<Produto>
            {
                new Produto { Id = 1, Nome = "Produto 1", Preco = 12.00m, Estoque = 10 },
                new Produto { Id = 2, Nome = "Produto 2", Preco = 15.50m, Estoque = 20 },
                new Produto { Id = 3, Nome = "Produto 3", Preco = 18.75m, Estoque = 30 },
                new Produto { Id = 4, Nome = "Produto 4", Preco = 22.30m, Estoque = 40 },
                new Produto { Id = 5, Nome = "Produto 5", Preco = 9.99m, Estoque = 50 },
                new Produto { Id = 6, Nome = "Produto 6", Preco = 30.00m, Estoque = 5 },
                new Produto { Id = 7, Nome = "Produto 7", Preco = 45.20m, Estoque = 15 },
                new Produto { Id = 8, Nome = "Produto 8", Preco = 50.00m, Estoque = 25 },
                new Produto { Id = 9, Nome = "Produto 9", Preco = 60.75m, Estoque = 35 },
                new Produto { Id = 10, Nome = "Produto 10", Preco = 25.40m, Estoque = 45 },
                new Produto { Id = 11, Nome = "Produto 11", Preco = 35.90m, Estoque = 0 },
                new Produto { Id = 12, Nome = "Produto 12", Preco = 40.00m, Estoque = 10 },
                new Produto { Id = 13, Nome = "Produto 13", Preco = 12.50m, Estoque = 20 },
                new Produto { Id = 14, Nome = "Produto 14", Preco = 27.80m, Estoque = 30 },
                new Produto { Id = 15, Nome = "Produto 15", Preco = 19.99m, Estoque = 40 },
                new Produto { Id = 16, Nome = "Produto 16", Preco = 32.00m, Estoque = 50 },
                new Produto { Id = 17, Nome = "Produto 17", Preco = 28.50m, Estoque = 5 },
                new Produto { Id = 18, Nome = "Produto 18", Preco = 35.75m, Estoque = 15 },
                new Produto { Id = 19, Nome = "Produto 19", Preco = 41.20m, Estoque = 25 },
                new Produto { Id = 20, Nome = "Produto 20", Preco = 18.90m, Estoque = 35 },
                new Produto { Id = 21, Nome = "Produto 21", Preco = 22.30m, Estoque = 45 },
                new Produto { Id = 22, Nome = "Produto 22", Preco = 27.50m, Estoque = 0 },
                new Produto { Id = 23, Nome = "Produto 23", Preco = 30.00m, Estoque = 10 },
                new Produto { Id = 24, Nome = "Produto 24", Preco = 19.80m, Estoque = 20 },
                new Produto { Id = 25, Nome = "Produto 25", Preco = 24.99m, Estoque = 30 },
                new Produto { Id = 26, Nome = "Produto 26", Preco = 33.33m, Estoque = 40 },
                new Produto { Id = 27, Nome = "Produto 27", Preco = 29.95m, Estoque = 50 },
                new Produto { Id = 28, Nome = "Produto 28", Preco = 36.40m, Estoque = 5 },
                new Produto { Id = 29, Nome = "Produto 29", Preco = 42.10m, Estoque = 15 },
                new Produto { Id = 30, Nome = "Produto 30", Preco = 20.00m, Estoque = 25 },
                new Produto { Id = 31, Nome = "Produto 31", Preco = 25.50m, Estoque = 35 },
                new Produto { Id = 32, Nome = "Produto 32", Preco = 31.75m, Estoque = 45 },
                new Produto { Id = 33, Nome = "Produto 33", Preco = 38.20m, Estoque = 0 },
                new Produto { Id = 34, Nome = "Produto 34", Preco = 45.00m, Estoque = 10 },
                new Produto { Id = 35, Nome = "Produto 35", Preco = 26.80m, Estoque = 20 },
                new Produto { Id = 36, Nome = "Produto 36", Preco = 34.90m, Estoque = 30 },
                new Produto { Id = 37, Nome = "Produto 37", Preco = 29.99m, Estoque = 40 },
                new Produto { Id = 38, Nome = "Produto 38", Preco = 37.45m, Estoque = 50 },
                new Produto { Id = 39, Nome = "Produto 39", Preco = 43.60m, Estoque = 5 },
                new Produto { Id = 40, Nome = "Produto 40", Preco = 21.50m, Estoque = 15 },
                new Produto { Id = 41, Nome = "Produto 41", Preco = 26.30m, Estoque = 25 },
                new Produto { Id = 42, Nome = "Produto 42", Preco = 32.80m, Estoque = 35 },
                new Produto { Id = 43, Nome = "Produto 43", Preco = 39.90m, Estoque = 45 },
                new Produto { Id = 44, Nome = "Produto 44", Preco = 47.20m, Estoque = 0 },
                new Produto { Id = 45, Nome = "Produto 45", Preco = 27.99m, Estoque = 10 },
                new Produto { Id = 46, Nome = "Produto 46", Preco = 35.50m, Estoque = 20 },
                new Produto { Id = 47, Nome = "Produto 47", Preco = 31.20m, Estoque = 30 },
                new Produto { Id = 48, Nome = "Produto 48", Preco = 40.75m, Estoque = 40 },
                new Produto { Id = 49, Nome = "Produto 49", Preco = 46.80m, Estoque = 50 },
                new Produto { Id = 50, Nome = "Produto 50", Preco = 23.40m, Estoque = 5 },
                new Produto { Id = 51, Nome = "Produto 51", Preco = 28.80m, Estoque = 15 },
                new Produto { Id = 52, Nome = "Produto 52", Preco = 34.20m, Estoque = 25 },
                new Produto { Id = 53, Nome = "Produto 53", Preco = 41.00m, Estoque = 35 },
                new Produto { Id = 54, Nome = "Produto 54", Preco = 48.55m, Estoque = 45 },
                new Produto { Id = 55, Nome = "Produto 55", Preco = 29.99m, Estoque = 0 },
                new Produto { Id = 56, Nome = "Produto 56", Preco = 37.80m, Estoque = 10 },
                new Produto { Id = 57, Nome = "Produto 57", Preco = 33.33m, Estoque = 20 },
                new Produto { Id = 58, Nome = "Produto 58", Preco = 42.42m, Estoque = 30 },
                new Produto { Id = 59, Nome = "Produto 59", Preco = 50.50m, Estoque = 40 },
                new Produto { Id = 60, Nome = "Produto 60", Preco = 24.75m, Estoque = 50 },
                new Produto { Id = 61, Nome = "Produto 61", Preco = 29.50m, Estoque = 5 },
                new Produto { Id = 62, Nome = "Produto 62", Preco = 36.60m, Estoque = 15 },
                new Produto { Id = 63, Nome = "Produto 63", Preco = 43.20m, Estoque = 25 },
                new Produto { Id = 64, Nome = "Produto 64", Preco = 51.00m, Estoque = 35 },
                new Produto { Id = 65, Nome = "Produto 65", Preco = 27.50m, Estoque = 45 },
                new Produto { Id = 66, Nome = "Produto 66", Preco = 35.00m, Estoque = 0 },
                new Produto { Id = 67, Nome = "Produto 67", Preco = 30.30m, Estoque = 10 },
                new Produto { Id = 68, Nome = "Produto 68", Preco = 38.40m, Estoque = 20 },
                new Produto { Id = 69, Nome = "Produto 69", Preco = 44.90m, Estoque = 30 },
                new Produto { Id = 70, Nome = "Produto 70", Preco = 22.20m, Estoque = 40 },
                new Produto { Id = 71, Nome = "Produto 71", Preco = 28.30m, Estoque = 50 },
                new Produto { Id = 72, Nome = "Produto 72", Preco = 33.80m, Estoque = 5 },
                new Produto { Id = 73, Nome = "Produto 73", Preco = 39.50m, Estoque = 15 },
                new Produto { Id = 74, Nome = "Produto 74", Preco = 46.10m, Estoque = 25 },
                new Produto { Id = 75, Nome = "Produto 75", Preco = 31.99m, Estoque = 35 }
            };
    }
}
