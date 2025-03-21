namespace Backend.Domain.Entities
{
    public class Cliente : Entity
    {
        public string Nome { get; set; } = default!;
        public string Email { get; set; } = default!;
        public string Telefone { get; set; } = default!;
        public bool Ativo { get; set; } = true;
    }
}
