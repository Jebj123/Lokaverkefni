import React, { useEffect, useState } from "react";
import "./searchBar.style.css";
import { Link } from "react-router-dom";
import "../siteStructure/siteStructure.style.css";
import type { Recipe } from "../Utils/utils";

const searchBar = () => {
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  const [search, setSearch] = useState("");
  const [item, setItem] = useState<Recipe[]>([]);
  const [show, setShow] = useState(false);
  const [randomMeals, setRandomMeals] = useState<Recipe[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(8);
  const [activePage, setActivePage] = useState(1);

  const indexOflastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOflastRecipe - recipesPerPage;

  const url_Random_Meals =
    "https://www.themealdb.com/api/json/v2/65232507/randomselection.php";

  useEffect(() => {
    const RandomRecipes = async () => {
      try {
        const res = await fetch(`${url_Random_Meals}`);
        const data = await res.json();
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

  const searchRecipe = (evnt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evnt.key == "Enter") {
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      setShow(true);
      setActivePage(1);
      setCurrentPage(1);
    }
  };
  const buttonCount = [];

  for (let i = 1; i <= Math.ceil(item.length / recipesPerPage); i++) {
    buttonCount.push(i);
  }

  const handleClick = (i: number) => {
    setCurrentPage(i);
    setActivePage(i);
  };

  return (
    <div className="container">
      <div className="search-Bar">
        <h2 className="h2-Search">Leitaðu að máltíð</h2>
        <input
          className="search-Input"
          type="search"
          placeholder="Leita..."
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={searchRecipe}
        />
      </div>
      <div className="wrapper">
        {show ? (
          <div className="recipes">
            {item
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
              .slice(indexOfFirstRecipe, indexOflastRecipe)}
            <div className="Buttons-Search">
              <button
                disabled={currentPage === 1}
                onClick={() => handleClick(currentPage - 1)}
              >
                Prev
              </button>
              {buttonCount.map((btn) => (
                <button
                  className={btn == activePage ? "active" : ""}
                  key={btn}
                  onClick={() => handleClick(btn)}
                >
                  {btn}
                </button>
              ))}
              <button
                disabled={currentPage === buttonCount.length}
                onClick={() => handleClick(currentPage + 1)}
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div className="recipes">
            <div className="h3-Search">
              <h3>Dæmi um máltíðir:</h3>
            </div>
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
  );
};
export default searchBar;
