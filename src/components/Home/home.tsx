import React, { useEffect, useState } from "react";
import "./home.style.css";
import mainChef from "/src/assets/MonkeyCook.jpg";
import { Link } from "react-router-dom";

const home = () => {
  const url_Random = "https://www.themealdb.com/api/json/v1/1/random.php";
  const [randomMeal, setRandomMeal] = useState([]);

  useEffect(() => {
    const RandomRecipe = async () => {
      try {
        const res = await fetch(`${url_Random}`);
        const data = await res.json();
        setRandomMeal(data.meals);
      } catch (error) {
        console.error(error);
      }
    };
    RandomRecipe();
  }, []);
  return (
    <div className="containerHome">
      <div className="wrapperHome">
        <div className="monkInf">
          <h2 className="h2-Home"> Chef Monkey le Pieu</h2>
          <img className="noMonkeyBuissness" src={mainChef}></img>
        </div>
        <div className="information">
          <p className="para-home">
            Monkey le Piu betur þekktur sem API-nn er víða þekktur í
            Kokkaheiminum. Hann hefur unnið með mörgum kokkum eins og Gordon
            Ramsey, Marco Pierre White, Nick DiGiovanni og Jean-Georges
            Vongerichten. Hann hefur Leitað af bestu uppskriftun heimsálfanna og
            hefur loksins sett það á netið fyrir alla til að njóta
          </p>
        </div>
        <div className="randomMeal">
          <div className="recipes">
            {randomMeal?.map((recipe) => (
              <div key={recipe.idMeal} className="recipe">
                <Link to={`/recipe/${recipe.idMeal}`}>
                  <div className="imgContainerHome">
                    <img className="imgLinkHome" src={recipe.strMealThumb} />
                  </div>
                  <h3 className="h3Link">{recipe.strMeal}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
