const prompt = require('prompt-sync')()
const usuarios = []

let ultimoID = 0;

const emailNDuplicado = (email, ID) => {
    if(usuarios.find(usuario => usuario.email == email && usuario.ID != ID)) {
        console.log("Email duplicado! ")
        return false
    }
    return true

};
const modelo = (ID = ++ultimoID) => {
    const nome = prompt("Digite seu nome: ");
    const email = prompt("Digite o seu e-mail: ");
    const telefones = []

    while(true) {
        const telefone = prompt("Digite o número de telefone, ou 0 para sair: ");

        if(telefone == 0) {
            break;
        }
    telefones.push(telefone);
    }
        if(emailNDuplicado(email, ID)) {
            return{
                nome, 
                email, 
                telefones, 
                ID,
            };
        }
        
    console.log("Falha em realizar o procedimento");
        };

    const criar = () => {
         const novo = modelo(); 
    
    if(novo) {
        usuarios.push(novo);
        console.log("Usuário criado com sucesso! ")
    }
};
const listar = () =>{
   if(usuarios.length == 0) {
    console.log("Lista de usuários vazia");
    return false;
   }else {
    usuarios.forEach(usuario => {
        console.log(`
        ID: ${usuario.ID},
        Email: ${usuario.nome},
        Telefone: ${usuario.telefone} `);
    usuario.telefones.forEach((telefone, indice) => {
        console.log(`Telefone ${indice + 1}: ${telefone}`);
    });
});
return true;
  }
};

const atualizar = () => {
    if(listar()) {
        const ID = prompt("Digite o ID que deseja atualizar: ");
    
        const novo = modelo(ID);

        const indice = usuarios.findIndex(usuario => ID == usuario.ID)

        if(indice != -1) {
            usuarios[indice] = novo
      
        }else {
            console.log('ID inexistente')
        }
    }
};

const remover = () => {
    if(listar()) {
        const ID = prompt("Qual o ID do usuário que deseja remover? ")

        const indice = usuarios.findIndex(usuario => ID == usuario.ID)

        if(indice != -1) {
            usuarios.splice(indice, 1)
        }else {
            console.log('ID inexistente')
        }
    }
}

module.exports = {
    criar,
    atualizar,
    remover,
    listar
}
