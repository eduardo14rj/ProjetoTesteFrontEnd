# ProjetoTesteFrontend

Este repositório contém dois projetos: um para o Backend e outro para o Frontend.

## Estrutura do Projeto

```
ProjetoTesteFrontend/
│
├── Backend/
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
    │   ├── app/
    │   │   ├── core/
    │   │   │   ├── classes/
    │   │   │   ├── interceptors/
    │   │   │   ├── models/
    │   │   │   ├── ui/
    │   │   ├── pages/
    │   │   ├── services/
    │   │   ├── shared/
    │   │   ├── template/
    │   ├── utils/
```

## Backend

O projeto Backend é uma aplicação ASP.NET Core que utiliza Entity Framework Core para persistência de dados.

### Estrutura do Backend

- **Backend.sln**: Arquivo de solução do Visual Studio.
- **Backend/Backend**: Projeto principal da aplicação.
- **Backend/Backend.Application**: Contém os serviços e DTOs.
- **Backend/Backend.Domain**: Contém as entidades e interfaces de repositório.
- **Backend/Backend.Infra**: Contém a implementação dos repositórios e o contexto do banco de dados.

### Como executar o Backend

1. Navegue até a pasta `Backend`.
2. Abra a solução `Backend.sln` no Visual Studio.
3. Compile e execute o projeto.

## Frontend

O projeto Frontend é uma aplicação Angular que consome a API do Backend.

### Estrutura do Frontend

- **angular.json**: Arquivo de configuração do Angular CLI.
- **package.json**: Arquivo de configuração do npm.
- **src**: Contém os arquivos fonte do projeto Angular.

### Como executar o Frontend

1. Navegue até a pasta `Frontend`.
2. Execute `npm install` para instalar as dependências.
3. Execute `ng serve` para iniciar a aplicação.