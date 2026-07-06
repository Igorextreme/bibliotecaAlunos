# Sistema de Biblioteca — Atividade Avaliativa

**Disciplina:** Programação Web
**Tipo:** Atividade avaliativa individual
**Objetivo:** Testar os conhecimentos de JavaScript e manipulação do DOM

## Descrição

Vocês receberam um sistema de biblioteca **incompleto**. As funcionalidades de gerenciamento (alugar, devolver, buscar, remover livros e mostrar estatísticas) **não estão implementadas** — está marcado como `TODO` no arquivo `app.js`.

A parte de lógica da biblioteca já está pronta no arquivo `biblioteca.js`. O que vocês precisam fazer é **conectar os botões do HTML com a lógica**, escrevendo o JavaScript que falta.

## O que deve ser implementado

1. **Alugar livro** — pegar o nome digitado e chamar `biblioteca.alugar(nome)`
2. **Devolver livro** — pegar o nome digitado e chamar `biblioteca.devolver(nome)`
3. **Buscar livro** — procurar um livro pelo nome e exibir os detalhes na tela
4. **Mostrar estatísticas** — exibir total de livros, disponíveis, alugados, etc.
5. **Remover livro** — remover um livro pelo nome
6. **Mostrar disponíveis** — exibir apenas os livros que não estão alugados

## Arquivos do projeto

| Arquivo | O que contém |
|---|---|
| `index.html` | Estrutura da página (não precisa alterar) |
| `style.css` | Estilização da página |
| `app.js` | **Arquivo para editar** — contém os `TODO`s |
| `biblioteca.js` | Lógica do sistema (não precisa alterar) |

## Regras

- Não alterar o arquivo `index.html`
- Os comentários `TODO` indicam exatamente o que cada função deve fazer
- Utilize `document.getElementById()` para acessar os inputs
- Utilize `mostrarMensagem()` para exibir feedback ao usuário
- Utilize `atualizarListaLivros()` para atualizar a tabela após cada operação

## Critérios de avaliação

- Funcionamento correto de cada funcionalidade
- Organização e clareza do código
- Uso correto dos métodos da biblioteca (`biblioteca.alugar`, `biblioteca.devolver`, etc.)
- Tratamento de erros (campos vazios, livro não encontrado, etc.)
- Entrega no prazo

## Como testar

Abra o arquivo `index.html` no navegador. Os botões das funções que já estão prontas (Adicionar Livro, Mostrar Todos) devem funcionar imediatamente. Após implementar cada `TODO`, o botão correspondente passará a funcionar.

Boa sorte!
