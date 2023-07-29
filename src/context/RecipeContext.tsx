import { createContext, useContext, useState } from 'react';
import { Recipe } from '../types/recipeTypes';

export interface RecipeContextType {
    data: Recipe[];
    setData: (data: Recipe[]) => void;
    selectedRecipe: Recipe | null;
    setSelectedRecipe: (recipe: Recipe | null ) => void;
}

const RecipeContext = createContext<RecipeContextType>({
    data: [],
    setData: () => {},
    selectedRecipe: null,
    setSelectedRecipe: () => {},
})

export function useRecipeContext() {
    return useContext(RecipeContext);
}

export function RecipeProvider({children}: { children: React.ReactNode }) {
    const [data, setData] = useState<Recipe[]>([]);
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

    return (
        <RecipeContext.Provider value={{data, setData, selectedRecipe, setSelectedRecipe}}>
            {children}
        </RecipeContext.Provider>
    );
}