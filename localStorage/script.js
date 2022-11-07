
/// para salvar usa o setItem

localStorage.setItem("nome da chave", "valor")

/// restart sem perder dados



/// resgatar item

const name = localStorage.getItem("o nome da chave");

/// resgatar de item q nao existe
const lastName = localStorage.getItem("lastename") // deve retornar null

/// remover itrem
localStorage.removeItem("nome da chave");


/// limpar todos os itens
localStorage.clear(); /// ele apaga tudo, nao rpecisa de parametro









/// session storage
sessionStorage.setItem("chave", "valor"); // ele n salva muito bem

/// renicnar e perder dados


/// salvar obj

const person = {
    name: "matheus",
    age: 31,
    job: "PROGRAMDOR",
}

localStorage.setItem("person", JSON.stringify(person)) /// transformou em texto

// agr para pegar de nvo como obj

const getPerson = localStorage.getItem("person");

const personObject = JSON.parse(getPerson);

console.log(personObject.job);