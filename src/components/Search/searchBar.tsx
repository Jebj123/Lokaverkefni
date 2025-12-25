import React, { Activity, useEffect, useState } from "react";
import "./searchBar.style.css";
import { Link } from "react-router-dom";

const searchBar = () => {
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  const [search, setSearch] = useState("");
  const [item, setItem] = useState([]);
  const [show, setShow] = useState(false);
  const [randomMeals, setRandomMeals] = useState([]);
  const url_Random_Meals =
    "https://www.themealdb.com/api/json/v2/65232507/randomselection.php";

  useEffect(() => {
    const RandomRecipes = async () => {
      try {
        const res = await fetch(`${url_Random_Meals}`);
        const data = await res.json();
        console.log(data);
        setRandomMeals(data.meals);
      } catch (error) {
        console.error(error);
      }
    };
    RandomRecipes();
  }, []);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals);
      });
  }, [url]);

  const searchRecipe = (evnt) => {
    if (evnt.key == "Enter") {
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      setShow(true);
    }
  };

  return (
    <div className="Input-Wrap">
      <h2 className="h2-Search">Leitaðu að máltíð</h2>
      <input
        className="searchBar"
        type="search"
        placeholder="Leita..."
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={searchRecipe}
      />
      <div>
        <div className="containerSearch">
          <div className="wrapperSearch">
            {show ? (
              <div className="recipes">
                {item?.map((recipe) => (
                  <div key={recipe.idMeal} className="recipe">
                    <Link to={`/recipe/${recipe.idMeal}`}>
                      <div className="imgContainer">
                        <img className="imgLink" src={recipe.strMealThumb} />
                      </div>
                      <h3 className="h3Link">{recipe.strMeal}</h3>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="recipes">
                {randomMeals
                  ?.map((recipe) => (
                    <div key={recipe.idMeal} className="recipe">
                      <Link to={`/recipe/${recipe.idMeal}`}>
                        <div className="imgContainer">
                          <img className="imgLink" src={recipe.strMealThumb} />
                        </div>
                        <h3 className="h3Link">{recipe.strMeal}</h3>
                      </Link>
                    </div>
                  ))
                  .slice(0, 8)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default searchBar;
