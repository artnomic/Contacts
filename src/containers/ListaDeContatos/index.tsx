import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = itens.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      return contatosFiltrados
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (termo !== undefined && termo.length > 0) {
      mensagem = `Mostrando ${quantidade} contato(s) encontrada(s) como ${complementacao}`
    } else {
      mensagem = `Mostrando ${quantidade} contato(s) ${complementacao}`
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
            <Tarefa id={t.id} descricao={t.descricao} titulo={t.titulo} />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
