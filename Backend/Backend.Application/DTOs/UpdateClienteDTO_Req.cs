using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Application.DTOs
{
    public class UpdateClienteDTO_Req
    {
        public int Id { get; set; }
        public string Email { get; set; } = default!;
        public string Nome { get; set; } = default!;
    }
}
