import React from "react";
import { Link } from "react-router-dom";

export const FunctionItem = ({ functionsMovie, functionsDate }) => {
  

  const dropDown = ({ target }) => {
    const myDropDown = document.querySelector(`.dropdown--${functionsDate}`);
    const alldropDown = document.querySelectorAll(".dropdown");

    if (myDropDown.classList.contains("dropdown--hidden")) {
      alldropDown.forEach((el) => {
        el.classList.add("dropdown--hidden");
      });
      myDropDown.classList.remove("dropdown--hidden");
    } else {
      myDropDown.classList.add("dropdown--hidden");
    }
  };

  return (
    <div
      className="function-page__function-list__details"
      onClick={dropDown}
      data-drop-down={functionsDate}
    >
      <div className="function-page__function-list__individual">
        <div>
          <h4>Fecha: {functionsDate}</h4>
        </div>
      </div>
      <div className={`dropdown dropdown--hidden dropdown--${functionsDate}`}>
        {functionsMovie.map((el, i) => (
          <div
            key={i}
            className={`dropdown__content`}
            data-content={functionsDate}
          >
            <h4>Hora: {el.function.hourTime}</h4>
            <Link to={`/compras/funcion/tickets/${el.function.id}`} className="link">
              Ver Disponibilidad
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
