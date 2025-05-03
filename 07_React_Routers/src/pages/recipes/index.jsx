import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";

function RecipeList() {
  const location = useLocation();
  const { data, loading, error } = useFetch("https://dummyjson.com/recipes");

  if (loading) return <h1>Fetching data, please wait...</h1>;
  if (error) return <h2>Error fetching data: {error.message}</h2>;

  return (
    <div>
      <h1>Recipe list page</h1>
      <ul>
        {data?.recipes?.length > 0
          ? data.recipes.map((recipeItem) => (
              <div key={recipeItem.id}>
                <img src={recipeItem.image} alt={recipeItem.name} />
                <label>{recipeItem.name}</label>
              </div>
            ))
          : <p>No recipes found.</p>}
      </ul>
    </div>
  );
}

export default RecipeList;
