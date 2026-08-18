import { useLocalStorage } from '@vueuse/core'

const mockCoffes = [
  {
    id: 1,
    nome: 'Serra Dourada',
    produtor: 'Fazenda Horizonte',
    categoria: 'Catuaí Amarelo',
    aroma: 9,
    sabor: 9.2,
    acidez: 8.8,
    corpo: 9,
    finalizacao: 9.1,
    nota: 9.02,
    data: '12/08/2026',
  },
  {
    id: 2,
    nome: 'Doce Cerrado',
    produtor: 'Sítio Boa Vista',
    categoria: 'Bourbon Amarelo',
    aroma: 8.7,
    sabor: 9.3,
    acidez: 8.9,
    corpo: 8.6,
    finalizacao: 9,
    nota: 8.9,
    data: '13/08/2026',
  },
  {
    id: 3,
    nome: 'Mantiqueira Reserva',
    produtor: 'Fazenda Pedra Alta',
    categoria: 'Mundo Novo',
    aroma: 8.5,
    sabor: 8.8,
    acidez: 9.2,
    corpo: 8.9,
    finalizacao: 8.7,
    nota: 8.82,
    data: '14/08/2026',
  },
]

const coffeList = useLocalStorage('coffeList', mockCoffes, { mergeDefaults: true })
const nextId = useLocalStorage('nextId', 4, { mergeDefaults: true })

function calculateScore(coffe) {
  const scores = [
    Number(coffe.aroma),
    Number(coffe.sabor),
    Number(coffe.acidez),
    Number(coffe.corpo),
    Number(coffe.finalizacao),
  ]

  return Number((scores.reduce((total, score) => total + score, 0) / scores.length).toFixed(2))
}

function addCoffe(coffe) {
  const hoje = new Date()
  const coffeWithId = {
    id: nextId.value,
    ...coffe,
    nota: calculateScore(coffe),
    data: hoje.toLocaleDateString('pt-BR'),
  }
  coffeList.value.push(coffeWithId)
  nextId.value++
}

function removeCoffe(id) {
  coffeList.value = coffeList.value.filter((coffe) => coffe.id !== id)
}

function getRanking() {
  return [...coffeList.value].sort((a, b) => b.nota - a.nota)
}

export { coffeList, addCoffe, removeCoffe, getRanking, calculateScore }
