import Tarefa from '../../components/Tarefa'

import { Container } from './styles'

const ListaDeTarefas = () => (
  <Container>
    <p>
      2 tarefas marcadas como: &ldquo;Categoria&rdquo; e &ldquo;Termo&rdquo;
    </p>
    <ul>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
    </ul>
  </Container>
)

export default ListaDeTarefas
