import React from 'react'

export const Produto = ({ dados }) => {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$: {dados.preco}</p>
      <img src={dados.fotos[0].src} alt="" height={420} width={400} style={{ objectFit: 'cover' }} />
    </div>
  )
}

