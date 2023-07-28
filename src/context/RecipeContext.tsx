import { createContext, useContext, useState } from 'react';
import { Recipe } from '../types/recipeTypes';

export interface RecipeContextType {
    data: Recipe[];
    setData: (data: Recipe[]) => void;
}

const RecipeContext = createContext<RecipeContextType>({
    data: [],
    setData: () => {},
})

export function useRecipeContext() {
    return useContext(RecipeContext);
}

export function RecipeProvider({children}: { children: React.ReactNode }) {
    const [data, setData] = useState<Recipe[]>([]);

    return (
        <RecipeContext.Provider value={{data, setData}}>
            {children}
        </RecipeContext.Provider>
    );
}