import Tarefa from '../../components/Tarefa'

import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar sobre React',
    descricao: 'Estudar sobre React',
    prioridade: 'Importante',
    status: 'Pendente'
  },
  {
    titulo: 'Pagar conta',
    descricao: 'Estudar sobre React',
    prioridade: 'Urgente',
    status: 'Pendente'
  },
  {
    titulo: 'Falar com a Carol',
    descricao: 'Estudar sobre React',
    prioridade: 'Importante',
    status: 'Concluída'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>
      2 tarefas marcadas como: &ldquo;Categoria&rdquo; e &ldquo;Termo&rdquo;
    </p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            titulo={t.titulo}
            descricao={t.descricao}
            prioridade={t.prioridade}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
