import { useNavigate } from "react-router-dom";
import { useRecipeContext } from "../../context/RecipeContext";
import { useEffect } from "react";
import {
  RecipeWrapper,
  RecipeTitle,
  RecipeImage,
  RecipeInfo,
  RecipeLabel,
  RecipeValue,
  RecipeIngredients,
  RecipeIngredient,
  RecipeHealthLabels,
  RecipeHealthLabel,
  RecipeSourceLink,
} from "./styled";
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

  const { label, calories, yield: recipeYield, image, url, source, ingredients, healthLabels } = selectedRecipe?.recipe || {};


  return (
    <RecipeWrapper>
    <RecipeTitle>{label}</RecipeTitle>
    <RecipeImage src={image} alt={label} />
    <RecipeInfo>
      <div>
        <RecipeLabel>Calories:</RecipeLabel>
        <RecipeValue>{calories?.toFixed(2)}</RecipeValue>
      </div>
      <div>
        <RecipeLabel>Yield:</RecipeLabel>
        <RecipeValue>{recipeYield}</RecipeValue>
      </div>
      <div>
        <RecipeLabel>Source: </RecipeLabel>
        <RecipeSourceLink href={url} target="_blank" rel="noopener noreferrer">
          {source}
        </RecipeSourceLink>
      </div>
    </RecipeInfo>
    <div>
      <RecipeLabel>Ingredients:</RecipeLabel>
      <RecipeIngredients>
        {ingredients?.map((ingredient, index) => (
          <RecipeIngredient key={index}>{ingredient.text}</RecipeIngredient>
        ))}
      </RecipeIngredients>
    </div>
    <div>
      <RecipeLabel>Health Labels:</RecipeLabel>
      <RecipeHealthLabels>
        {healthLabels?.map((label, index) => (
          <RecipeHealthLabel key={index}>{label}</RecipeHealthLabel>
        ))}
      </RecipeHealthLabels>
    </div>
  </RecipeWrapper>
  );
};

export default Details