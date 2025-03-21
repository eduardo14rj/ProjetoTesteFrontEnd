using Backend.Application.DTOs;
using Backend.Application.Services;
using Backend.Infra.Context;
using Backend.Infra.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{

    public class ClienteController : BackendController
    {
        ClienteService ClienteService;
        public ClienteController(ClienteService clienteService)
        {
            ClienteService = clienteService;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create(CreateClienteDTO_Req data)
        {
            await ClienteService.CreateAsync(data);
            return Ok();
        }

        [HttpGet("Read")]
        public async Task<IActionResult> List([FromQuery] int pageOffset)
        {
            var produtos = await ClienteService.ListAsync(pageOffset);
            return Ok(produtos);
        }

        [HttpPut("Update")]
        public async Task<IActionResult> Update(UpdateClienteDTO_Req data)
        {
            await ClienteService.UpdateAsync(data);
            return Ok();
        }

        [HttpDelete("Delete")]
        public async Task<IActionResult> Remove(RemoveClienteDTO_Req data)
        {
            await ClienteService.RemoveAsync(data.Id);
            return Ok();
        }
    }
}
