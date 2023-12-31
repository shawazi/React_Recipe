import styled from "styled-components";

export const RecipeWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: black;
  text-align: center;
`;

export const RecipeTitle = styled.h2`
  color: teal;
`;

export const RecipeImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 20px;
  transition: transform 0.3s ease; /* Add the transition property */

  &:hover {
    transform: scale(1.15); /* Increase the size by 15% on hover */
  }
`;

export const RecipeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const RecipeLabel = styled.span`
  font-weight: bold;
  color: teal;
`;

export const RecipeValue = styled.span`
  margin-left: 5px;
`;

export const RecipeIngredients = styled.ul`
  margin-bottom: 20px;
  text-align: left;
`;

export const RecipeIngredient = styled.li`
  margin-bottom: 5px;
`;

export const RecipeHealthLabels = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  justify-content: space-evenly;
`;

export const RecipeHealthLabel = styled.span`
  margin-right: 10px;
  background-color: #f2f2f2;
  padding: 5px 10px;
  margin: 2px;
  border-radius: 8px;
  color: black;
`;

export const RecipeSourceLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// Wrapper for the nutrition information
export const NutritionWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Styled list for displaying the nutrition data
export const NutritionList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

// Styled list item for nutrition data
export const NutritionListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

// Button to hide/unhide the nutrition information
export const ToggleButton = styled.button`
  background-color: teal;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  transition: transform 0.3s ease; /* Add the transition property */

  &:hover {
    transform: scale(1.15); /* Increase the size by 15% on hover */
  }
`;