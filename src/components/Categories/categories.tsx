import React, { useEffect, useState } from "react";
import "../siteStructure/categories.style.css";
import { Link } from "react-router-dom";

const Categories = () => {
  const URL_CATEGORIES =
    "https://www.themealdb.com/api/json/v1/1/categories.php";
  const URL_RECIPES = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(8);
  const [activePage, setActivePage] = useState(1);

  const indexOflastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOflastRecipe - recipesPerPage;

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
        setCurrentPage(1);
        setActivePage(1);
      } catch (error) {
        console.error(error);
      }
    };
    activeCategory && fetchRecipes();
  }, [activeCategory]);

  const buttonCount = [];

  for (let i = 1; i <= Math.ceil(recipes.length / recipesPerPage); i++) {
    buttonCount.push(i);
  }

  const handleClick = (i) => {
    setCurrentPage(i);
    setActivePage(i);
  };

  return (
    <div className="container">
      <div className="wrapper">
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
          {recipes
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
        </div>
        <div className="Buttons">
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
    </div>
  );
};
export default Categories;
