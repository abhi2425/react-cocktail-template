import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
export const AppContext = React.createContext();

export const FeaturesProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    isError: false,
    message: "",
  });
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const [drink, setDrink] = useState([]);
  const [drinkState, setDrinkState] = useState({});

  const fetchCocktailList = () => {
    setLoading(true);
    setError({
      isError: false,
    });
    axios
      .get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchTerm
      )
      .then((response) => {
        const { drinks } = response.data;
        if (drinks) {
          const newCocktails = drinks.map((item) => {
            return {
              id: item.idDrink,
              drinkName: item.strDrink,
              glass: item.strGlass,
              nature: item.strAlcoholic,
              image: item.strDrinkThumb,
            };
          });
          setCocktails(newCocktails);
          setLoading(false);
        } else {
          setLoading(false);
          setError({
            isError: true,
            message: "No cocktails matched !!",
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        setError({
          isError: true,
          message: " Oops Problem in your connection !!",
        });
        console.log(error);
      });
  };

  const fetchSingleCocktail = (id) => {
    setLoading(true);
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=` + id)
      .then((response) => {
        setLoading(false);
        const { drinks } = response.data;
        if (drinks) {
          const newDrink = drinks.map((item) => {
            setDrinkState({
              name: item.strDrink,
              image: item.strDrinkThumb,
            });
            return [
              {
                key: "id",
                value: item.idDrink,
              },
              {
                key: "drinkName",
                value: item.strDrink,
              },
              {
                key: "category",
                value: item.strCategory,
              },
              {
                key: "nature",
                value: item.strAlcoholic,
              },
              {
                key: "glass",
                value: item.strGlass,
              },
              {
                key: "instructions",
                value: item.strInstructions,
              },
              {
                key: "ingredients",
                value: [
                  item.strIngredient1,
                  item.strIngredient2,
                  item.strIngredient3,
                ],
              },
            ];
          });
          setDrink(newDrink[0]);
        } else {
          console.log("else");
          setLoading(false);
          setError({
            isError: true,
            message: "Don't Mess with Drink Id",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError({
          isError: true,
          message: "Network Error!!",
        });
      });
  };

  useEffect(() => {
    fetchCocktailList();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        loading,
        error,
        cocktails,
        drink,
        drinkState,
        setSearchTerm,
        fetchSingleCocktail,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
