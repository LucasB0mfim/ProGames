import { useEffect, useState } from 'react'

import ProductsList from '../../components/ProductsList'
import { Game } from '../Home'

const Categories = () => {
  //Criando um estado para cada categoria:
  const [gameAcao, setGameAcao] = useState<Game[]>([])
  const [gameEsportes, setGameEsportes] = useState<Game[]>([])
  const [gameSimulacao, setGameSimulacao] = useState<Game[]>([])
  const [gameLuta, setGameLuta] = useState<Game[]>([])
  const [gameRPG, setGameRPG] = useState<Game[]>([])
  //
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGameAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGameEsportes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGameSimulacao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGameLuta(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGameRPG(res))
  }, [])
  //
  return (
    <>
      <ProductsList games={gameAcao} title="Ação" background="black" />
      <ProductsList games={gameEsportes} title="Esportes" background="gray" />
      <ProductsList games={gameLuta} title="Luta" background="black" />
      <ProductsList games={gameRPG} title="RPG" background="gray" />
      <ProductsList
        games={gameSimulacao}
        title="Simulação"
        background="black"
      />
    </>
  )
}

export default Categories
