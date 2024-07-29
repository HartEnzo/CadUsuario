const prompt = require('prompt-sync')(); // Importa a função prompt do prompt-sync

let usuarios = [];

// Função para criar um novo usuário
function criarUsuario() {
    const nome = prompt("Digite o nome do usuário: ");
    const email = prompt("Digite o email do usuário: ");

    // Verifica se o email já está cadastrado
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === email) {
            console.log("Erro: Email já cadastrado.");
            return;
        }
    }

    // Gera um novo ID baseado no tamanho atual da lista
    const novoId = usuarios.length + 1;

    // Cria um novo usuário e adiciona à lista
    const novoUsuario = {
        id: novoId,
        nome: nome,
        email: email,
        telefones: []
    };

    usuarios.push(novoUsuario);
    console.log("Usuário cadastrado com sucesso.");
}

// Função para listar todos os usuários cadastrados
function listarUsuarios() {
    console.log("Usuários cadastrados:");
    usuarios.forEach(usuario => {
        console.log("ID: " + usuario.id);
        console.log("Nome: " + usuario.nome);
        console.log("Email: " + usuario.email);
        console.log("Telefones:");
        usuario.telefones.forEach(telefone => {
            console.log("- " + telefone);
        });
        console.log("----------------------");
    });
}

// Função para atualizar informações de um usuário
function atualizarUsuario() {
    const id = parseInt(prompt("Digite o ID do usuário que deseja atualizar: "));

    const usuario = usuarios.find(u => u.id === id);
    if (!usuario) {
        console.log("Usuário não encontrado.");
        return;
    }

    const novoNome = prompt("Digite o novo nome do usuário (deixe em branco para manter): ");
    if (novoNome.trim() !== '') {
        usuario.nome = novoNome;
    }

    const novoEmail = prompt("Digite o novo email do usuário (deixe em branco para manter): ");
    if (novoEmail.trim() !== '') {
        // Verifica se o novo email já está cadastrado
        const emailExistente = usuarios.find(u => u.email === novoEmail);
        if (emailExistente && emailExistente.id !== id) {
            console.log("Erro: Email já cadastrado para outro usuário.");
            return;
        }
        usuario.email = novoEmail;
    }

    console.log("Usuário atualizado com sucesso.");
}

// Função para adicionar um telefone a um usuário
function adicionarTelefone() {
    const id = parseInt(prompt("Digite o ID do usuário que deseja adicionar telefone: "));

    const usuario = usuarios.find(u => u.id === id);
    if (!usuario) {
        console.log("Usuário não encontrado.");
        return;
    }

    const maisTelefones = prompt("Digite os números de telefone separados por vírgula (ex: 123456789,987654321): ");
    const telefonesNovos = maisTelefones.split(',').map(t => t.trim());
    usuario.telefones.push(...telefonesNovos);

    console.log("Telefone(s) adicionado(s) com sucesso.");
}

// Função para excluir um usuário
function excluirUsuario() {
    const id = parseInt(prompt("Digite o ID do usuário que deseja excluir: "));

    const index = usuarios.findIndex(u => u.id === id);
    if (index === -1) {
        console.log("Usuário não encontrado.");
        return;
    }

    usuarios.splice(index, 1);
    console.log("Usuário excluído com sucesso.");
}

// Função principal para interação com o usuário
function principal() {
    while (true) {
        console.log("\n### Menu ###");
        console.log("1. Criar usuário");
        console.log("2. Listar usuários");
        console.log("3. Atualizar usuário");
        console.log("4. Adicionar telefone");
        console.log("5. Excluir usuário");
        console.log("6. Sair");

        const opcao = parseInt(prompt("Digite a opção desejada: "));

        switch (opcao) {
            case 1:
                criarUsuario();
                break;
            case 2:
                listarUsuarios();
                break;
            case 3:
                atualizarUsuario();
                break;
            case 4:
                adicionarTelefone();
                break;
            case 5:
                excluirUsuario();
                break;
            case 6:
                console.log("Saindo...");
                return;
            default:
                console.log("Opção inválida.");
        }
    }
}

// Chamada da função principal para iniciar o programa
principal();


