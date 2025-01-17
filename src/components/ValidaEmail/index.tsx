import React, { useState } from 'react'
import StyledEmailInput from './styles'

type EmailInputProps = {
  onValidEmail: (email: string) => void
}

const EmailInput: React.FC<EmailInputProps> = ({ onValidEmail }) => {
  const [email, setEmail] = useState<string>('')
  const [isValid, setIsValid] = useState<boolean>(true)

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)

    if (emailRegex.test(value)) {
      setIsValid(true)
      onValidEmail(value)
    } else {
      setIsValid(false)
    }
  }

  return (
    <div>
      <StyledEmailInput
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="email@example.com"
        style={{
          borderColor: isValid ? 'initial' : 'red'
        }}
      />
      {!isValid && (
        <p style={{ color: 'red', marginTop: '5px' }}>
          E-mail inválido. Use o formato: email@dominio.com
        </p>
      )}
    </div>
  )
}

export default EmailInput
