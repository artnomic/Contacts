import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'
import { alteraTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Pesquisar"
          value={termo}
          onChange={(e) => dispatch(alteraTermo(e.target.value))}
        />
        <S.Filtros>
          <FiltroCard legenda="Pendentes" contador={1} />
          <FiltroCard legenda="Concluídas" contador={2} />
          <FiltroCard legenda="Urgentes" contador={3} />
          <FiltroCard legenda="Importantes" contador={4} />
          <FiltroCard legenda="Normal" contador={5} />
          <FiltroCard legenda="Todas" contador={15} ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
