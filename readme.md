# ProjetoTesteFrontend

Este repositório contém dois projetos: um para o Backend e outro para o Frontend.

## Estrutura do Projeto

```
ProjetoTesteFrontend/
│
├── Backend/
│   ├── Backend/
|   |   ├── Backend.sln
│   │   ├── Backend.csproj
│   │   ├── Controllers/
│   │   ├── Program.cs
│   │   └── ...outros arquivos e pastas...
│   ├── Backend.Application/
│   │   ├── Backend.Application.csproj
│   │   ├── Services/
│   │   └── ...outros arquivos e pastas...
│   ├── Backend.Domain/
│   │   ├── Backend.Domain.csproj
│   │   ├── Entities/
│   │   ├── Interfaces/
│   │   └── ...outros arquivos e pastas...
│   └── Backend.Infra/
│       ├── Backend.Infra.csproj
│       ├── Context/
│       ├── Repositories/
│       └── ...outros arquivos e pastas...
│
└── Frontend/
    ├── angular.json
    ├── package.json
    ├── src/
    └── e2e/
```

## Execução do projeto

### Backend

1. Certifique-se de ter o [.NET SDK](https://dotnet.microsoft.com/download) instalado.
2. Navegue até a pasta `Backend`.
3. Abra o arquivo `Backend.sln` no Visual Studio.
4. Compile e execute o projeto a partir do Visual Studio.

### Frontend

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado no `Frontend/Frontend`.
2. Navegue até a pasta `Frontend/Frontend`.
3. Execute `npm install` para instalar as dependências.
4. Execute `ng serve` para iniciar a aplicação.