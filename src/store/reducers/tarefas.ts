import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar Js com React',
      descricao: 'Estudar sobre React',
      status: enums.Status.PENDENTE,
      prioridade: enums.Prioridade.IMPORTANTE
    },
    {
      id: 2,
      titulo: 'Pagar conta 50% de desconto',
      descricao: 'Estudar sobre React',
      status: enums.Status.PENDENTE,
      prioridade: enums.Prioridade.URGENTE
    },
    {
      id: 3,
      titulo: 'Falar com a Carol',
      descricao: 'Estudar sobre React',
      status: enums.Status.CONCLUIDA,
      prioridade: enums.Prioridade.IMPORTANTE
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
