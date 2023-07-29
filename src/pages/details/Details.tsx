import { useNavigate } from "react-router-dom";
import { useRecipeContext } from "../../context/RecipeContext";
import { useEffect } from "react";

const Details = () => {
  const { selectedRecipe } = useRecipeContext();
  const navigate = useNavigate();

  useEffect((): void => {
    if (!selectedRecipe) {
      navigate('/');
      console.log("No ID");
      return;
    }
  }, []);

  return (
    <div>
      <h2>{selectedRecipe?.recipe.label}</h2>
      <p>Meal Type: {selectedRecipe?.recipe.mealType.join(", ")}</p>
    </div>
  );
};

export default Details