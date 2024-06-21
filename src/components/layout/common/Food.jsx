import React from 'react'
import { Card } from './Card'
import CardFood from './CardFood'

export const Food = () => {
  const foods = [
    {
        id: 1,
        name: "Combo",
        description: "Un combo clásico que combina una refrescante soda, crujientes papas fritas y una jugosa hamburguesa. Ideal para satisfacer el hambre con sabores deliciosos y familiares.",
        img: "./src/assets/img/burger_freesh_drink.jpg"
    },
    {
        id: 2,
        name: "Perro caliente",
        description: "Un perro caliente jugoso y sabroso, envuelto en un pan suave y esponjoso, acompañado de salsas y toppings que resaltan su sabor único. Un clásico irresistible que combina texturas crujientes y cremosas en cada bocado.",
        img: "./src/assets/img/hotdog.jpg"
    },
    {
        id: 3,
        name: "Gaseosa",
        description: "Un refresco burbujeante y refrescante que sacia la sed al instante, con su característico sabor dulce y una sensación ligera en el paladar. Perfecto para acompañar cualquier comida o disfrutar por sí solo en cualquier momento del día.",
        img: "./src/assets/img/soda.jpg"
    }]
  return (
    <div>
      <h2>Comidas</h2>
        {foods.length > 0 && foods.map((food)=> (<CardFood food={food}/>))}
    </div>
  )
}
