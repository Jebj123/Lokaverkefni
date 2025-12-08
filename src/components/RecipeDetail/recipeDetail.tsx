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
        const res = await fetch(`${url_Details} ${id}`);
        const data = await res.json();
        setRecipe(data.meals[0]);
        setInstructions(data.meals[0].strInstructions);
        console.log(data.meals);

        Object.keys(data.meals[0]).forEach((key) => {
          if (key.includes("strIngredient") && data.meals[0][key] !== "") {
            setIngredients((prev) => {
              if (prev.length === 0) return [data.meals[0][key]];
              else return [...prev, data.meals[0][key]];
            });
          }

          if (key.includes("strMeasure") && data.meals[0][key] !== "") {
            setMeasures((prev) => {
              if (prev.length === 0) return [data.meals[0][key]];
              else return [...prev, data.meals[0][key]];
            });
          }
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipeDetails();
  }, [id]);
  return (
    <div className="container">
      <div className="wrapper">
        <h2>Uppskrift</h2>
        <div className="recipe">
          <img src={recipe?.strMealThumb} />
          <div className="metaData">{recipe?.strMeal}</div>
          <h3>Hráefni og Mælingar</h3>
          <div className="ingredients">
            {ingredients.map((ingredient, index) => (
              <div key={ingredient} className="ingredient">
                <span>{ingredient}</span> - <span>{measures[index]}</span>
              </div>
            ))}
          </div>
          <div className="instructions">{instructions}</div>
        </div>
      </div>
    </div>
  );
};
export default recipeDetail;
