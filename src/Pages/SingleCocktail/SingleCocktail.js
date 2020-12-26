import React, { useEffect } from "react";
import "./SingleCocktail.css";
import BackHome from "../../Components/Button/Button";
import CocktailDetails from "../../Components/CocktailDetails/CocktailDetails";
import Loading from "../../Components/Loading/Loading";
import { useParams } from "react-router";
import { useGlobalContext } from "../../Context/Context";

const SingleCocktail = () => {
  const { id } = useParams();
  const {
    loading,
    error,
    drink,
    drinkState,
    fetchSingleCocktail,
  } = useGlobalContext();

  useEffect(() => {
    fetchSingleCocktail(id);
  }, [id]);

  const drinkDetails = drink.map((details) => {
    return <CocktailDetails key={details.key} details={details} />;
  });
  if (loading) {
    return <Loading />;
  }
  if (error.isError) {
    return <h1 className="error">{error.message}</h1>;
  }
  return (
    <main className="cocktailPage">
      <section className="section">
        <BackHome url="/" value="Bach Home" />
        <h1 className="cocktailName">{drinkState.name}</h1>
      </section>
      <section className="cocktailBox">
        <img
          src={drinkState.image}
          alt="Cocktail Image"
          className="cocktailImage"
        />
        <article className="cocktailDetails">{drinkDetails}</article>
      </section>
    </main>
  );
};

export default SingleCocktail;
