import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  //
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  //
  if (actionGames && simulationGames && sportGames && fightGames && rpgGames) {
    return (
      <>
        <ProductsList
          games={actionGames}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={sportGames}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProductsList
          games={fightGames}
          title="Luta"
          background="black"
          id="fight"
        />
        <ProductsList games={rpgGames} title="RPG" background="gray" id="rpg" />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="black"
          id="simulation"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories
