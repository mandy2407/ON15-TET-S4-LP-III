  let valorTotal = []
  let valorDesconto = []
 
function calcularDesconto(valor) {
    if (valor >= 200.0) {
        valorDesconto.push(valor * 0.5)
    } else if (valor >= 100.0) {
        valorDesconto.push(valor * 0.2)
    } else if (valor >= 80.0) {
        valorDesconto.push(valor * 0.1)
    } else if (valor >= 50.0) {
        valorDesconto.push(valor * 0.05)
    }
}

function realizarcompras(comprasDosClientes) {

    let quantidadedeProdutos = comprasDosClientes.length
    comprasDosClientes.forEach(item => {
        valorTotal.push(item.valor)
        calcularDesconto(item.valor)
    })
    
    valorTotal = valorTotal.reduce((acumulador, atual) => acumulador + atual)
    valorDesconto = valorDesconto.reduce((acumulador, atual) => acumulador + atual)
    let valorFinal = valorTotal - valorDesconto
    let dataDaCompra = new Date()


    let notaFiscal = {
        "Valor Total": `R$${valorTotal.toFixed(2).replace('.', ',')}`,
        "Desconto Aplicado": `R$${valorDesconto.toFixed(2).replace('.', ',')}`,
        "Valor Final": `R$${valorFinal.toFixed(2).replace('.', ',')}`,
        "Data de Compra": dataDaCompra.toLocaleDateString('pt-BR', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        })
    }

    if(quantidadedeProdutos > 10 || valorFinal > 800.0) {
        return console.table({
            ...notaFiscal,
            "Supresa": "Você foi a sortuda e ganhou um cupom de 50 reais para utilizar na próxima compra!"
        })
    } else {
        return console.table(notaFiscal)
    }
}


/////////////////////////// DADOS //////////////////////////// 
   let clienteLilit = [
{produto: 'Bolsa pequena', valor: 49.0},
{produto: 'Cinto preto', valor: 22.0},
{produto: 'Jaqueta Jeans', valor: 300.0},
{produto: 'Calça preta', valor: 100.0},
{produto: 'Blusa simples', valor: 35.0},
{produto: 'Calça jeans clara', valor: 130.0},
{produto: 'Blusa preta gola alta', valor: 60.0},
{produto: 'Short verde canelado', valor: 80.0},
{produto: 'Salto agulha 39', valor: 250.0},
{produto: 'Ténis casual preto', valor: 120.0},
{produto: 'meia calça transparente', valor: 30.0}]

    let clienteAdrielle = [
{produto: 'Cropped Preto', valor: 25.0},
{produto: 'Batom vermelho', valor: 10.0},
{produto: 'Meia calça preta', valor: 40.0},
{produto: 'Salto alto vermelho', valor: 100.0}]

    let clienteEmanuelly = [
    {produto: 'Camisa xadrez', valor: 35.0},
    {produto: 'Bota preta', valor: 150.0},
    {produto: 'Meia calça vermelha', valor: 40.0},
    {produto: 'Camisa personalizada anime', valor: 120.0}]
    
    console.log("Valores da compra da Lilit")
    realizarcompras(clienteLilit)