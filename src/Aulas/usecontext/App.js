import { GlobalStorage } from './GlobalContext'
import Produto from './Produto'

export default function App() {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  )
}