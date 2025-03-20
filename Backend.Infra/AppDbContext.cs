using Backend.Domain.Entities;
using Backend.Infra.Constant;
using Microsoft.EntityFrameworkCore;

namespace Backend.Infra
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Produto> Produtos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Cliente>().HasData(ClienteConstant.Clientes);
            modelBuilder.Entity<Produto>().HasData(ProdutoConstant.Produtos);
        }
    }
}
