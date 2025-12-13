import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBar.style.css";
import { Link } from "react-router-dom";

const searchBar = () => {
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  const [search, setSearch] = useState("");
  const [item, setItem] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);

  const searchRecipe = (evnt) => {
    if (evnt.key == "Enter") {
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    }
  };

  return (
    <div className="Input-Wrap">
      <h2 className="h2-Search">Leitaðu að máltíð</h2>
      <input
        className="searchbar"
        type="search"
        placeholder="Leita..."
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={searchRecipe}
      />
      <div>
        <div className="container">
          <div className="wrapper">
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default searchBar;
