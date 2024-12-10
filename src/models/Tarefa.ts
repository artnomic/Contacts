import * as enums from '../utils/enums/Tarefa'

class Tarefa {
  titulo: string
  descricao: string
  prioridade: enums.Prioridade
  status: enums.Status
  id: number

  constructor(
    titulo: string,
    descricao: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    id: number
  ) {
    this.titulo = titulo
    this.descricao = descricao
    this.prioridade = prioridade
    this.status = status
    this.id = id
  }
}

export default Tarefa
