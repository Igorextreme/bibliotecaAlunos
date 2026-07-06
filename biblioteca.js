// ============================================
// BIBLIOTECA - LÓGICA PRINCIPAL
// ============================================
// ALUNOS: Complete as funções marcadas com TODO
// ============================================
biblioteca = {
    livros: [],

    // ==========================================
    // 1. ADICIONAR LIVRO (JÁ PRONTO)
    // ==========================================
    adicionarLivros(nome, autor, categoria, estoque) {
        const livro = {
            nome: nome,
            autor: autor,
            categoria: categoria,
            estoque: estoque,
            disponivel: true,
            alugado: false,
            vezesAlugado: 0
        };

        this.livros.push(livro);
        console.log("Livro adicionado:", livro.nome);
    },

    // ==========================================
    // 2. MOSTRAR LIVROS (JÁ PRONTO)
    // ==========================================
    mostrarLivros() {
        for (let i = 0; i < this.livros.length; i++) {
            const p = this.livros[i];
            console.log(`${p.nome} - ${p.autor}`);
        }
    },

    // ==========================================
    // 3. ALUGAR LIVRO (JÁ PRONTO)
    // ==========================================
    alugar(nome) {
        for (let i = 0; i < this.livros.length; i++) {
            const p = this.livros[i];

            if (p.nome === nome) {
                if (p.disponivel && p.estoque > 0) {
                    p.disponivel = false;
                    p.alugado = true;
                    p.vezesAlugado++;
                    p.estoque--;

                    console.log(nome + " alugado com sucesso");
                } else if (p.estoque <= 0) {
                    console.log("O livro " + nome + " está sem estoque!");
                } else {
                    console.log("O livro " + nome + " já está alugado!");
                }

                return;
            }
        }

        console.log("O livro " + nome + " não existe.");
    },

    // ==========================================
    // 4. DEVOLVER LIVRO (JÁ PRONTO)
    // ==========================================
    devolver(nome) {
        for (let i = 0; i < this.livros.length; i++) {
            const p = this.livros[i];
            if (p.nome === nome) {
                if (p.disponivel == false) {
                    p.disponivel = true;
                    p.alugado = false;
                    p.estoque = 1;
                    console.log("Livro", nome, "devolvido com sucesso!");
                    return;
                } else {
                    console.log("O", nome, "ja esta disponivel!")
                    return;
                }
            }
        }
        console.log("O", nome, "Nao foi encontrado!!")
    },

    // ==========================================
    // 5. REMOVER LIVRO (JÁ PRONTO)
    // ==========================================
    removerLivro(nome) {
        for (let i = 0; i < this.livros.length; i++) {
            if (this.livros[i].nome.toLowerCase() === nome.toLowerCase()) {
                const removido = this.livros[i];
                this.livros.splice(i, 1);
                console.log("Livro removido", removido.nome);
                return;
            }
        }
        console.log("Produto não encontrado");
    },

    // ==========================================
    // 6. BUSCAR LIVRO (JÁ PRONTO)
    // ==========================================
    buscarLivro(nome) {
        for (let i = 0; i < this.livros.length; i++) {
            const p = this.livros[i]
            if (p.nome.toLowerCase() === nome.toLowerCase()) {
                console.log("Nome: " + p.nome);
                console.log("Estoque: " + p.estoque)
                return p;
            }
        }
        console.log("Livro não encontrado");
        return null
    },

    // ==========================================
    // 7. LIVROS DISPONÍVEIS (TODO - ALUNOS COMPLETAM)
    // ==========================================
    livrosDisponiveis() {
        // TODO: Implementar a função
        // 1. Criar um array vazio chamado 'disponiveis'
        // 2. Percorrer this.livros com um loop for
        // 3. Se livro.disponivel === true, adicionar ao array
        // 4. Retornar o array 'disponiveis'
        //
        // DICA: Use push() para adicionar ao array
        // Exemplo: disponiveis.push(livro)

        // Retorne o array de livros disponíveis
        return [];
    },

    // ==========================================
    // 8. ESTATÍSTICAS (TODO - ALUNOS COMPLETAM)
    // ==========================================
    estatisticas() {
        // TODO: Implementar a função
        // 1. Calcular total de livros: this.livros.length
        // 2. Calcular quantos estão disponíveis
        // 3. Calcular quantos estão alugados
        // 4. Calcular total de aluguéis (vezesAlugado)
        // 5. Encontrar o livro mais alugado
        //
        // DICA: Use um loop for e acumule os valores
        // DICA: Compare livro.vezesAlugado com uma variável 'maior'

        // Exemplo de retorno (descomente quando implementar):
        // return {
        //     total: total,
        //     disponiveis: disponiveis,
        //     alugados: alugados,
        //     totalAlugueis: totalAlugueis,
        //     mediaAlugueis: mediaAlugueis,
        //     livroMaisAlugado: livroMaisAlugado
        // };

        // Retorne vazio por enquanto
        return null;
    }
};

