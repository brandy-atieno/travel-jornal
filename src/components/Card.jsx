import React from 'react'

const Card = ({product}) => {
  return (
    <div>
      <img src={`../images/${product.imageUrl}` } alt="nature"/>
      <h1>{product.title}</h1>
      <h1>{product.description}</h1>
    </div>
  )
}

export default Card