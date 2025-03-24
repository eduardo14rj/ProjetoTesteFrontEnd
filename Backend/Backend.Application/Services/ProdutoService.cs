using Backend.Application.DTOs;
using Backend.Domain;
using Backend.Domain.Entities;
using Backend.Domain.Interfaces;

namespace Backend.Application.Services
{
    public class ProdutoService : IService
    {
        private readonly IProdutoRepository _produtoRepository;
        public ProdutoService(IProdutoRepository produtoRepository)
        {
            _produtoRepository = produtoRepository;
        }

        public async Task<PageResult<Produto>> ListAsync(int pageOffset, int pageSize, string search)
        {
            var list = await _produtoRepository.ListPagedAsync(pageOffset, pageSize, search);
            return list;
        }

        public async Task CreateAsync(CreateProductDTO_Req data)
        {
            var newItem = new Produto
            {
                Nome = data.Name,
                Preco = data.Price,
                Estoque = data.Stock
            };
            await _produtoRepository.CreateAsync(newItem);
        }

        public async Task UpdateAsync(UpdateProductDTO_Req data)
        {
            var item = await _produtoRepository.GetByIdAsync(data.Id);
            if (item is not null)
            {
                item.Nome = data.Name;
                item.Preco = data.Price;
                item.Estoque = data.Stock;
                await _produtoRepository.UpdateAsync(item);
            }
        }

        public async Task RemoveAsync(int id)
        {
            var item = await _produtoRepository.GetByIdAsync(id);
            if (item is not null)
            {
                await _produtoRepository.DeleteAsync(item);
            }
        }
    }
}
