import React from "react";
import "./Home.css";
import SearchForm from "../../Components/SearchForm/SearchForm";
import CocktailCard from "../../Components/CocktailCard/CocktailCard";
import Loading from "../../Components/Loading/Loading";
import { useGlobalContext } from "../../Context/Context";

const Home = () => {
  const { cocktails, loading, error } = useGlobalContext();

  const drink = cocktails.map((drink, drinkIndex) => {
    return <CocktailCard key={drinkIndex} drink={drink} />;
  });
  return (
    <main className="homepage">
      <section className="searchSection">
        <SearchForm />
      </section>
      {loading ? (
        <Loading />
      ) : error.isError ? (
        <header className="cocktail">{error.message}</header>
      ) : (
        <section className="cocktailList">
          <header className="cocktail">Cocktails</header>
          <section className="cocktailGrid">{drink}</section>
        </section>
      )}
    </main>
  );
};

export default Home;
