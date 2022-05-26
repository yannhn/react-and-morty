import "./card.css";
import { useState } from "react";

function Card({ name, image, status, species, type, gender }) {
  const [showDetails, setDetailsShown] = useState(false);
  return (
    <section className="card__background">
      <img src={image} className="card__image"></img>
      <h2 className="card__name">{name}</h2>
      <button
        className="card__details"
        type="button"
        onClick={() => {
          setDetailsShown(!showDetails);
        }}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      <section className="card__attribute__background">
        <p className="card__attribute">{showDetails ? status : ""}</p>
        <p className="card__attribute">{showDetails ? species : ""}</p>
        <p className="card__attribute">{showDetails ? gender : ""}</p>
        <p className="card__attribute">{showDetails ? type : ""}</p>
      </section>
      <svg class="card__bookmark" viewBox="0 0 24 24">
        <path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" />
      </svg>
    </section>
  );
}

export { Card };
