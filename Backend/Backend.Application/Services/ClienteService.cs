using Backend.Application.DTOs;
using Backend.Domain.Entities;
using Backend.Domain;
using Backend.Domain.Interfaces;

namespace Backend.Application.Services
{
    public class ClienteService : IService
    {
        private readonly IClienteRepository _clienteRepository;
        public ClienteService(IClienteRepository clienteRepository)
        {
            _clienteRepository = clienteRepository;
        }

        public async Task<PageResult<Cliente>> ListAsync(int pageOffset)
        {
            var list = await _clienteRepository.ListPagedAsync(pageOffset, 5);
            return list;
        }

        public async Task CreateAsync(CreateClienteDTO_Req data)
        {
            var newItem = new Cliente
            {
                Nome = data.Nome,
                Email = data.Email,
                Telefone = data.Telefone
            };
            await _clienteRepository.CreateAsync(newItem);
        }

        public async Task UpdateAsync(UpdateClienteDTO_Req data)
        {
            var item = await _clienteRepository.GetByIdAsync(data.Id);
            if (item is not null)
            {
                await _clienteRepository.UpdateAsync(item);
            }
        }

        public async Task RemoveAsync(int id)
        {
            var item = await _clienteRepository.GetByIdAsync(id);
            if (item is not null)
            {
                await _clienteRepository.DeleteAsync(item);
            }
        }

    }
}
