class Contato {
  titulo: string
  telefone: string
  email: string
  id: number

  constructor(titulo: string, telefone: string, email: string, id: number) {
    this.titulo = titulo
    this.telefone = telefone
    this.email = email
    this.id = id
  }
}

export default Contato
