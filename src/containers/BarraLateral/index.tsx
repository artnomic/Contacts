import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { alteraTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

import * as S from './styles'
import { Botao, Campo } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Pesquisar"
              value={termo}
              onChange={(e) => dispatch(alteraTermo(e.target.value))}
            />
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>
            Voltar a lista de contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
