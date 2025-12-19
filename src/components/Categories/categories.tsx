import React, { useEffect, useState } from "react";
import "./categories.style.css";
import { Link } from "react-router-dom";

const Categories = () => {
  const URL_CATEGORIES =
    "https://www.themealdb.com/api/json/v1/1/categories.php";
  const URL_RECIPES = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(URL_CATEGORIES);
        const data = await res.json();
        setCategories(data.categories);
        setActiveCategory(data.categories[0].strCategory);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch(`${URL_RECIPES}${activeCategory}`);
        const data = await res.json();
        console.log(data);
        setRecipes(data.meals);
      } catch (error) {
        console.error(error);
      }
    };
    activeCategory && fetchRecipes();
  }, [activeCategory]);

  return (
    <div className="containerCat">
      <div className="wrapperCat">
        <div className="title">
          <h2 className="h2-Cat">Hvað líst þér á</h2>
        </div>
        <div className="categories">
          {categories?.map((category) => (
            <div
              className="category"
              onClick={() => setActiveCategory(category.strCategory)}
              key={category.idCategory}
            >
              {category.strCategory}
            </div>
          ))}
        </div>
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
export default Categories;
