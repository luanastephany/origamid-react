import React, { useState } from 'react'
import Input from '../input/Input'

//d{5} = dígitos (5)
//? = digito opcional
//$ = término
// ^ = tem que começar com os 5 dígitos

const App = () => {
  const [cep, setCep] = useState('')
  const [error, setError] = useState(null)

  function validateCep(value) {
    if (value.length === 0) {
      setError('Preencha um valor')
      return false
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um CEP válido')
      return false
    } else {
      setError(null)
      return true
    }
  }

  function handleBlur({ target }) {
    validateCep(target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (validateCep(cep)) {
      console.log('Enviou') //fetch enviando os dados
    } else {
      console.log('Não enviou')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        value={cep}
        setValue={setCep}
        onBlur={handleBlur}
        placeholder="00000-000"
      />
      {error && <p>{error}</p>}

      <button>Enviar</button>
    </form>
  )
}

export default App
