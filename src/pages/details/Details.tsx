import { useNavigate } from "react-router-dom";
import { useRecipeContext } from "../../context/RecipeContext";
import { useEffect, useState } from "react";
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
  NutritionWrapper,
  NutritionList,
  NutritionListItem,
  ToggleButton,
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

  const [showNutrition, setShowNutrition] = useState(false);

  const handleToggleNutrition = () => {
    setShowNutrition(!showNutrition);
  };


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
      <NutritionWrapper>
        {/* Toggle button for hide/unhide */}
        <ToggleButton onClick={handleToggleNutrition}>
          {showNutrition ? 'Hide Nutrition' : 'Show Nutrition'}
        </ToggleButton>

        {/* Nutrition information */}
        {showNutrition && (
          <NutritionList>
            <NutritionListItem>
              <span>Calories: </span>
              <span>{calories?.toFixed(2)}</span>
            </NutritionListItem>

            {/* Total Daily Nutrients */}
            {selectedRecipe?.recipe.totalDaily && (
              <>
                <h2>Total Daily Percentage</h2>
                {Object.keys(selectedRecipe.recipe.totalDaily).map((nutrient) => (
                  <NutritionListItem key={nutrient}>
                    <span>{selectedRecipe.recipe.totalDaily[nutrient].label}:</span>
                    <span>
                      {selectedRecipe.recipe.totalDaily[nutrient].quantity.toFixed(2)}{' '}
                      {selectedRecipe.recipe.totalDaily[nutrient].unit}
                    </span>
                  </NutritionListItem>
                ))}
              </>
            )}

            {/* Total Nutrients */}
            {selectedRecipe?.recipe.totalNutrients && (
              <>
                <h2>Total Nutrients</h2>
                {Object.keys(selectedRecipe.recipe.totalNutrients).map((nutrient) => (
                  <NutritionListItem key={nutrient}>
                    <span>{selectedRecipe.recipe.totalNutrients[nutrient].label}:</span>
                    <span>
                      {selectedRecipe.recipe.totalNutrients[nutrient].quantity.toFixed(2)}{' '}
                      {selectedRecipe.recipe.totalNutrients[nutrient].unit}
                    </span>
                  </NutritionListItem>
                ))}
              </>
            )}
          </NutritionList>
        )}
      </NutritionWrapper>
    </RecipeWrapper>
  );
};

export default Details