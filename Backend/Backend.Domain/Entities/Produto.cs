namespace Backend.Domain.Entities
{
    public class Produto : Entity
    {
        public string Nome { get; set; } = default!;
        public decimal Preco { get; set; }
        public int Estoque { get; set; }
    }
}
