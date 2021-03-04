const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços usando map

const paraObjeto = json => JSON.parse(json)
const getPreco = item => item.preco
const precos = carrinho.map(paraObjeto).map(getPreco)
console.log(precos)