const prompt = require("prompt-sync")();

const { criar, atualizar, remover, listar } = require("./index");   

while (true) {
        console.log(`
        1. Criar usuário
        2. Listar usuários
        3. Atualizar usuário
        4. Excluir usuário
        5. Sair
          `);

        const opcao = prompt();

        switch (opcao) {
            case "1":
                criar();
                break;
            case "2":
                listar();
                break;
            case "3":
                atualizar();
                break;
            case "4":
                remover();
                break;
            case "5":
                process.exit()
                break;
            default:
              console.log("Opção invalida")
            break;       
    }
}