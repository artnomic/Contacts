import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { Botao, BotaoSalvar } from '../../styles'
import PhoneInput from '../ValidaTelefone'
import EmailInput from '../ValidaEmail'

type Props = ContatoClass

const Contato = ({
  titulo,
  telefone: telefoneOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setestaEditando] = useState(false)
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (telefoneOriginal.length > 0) setTelefone(telefoneOriginal)
  }, [telefoneOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) setEmail(emailOriginal)
  }, [emailOriginal])

  function cancelarEdicao() {
    setestaEditando(false)
    setTelefone(telefoneOriginal)
    setEmail(emailOriginal)
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
      </label>

      {estaEditando ? (
        <PhoneInput onValidPhone={(validPhone) => setTelefone(validPhone)} />
      ) : (
        <S.CampoContato
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          disabled={!estaEditando}
        />
      )}

      {estaEditando ? (
        <EmailInput onValidEmail={(validEmail) => setEmail(validEmail)} />
      ) : (
        <S.CampoContato
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={!estaEditando}
        />
      )}

      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    id,
                    titulo,
                    telefone,
                    email
                  })
                )
                setestaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setestaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
