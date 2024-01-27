import React from 'react'

export const Card = ({title, img, language, director, protagonists, description, country}) => {
  return (
    <div className='card'>

      <div className='card__img-container '>
        <img  className="card__img-container__img" src={img} alt="" />
      </div>

    
      <div className='card__content '>
        <h2 className='card__movie-meta card__movie-meta--title '>{title}</h2>
        <div>
          <p className='card__movie-meta'>{language}</p>
          <p className='card__movie-meta'>{director}</p>
          <p className='card__movie-meta'>{country}</p>
          <p className='card__movie-meta'>{protagonists}</p>
        </div>
      </div>
      
    </div>
  )
}
