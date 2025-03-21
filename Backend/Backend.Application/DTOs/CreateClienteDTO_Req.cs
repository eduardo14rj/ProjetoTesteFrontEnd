using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Application.DTOs
{
    public class CreateClienteDTO_Req
    {
        public string Email { get; set; } = default!;
        public string Nome { get; set; } = default!;
        public string Telefone { get; set; } = default!;

    }
}
