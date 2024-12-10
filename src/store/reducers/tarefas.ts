import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar Js com React',
      'Estudar sobre React',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      1
    ),
    new Tarefa(
      'Pagar conta',
      'Estudar sobre React',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      2
    ),
    new Tarefa(
      'Falar com a Carol',
      'Estudar sobre React',
      enums.Prioridade.IMPORTANTE,
      enums.Status.CONCLUIDA,
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
