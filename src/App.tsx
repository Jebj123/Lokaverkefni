import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RecipeDetail from "./components/RecipeDetail/recipeDetail";
import NotFound from "./components/NotFound/notFound";
import Layout from "./components/Layout/layout";
import Categories from "./components/Categories/categories";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<div> Heim </div>} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
