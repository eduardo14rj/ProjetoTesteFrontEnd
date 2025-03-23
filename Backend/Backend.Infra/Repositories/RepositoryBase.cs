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

        public async Task<PageResult<T>> ListPagedAsync(int pageOffset, int pageSize, string search)
        {
            var query = _context.Set<T>().Where(x => x.DeletadoEm == null);

            if (!string.IsNullOrEmpty(search))
            {
                query = ApplySearchFilter(query, search);
            }

            var items = await query.ToListAsync();

            var total = items.Count();

            var offset = pageOffset == 0 ? 1 : pageOffset;


            var result = new PageResult<T>
            {
                CurrentPage = offset,
                PageSize = pageSize,
                TotalRecords = total,
                IsNextPage = (offset * pageSize) < total,
                Results = items
                    .OrderByDescending(x => x.CriadoEm)
                    .Skip((offset - 1) * pageSize)
                    .Take(pageSize)
            };

            return result;
        }

        public async Task<IEnumerable<T>> ReadAsync()
        {
            var items = await _context.Set<T>().ToListAsync();
            return items;
        }

        public async Task UpdateAsync(T entity)
        {
            _context.Set<T>().Update(entity);
            await _context.SaveChangesAsync();
        }

        protected abstract IQueryable<T> ApplySearchFilter(IQueryable<T> query, string search);
    }
}
