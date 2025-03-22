using Backend.Domain.Entities;
using Backend.Domain.Interfaces;
using Backend.Infra.Context;
using Microsoft.EntityFrameworkCore;

namespace Backend.Infra.Repositories
{
    public class ClienteRepository : RepositoryBase<Cliente>, IClienteRepository
    {
        public ClienteRepository(AppDbContext context) : base(context)
        {
        }

        protected override IQueryable<Cliente> ApplySearchFilter(IQueryable<Cliente> query, string search)
        {
            return query.Where(c => c.Nome.Contains(search) || c.Email.Contains(search));
        }
    }
}
