import React, { useState } from 'react'
import Input from './Input'
import Select from './Select'
import Checkbox from './Checkbox'

const App = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [produto, setProduto] = useState('')
  const [termos, setTermos] = useState([])

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
      <h2>Termos</h2>
      <Checkbox
        options={['Li e aceito os termos.']}
        value={termos}
        setValue={setTermos}
      />
      <button style={{ marginTop: 20 }}>Enviar</button>
    </form>
  )
}

export default App
