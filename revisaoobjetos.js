const professora = new Object()
  professora.nome = "Lilit"
  professora.sobrenome = "Bandeira"
  professora.cidade = "São Paulo"

const aluna = {
  nome: { primeiro: "Amanda", segundo: "Auzier" },
   _id: 2323224243,
  idade: 20,
  cidade: "Manaus",
  interesses: ["música", "animes"],
  saudacao: () => console.log("olá meninas"),

};

let hoje = new Date()
let dia = hoje.getDate()
let mes = hoje.getMonth()
let ano = hoje.getFullYear()
// console.log(hoje) // 2022-04-16T10:56:49.693Z
// console.log(`${dia}/${mes + 1}/${ano}`)

let objetoFormatacao = {
    Weekday: "long",
    year: "numeric",
    day: "numeric",
    month: "long"
}

let dataFormatada = hoje.toLocaleDateString('pt-BR', )
console.log(dataFormatada)  // 16/04/2022
