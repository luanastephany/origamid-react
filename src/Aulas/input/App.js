import React, { useState } from 'react'
import Input from './Input'

const App = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

  return (
    <form>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
      <Input
        id="email"
        label="Email"
        value={email}
        setValue={setEmail}
      />
      <button style={{ marginTop: 20 }}>Enviar</button>
    </form>
  )
}

export default App
