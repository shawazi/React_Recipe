import { useParams } from "react-router-dom";
import { useRecipeContext } from "../../context/RecipeContext";

const Details = () => {
  const { id } = useParams(); // Extract the recipe ID from the URL params
  const { data } = useRecipeContext();
  const recipe = data.find((r) => r.id === id); // Find the specific recipe based on ID

  if (!recipe) {
    return <div>Loading...</div>; // You might want to show a loader while fetching the specific recipe details.
  }

  return (
    <div>
      {/* Render the detailed information of the recipe */}
      <h2>{recipe.recipe.label}</h2>
      <p>Meal Type: {recipe.recipe.mealType.join(", ")}</p>
      {/* Other details you want to display */}
    </div>
  );
};

export default Details