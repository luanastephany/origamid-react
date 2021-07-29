import React, { useState } from 'react'
import Input from './Input'
import Select from './Select'

const App = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [produto, setProduto] = useState('')

  return (
    <form>
      <Select
        title="Selecione abaixo o dispositivo que você está utilizando"
        options={['Smartphone', 'Tablet', 'Notebook']}
        value={produto}
        setValue={setProduto}
      />
      <Input
        id="nome"
        label="Nome"
        value={nome}
        setValue={setNome} required
      />
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
