using Backend.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Domain.Interfaces.Generics
{
    public interface IRepositoryBase<T> where T : Entity
    {
        Task CreateAsync(T entity);
        Task<IEnumerable<T>> ReadAsync();
        Task UpdateAsync(T entity);
        Task DeleteAsync(T entity);

        Task<T?> GetByIdAsync(int id);
        Task<PageResult<T>> ListPagedAsync(int pageOffset, int pageSize, string search);
    }
}
