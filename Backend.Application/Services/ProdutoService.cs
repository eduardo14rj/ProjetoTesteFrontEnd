using Backend.Application.DTOs;
using Backend.Domain;
using Backend.Domain.Entities;
using Backend.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Application.Services
{
    public class ProdutoService : IService
    {
        private readonly IProdutoRepository _produtoRepository;
        public ProdutoService(IProdutoRepository produtoRepository)
        {
            _produtoRepository = produtoRepository;
        }

        public async Task<PageResult<Produto>> ListAsync(int pageOffset)
        {
            var list = await _produtoRepository.ListPagedAsync(pageOffset, 5);
            return list;
        }

        public async Task CreateUpdateAsync(CreateProductDTO_Req data)
        {
            if (data.Id is not null)
            {
                var item = await _produtoRepository.GetByIdAsync(data.Id.Value);
                if (item is not null)
                {
                    item.Nome = data.Name;
                    item.Preco = data.Price;
                    await _produtoRepository.CreateAsync(item);
                }
            } else
            {
                var newItem = new Produto
                {
                    Nome = data.Name,
                    Preco = data.Price
                };
                await _produtoRepository.CreateAsync(newItem);
            }
        }
    }
}
