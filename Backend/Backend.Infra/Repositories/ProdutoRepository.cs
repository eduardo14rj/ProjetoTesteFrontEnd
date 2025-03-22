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

        protected override IQueryable<Produto> ApplySearchFilter(IQueryable<Produto> query, string search)
        {
            return query.Where(c => c.Nome.Contains(search));
        }
    }
}
