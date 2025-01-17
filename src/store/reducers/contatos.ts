import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contato from '../../models/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: []
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDoContato >= 0) state.itens[indexDoContato] = action.payload
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const { titulo, email, telefone } = action.payload

      const contatoComMesmoTitulo = state.itens.find(
        (contato) => contato.titulo.toLowerCase() === titulo.toLowerCase()
      )

      const contatoComMesmoEmail = state.itens.find(
        (contato) => contato.email.toLowerCase() === email.toLowerCase()
      )

      const contatoComMesmoTelefone = state.itens.find(
        (contato) => contato.telefone === telefone
      )

      if (contatoComMesmoTitulo) {
        alert(
          `Já existe um contato com o nome "${contatoComMesmoTitulo.titulo}"`
        )
      } else if (contatoComMesmoEmail) {
        alert(
          `O e-mail "${email}" já está cadastrado no contato "${contatoComMesmoEmail.titulo}"`
        )
      } else if (contatoComMesmoTelefone) {
        alert(
          `O telefone "${telefone}" já está cadastrado no contato "${contatoComMesmoTelefone.titulo}"`
        )
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]

        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }

        state.itens.push(tarefaNova)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
