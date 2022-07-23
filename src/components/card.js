import "./card.css";
import { useState } from "react";
import { Icon } from "@iconify/react";

function Card({
  name,
  image,
  status,
  species,
  type,
  gender,
  isBookmarked,
  newBookmarks,
}) {
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
      {isBookmarked ? (
        <Icon
          onClick={() => {
            newBookmarks(!isBookmarked);
          }}
          className="bookmark-button"
          icon="mdi:bookmark-minus"
          width="1.6rem"
          height="1.6rem"
          color="#cc0000"
          alt="show history"
        />
      ) : (
        <Icon
          onClick={() => {
            newBookmarks(!isBookmarked);
          }}
          className="bookmark-button"
          icon="mdi:bookmark-check"
          width="1.6rem"
          height="1.6rem"
          color="black"
          alt="show history"
        />
      )}
    </section>
  );
}

export { Card };
