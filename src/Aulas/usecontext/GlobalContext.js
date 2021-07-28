import React, { createContext, useState, useEffect } from 'react'

export const GlobalContext = createContext()

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = useState(null)

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then(response => response.json())
      .then(json => setDados(json))
  }, [])

  //func pra limpar o setDados
  function limparDados() {
    setDados(null)
  }

  return (
    <GlobalContext.Provider value={{ dados, limparDados }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
