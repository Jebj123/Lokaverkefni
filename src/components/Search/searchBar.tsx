import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBar.style.css";
import { Link } from "react-router-dom";

const searchBar = () => {
  const [input, setInput] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const url_Search = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  const fetchData = (value) => {
    fetch(`${url_Search} ${input}`).then((response) =>
      response.json().then((json) => {
        console.log(json);
        const results = json.filter((user) => {
          return value && user && user.idMeal && user.idMeal.includes(value);
        });
        setRecipes(results);
        console.log(results);
      })
    );
  };

  return (
    <div className="Input-Wrap">
      <input
        className="Input"
        type="text"
        placeholder="Leita..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <FaSearch className="search-Icon" />
      <div>
        <div className="recipes">
          {recipes?.map((recipe) => (
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
      </div>
    </div>
  );
};
export default searchBar;
