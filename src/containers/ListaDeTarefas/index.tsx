import Tarefa from '../../components/Tarefa'

import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar sobre React',
    descricao: 'Estudar sobre React',
    prioridade: 'Baixa',
    stautsCard: 'Em andamento'
  },
  {
    titulo: 'Pagar conta',
    descricao: 'Estudar sobre React',
    prioridade: 'Alta',
    stautsCard: 'Pendente'
  },
  {
    titulo: 'Falar com a Carol',
    descricao: 'Estudar sobre React',
    prioridade: 'Baixa',
    stautsCard: 'Em andamento'
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
            statusCard={t.stautsCard}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
