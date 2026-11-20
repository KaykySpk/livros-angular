# Catálogo de Livros (livros-angular)

Trabalho prático da disciplina **DGT2809 – Aprofundamento em Desenvolvimento Front-End**.
Sistema de catálogo de livros em **Angular 17**, TypeScript, HTML e Bootstrap 5.

## Funcionalidades
- Listagem de livros em tabela Bootstrap (código, título, resumo, editora e autores em lista).
- Exclusão de livros pelo botão da própria linha.
- Cadastro de livros com formulário (título e editora obrigatórios; autores separados por quebra de linha).
- Código do novo livro gerado automaticamente (maior código existente + 1).
- Navegação por rotas: `/lista`, `/dados` e rota padrão redirecionando para `/lista`.

## Estrutura
```
src/app/
  editora.ts                      entidade Editora
  livro.ts                        entidade Livro
  controle-editora.service.ts     getEditoras() e getNomeEditora() (filter)
  controle-livros.service.ts      obterLivros(), incluir(), excluir() (findIndex + splice)
  livro-lista/                    componente de listagem
  livro-dados/                    componente de cadastro
  app-routing.module.ts           rotas
  app.module.ts                   módulo raiz (FormsModule, componentes)
  app.component.*                 menu Bootstrap + router-outlet
```

## Pré-requisitos
- Node.js 18.13+ ou 20.9+ (e npm)

## Como executar
```bash
npm install
npm start          # ng serve -> http://localhost:4200
```

## Build e testes
```bash
npm run build      # gera dist/livros-angular
npm test           # testes unitários (Karma/Jasmine, requer Google Chrome)
npm run test:ci    # igual, em modo headless e sem watch
```

## Observações
- Os dados ficam em memória (vetores nos serviços); ao recarregar a página, voltam ao estado inicial.
- Após o primeiro `npm install`, faça commit do `package-lock.json` gerado.
