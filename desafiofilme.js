let buscaCliente1 = "suspense";
let buscaCliente2 = "Corpo Elétrico";
let buscaCliente3 = "Homem-Aranha: Sem Volta para Casa";
let buscaCliente4 = "sci-fi";
let buscaCliente5 = "romance";

function buscarPorTitulo(entrada) {
  let filmesEncontrados = []
  entrada = entrada.toLowerCase()
  data.forEach(filme => {
      let titulo = filme.titulo.toLowerCase()
      if (titulo.includes(entrada)) {
          filmesEncontrados.push(filme)
      }
  })
  return filmesEncontrados
}

function buscarPorGenero(entrada) {
  let listaPorGenero = []
  entrada = entrada.toLowerCase()
  for (let filme of data) {
      if (typeof(filme.genero) == "string") {
          let filmeEncontrado = (filme.genero).toLowerCase().includes(entrada)
          !!filmeEncontrado ? listaPorGenero.push(filme) : null
      } else {
          let filmeEncontradoArray = filme.genero.find(genero => genero.toLowerCase().includes(entrada))
          filmeEncontradoArray != undefined ? listaPorGenero.push(filme) : null
      }
  }
  return listaPorGenero
}


function buscarFilmes(entrada) {
  if (typeof(entrada) == "string") {
      let porTitulo = buscarPorTitulo(entrada)
      let porGenero = buscarPorGenero(entrada)
      if(porTitulo.length > 0 && porGenero.length > 0) {
          console.table("Encontrados por Nome:")
          console.table(porTitulo)
          console.table("Encontrados por gênero:")
          console.table(porGenero)
      } else if (porTitulo.length > 0) {
          console.table("Encontrados por título:")
          console.table(porTitulo)
      } else if (porGenero.length > 0) {
          consoletable("Encontrados por gênero:")
          console.table(porGenero)
      } else {
          console.table("Nenhum filme foi encontrado com a palavra digitada. Tente novamente.")
      }    
  } else {
      console.table('Não encontrado')
  }
}

///////////////////////////////////BANCO DE DADOS)///////////////////////////////////////////
let data = [
  {
    titulo: "us",
    genero: "terror",
    ano: "2019", 
  },
  {
    titulo: "transformers: O Lado Oculto da Lua",
    genero: ["ação", "sci-fi"],
    ano: "2011", 
  },
  {
    titulo: "moonfall - ameaça lunar",
    genero: ['Aventura', "sci-fi"],
    ano: "2022", 
  },
  {
    titulo: "casa gucci",
    genero: "drama",
    ano: "2021", 
  },
  {
    titulo: "encanto",
    genero: ["animação", "musical"],
    ano: "2021", 
  },
  {
    titulo: "Demon Slayer - Mugen Train",
    genero: ["ação", "fantasia"],
    ano: "2019", 
  },
  {
    titulo: "O Último Suspiro",
    genero: ["drama", "sci-fi"],
    ano: "2019", 
  },
  {
    titulo: "Suspiria",
    genero: "terror",
    ano: "1977", 
  },
  {
    titulo: "Corpo Elétrico",
    genero: ["drama", "ficção"],
    ano: "2017", 
  },
  {
    titulo: "Amour",
    genero: ["drama", "romance"],
    ano: "2012", 
  },
  {
    titulo: "Ninho de Musaranho",
    genero: "terror",
    ano: "2014", 
  },
  {
    titulo: "Colonia",
    genero: "suspense",
    ano: "2015", 
  },
  {
    titulo: "Homem-Aranha: Sem Volta para Casa",
    genero: ["ação", "aventura"],
    ano: "2021", 
  }]

  buscarFilmes("T")  