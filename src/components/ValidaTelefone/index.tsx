import React, { useState } from 'react'
import StyledPhoneInput from './styles'

type PhoneInputProps = {
  onValidPhone: (phone: string) => void
}

const PhoneInput: React.FC<PhoneInputProps> = ({ onValidPhone }) => {
  const [phone, setPhone] = useState<string>('')
  const [isValid, setIsValid] = useState<boolean>(true)

  const formatPhone = (value: string) => {
    const numbersOnly = value.replace(/\D/g, '')

    if (numbersOnly.length <= 2) return `(${numbersOnly}`
    if (numbersOnly.length <= 6)
      return `(${numbersOnly.slice(0, 2)}) ${numbersOnly.slice(2)}`
    if (numbersOnly.length <= 10)
      return `(${numbersOnly.slice(0, 2)}) ${numbersOnly.slice(
        2,
        6
      )}-${numbersOnly.slice(6)}`
    return `(${numbersOnly.slice(0, 2)}) ${numbersOnly.slice(
      2,
      7
    )}-${numbersOnly.slice(7, 11)}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value

    const formattedValue = formatPhone(inputValue)

    setPhone(formattedValue)

    const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/
    if (phoneRegex.test(formattedValue)) {
      setIsValid(true)
      onValidPhone(formattedValue)
    } else {
      setIsValid(false)
    }
  }

  return (
    <div>
      <StyledPhoneInput
        type="text"
        value={phone}
        onChange={handleChange}
        placeholder="(XX) XXXXX-XXXX"
        style={{
          borderColor: isValid ? 'initial' : 'red'
        }}
      />
      {!isValid && (
        <p style={{ color: 'red', marginTop: '5px' }}>
          Telefone inválido. Use o formato: (XX) XXXXX-XXXX
        </p>
      )}
    </div>
  )
}

export default PhoneInput
