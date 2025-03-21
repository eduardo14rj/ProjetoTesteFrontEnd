using Backend.Domain;
using Backend.Domain.Entities;
using Backend.Domain.Interfaces.Generics;
using Backend.Infra.Context;
using Microsoft.EntityFrameworkCore;

namespace Backend.Infra.Repositories
{
    public abstract class RepositoryBase<T> : IRepositoryBase<T> where T : Entity
    {
        protected readonly AppDbContext _context;

        protected RepositoryBase(AppDbContext context)
        {
            _context = context;
        }

        public Task CreateAsync(T entity)
        {
            _context.Set<T>().Add(entity);
            return _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(T entity)
        {
            var item = await _context.Set<T>().FirstOrDefaultAsync(i => i.Id == entity.Id);
            if (item != null)
            {
                item.DeletadoEm = DateTime.UtcNow;
                _context.Set<T>().Update(item);
                await _context.SaveChangesAsync();
            }
            else
            {
                throw new ArgumentException("Item não encontrado.");
            }
        }

        public async Task<T?> GetByIdAsync(int id)
        {
            var item = await _context.Set<T>().FirstOrDefaultAsync(i => i.Id == id);
            return item;
        }

        public async Task<PageResult<T>> ListPagedAsync(int pageOffset, int pageSize)
        {
            var total = _context.Set<T>().Where(x => x.DeletadoEm == null).Count();

            var result = new PageResult<T>
            {
                CurrentPage = pageOffset,
                PageSize = pageSize,
                TotalRecords = total,
                Results = await _context.Set<T>()
           .Where(x => x.DeletadoEm == null)
           .Skip((pageOffset - 1) * pageSize)
           .Take(pageSize)
           .ToListAsync()
            };

            return result;
        }

        public Task UpdateAsync(T entity)
        {
            throw new NotImplementedException();
        }
    }
}
