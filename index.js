const prompt = require('prompt-sync')()
const usuarios = []

let ultimoID = 1

const emailValido = email => {
      let valido = true
    
      usuarios.forEach(usuario => {
        if(email == usuario.email){
            console.log("Email inválido")
            valido = false
        }
      })
    
      return valido && email != "" && email.includes("@")
}
const modelo = () => {
    const nome = prompt("Digite seu nome: ")
    const email = prompt("Digite o seu email: ")
    const telefones = []

    while(true) {
        const telefone = prompt = prompt("Digite o número do usuário, ou digite 'sair': ")

        if(telefone == 'sair') {
            break
        }
    telefones.push(telefone)
    }
        if(nome != "" && telefones.length > 0 && emailValido(email)){
            
            if(ID != undefined) {
            const usuario = {
                nome, 
                email, 
                telefones, 
                ID,
            };
        } else{
             usuario = {
                nome, 
                email, 
                telefones, 
                ID: ++ultimoID
        };
        ultimoID++;
    return usuario
    }
    console.log("Os dados inseridos são inválidos! ")
};

const criar = () => {
    const usuario = modelo 
    
    if(usuario != undefined) {
        usuarios.push(usuario)
    }
};

const ler = () =>{
    usuarios.forEach(usuario => {
        console.log(`
        ID: ${usuario.ID},
        Email: ${usuario.nome},
        Telefone: ${usuario.telefone} `)
    })
}
const atualizar = () => {
    ler();
    const ID = prompt("Digite o ID que deseja atualizar: ");

    const novo = modelo(ID);

    usuarios.forEach((usuario, indice) => {
        if(ID == usuario.ID)
    })
};



