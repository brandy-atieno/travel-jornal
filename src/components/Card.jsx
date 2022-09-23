import React from 'react'

const Card = ({product}) => {
  return (
    <div className='card'>
       <img src={`../images/${product.imageUrl}` } alt="nature"/>
      <h1>{product.title}</h1>
      <p>{product.description}</p> 
    </div>
  )
}

export default Card