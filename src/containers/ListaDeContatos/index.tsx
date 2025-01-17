import { useSelector } from 'react-redux'

import Tarefa from '../../components/Contato'
import { MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = itens

    if (termo !== undefined && termo.length > 0) {
      contatosFiltrados = itens.filter((item) => {
        const termoNormalizado = termo.toLowerCase()
        const tituloNormalizado = item.titulo.toLowerCase()
        const emailNormalizado = item.email.toLowerCase()
        const telefoneNormalizado = item.telefone.toLowerCase()

        return (
          tituloNormalizado.includes(termoNormalizado) ||
          emailNormalizado.includes(termoNormalizado) ||
          telefoneNormalizado.includes(termoNormalizado)
        )
      })
    }

    return contatosFiltrados
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complemento =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (termo !== undefined && termo.length > 0) {
      mensagem = `Mostrando ${quantidade} contato(s) encontrada(s) como ${complemento}`
    } else {
      mensagem = `Mostrando ${quantidade} contato(s) ${complemento}`
    }

    return mensagem
  }

  const contatosFiltrados = filtraContatos()
  const mensagem = exibeResultadoFiltragem(contatosFiltrados.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {contatosFiltrados.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              telefone={t.telefone}
              email={t.email}
              titulo={t.titulo}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
