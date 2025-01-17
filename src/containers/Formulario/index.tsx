import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Form } from './styles'
import { MainContainer, Titulo, Campo, BotaoSalvar } from '../../styles'

import { cadastrar } from '../../store/reducers/contatos'

import PhoneInput from '../../components/ValidaTelefone'
import EmailInput from '../../components/ValidaEmail'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [erroTelefone, setErroTelefone] = useState(false)
  const [erroEmail, setErroEmail] = useState(false)

  const cadastrarContato = (e: FormEvent) => {
    e.preventDefault()

    if (!telefone) {
      setErroTelefone(true)
      return
    }

    if (!email) {
      setErroEmail(true)
      return
    }

    dispatch(
      cadastrar({
        titulo,
        telefone,
        email
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={titulo}
          onChange={({ target }) => setTitulo(target.value)}
          type="text"
          placeholder="Nome do Contato"
        />

        <PhoneInput
          onValidPhone={(validPhone) => {
            setTelefone(validPhone)
            setErroTelefone(false)
          }}
        />
        {erroTelefone && (
          <p style={{ color: 'red', marginTop: '5px' }}>
            Por favor, insira um telefone válido.
          </p>
        )}

        <EmailInput
          onValidEmail={(validEmail) => {
            setEmail(validEmail)
            setErroEmail(false)
          }}
        />
        {erroEmail && (
          <p style={{ color: 'red', marginTop: '5px' }}>
            Por favor, insira um e-mail válido.
          </p>
        )}

        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
