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
    }
}
