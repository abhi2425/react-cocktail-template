import React from "react";
import "./CocktailCard.css";
import Details from "../Button/Button";
const CocktailCard = ({ drink }) => {
  return (
    <article className="card">
      <section className="drinkImage">
        <img className="drinkImage--style" src={drink.image} alt={drink.drinkName} />
      </section>
      <section className="drinkDetails">
        <h1 className="drinkName">{drink.drinkName}</h1>
        <p className="glassName">{drink.glass}</p>
        <p className="natureOfDrink">{drink.nature}</p>
        <Details url={`/cocktail/${drink.id}`} value="Details" />
      </section>
    </article>
  );
};

export default CocktailCard;
