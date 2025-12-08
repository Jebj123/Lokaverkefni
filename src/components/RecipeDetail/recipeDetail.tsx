import React, { useState } from "react";
import "./recipeDetail.style.css";
import { useParams } from "react-router-dom";

const recipeDetail = () => {
  const [recipe, setRecipe] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const url_Details = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  const { id } = useParams();
  return <div>recipeDetail</div>;
};

export default recipeDetail;
