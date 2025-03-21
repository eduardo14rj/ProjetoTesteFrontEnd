using Backend.Domain.Entities;
using Backend.Domain.Interfaces;
using Backend.Infra.Context;

namespace Backend.Infra.Repositories
{
    public class ProdutoRepository : RepositoryBase<Produto>, IProdutoRepository
    {
        public ProdutoRepository(AppDbContext context) : base(context)
        {
        }
    }
}
