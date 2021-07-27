import { Produto } from './Produto';
import { useState } from 'react'
import { LinearProgress } from '@material-ui/core'


function App() {
  const [dados, setDados] = useState(null)
  const [carregando, setCarregando] = useState(null)

  async function handleClick(event) {
    setCarregando(true)
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
    const json = await response.json()
    setDados(json)
    setCarregando(false)
  }

  return (
    <div>
      <h1>Produtos Eletrônicos</h1>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>tablet</button>
      {carregando && <LinearProgress />}

      {!carregando && dados && <Produto dados={dados} />}
    </div>
  );
}

export default App;
