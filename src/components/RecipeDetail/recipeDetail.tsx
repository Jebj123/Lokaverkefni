import React, { useEffect, useState } from "react";
import "./recipeDetail.style.css";
import { useParams } from "react-router-dom";

const recipeDetail = () => {
  const [recipe, setRecipe] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const url_Details = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const res = await fetch(`${url_Details}${id}`);
        const data = await res.json();
        setRecipe(data.meals[0]);
        setInstructions(data.meals[0].strInstructions);

        Object.keys(data.meals[0]).forEach((key) => {
          if (key.includes("strIngredient") && data.meals[0][key] !== "") {
            setIngredients((prev) => {
              return prev.length === 0
                ? [data.meals[0][key]]
                : [...prev, data.meals[0][key]];
            });
          }

          if (key.includes("strMeasure") && data.meals[0][key] !== "") {
            setMeasures((prev) => {
              return prev.length === 0
                ? [data.meals[0][key]]
                : [...prev, data.meals[0][key]];
            });
          }
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipeDetails();
  }, []);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="recipe">
          <div className="recipeOrder">
            <div className="metaData">{recipe?.strMeal}</div>
            <img className="imgDetail" src={recipe?.strMealThumb} />
          </div>
          <div className="recipeIngredients">
            <h3>Hráefni og Mælingar</h3>
            <div className="ingredients">
              {ingredients?.map((ing, i) => (
                <div key={i} className="ingredient">
                  <span className="eachIng">{ing}</span>{" "}
                  <span>{measures[i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="instructions">
          <h3>Leiðbeiningar</h3>
          <span>{instructions}</span>
        </div>
      </div>
    </div>
  );
};
export default recipeDetail;
