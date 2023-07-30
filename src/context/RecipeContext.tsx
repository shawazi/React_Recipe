import { createContext, useContext, useState } from 'react';
import { Recipe } from '../types/recipeTypes';

export interface RecipeContextType {
    data: Recipe[];
    setData: (data: Recipe[]) => void;
    selectedRecipe: Recipe | null;
    setSelectedRecipe: (recipe: Recipe | null) => void;
    dataCache: { [key: string]: Recipe[] };
    setCache: (data: { [key: string]: Recipe[] }) => void;
    updateDataCache: (key: string, newData: Recipe[]) => void;
}

const RecipeContext = createContext<RecipeContextType>({
    data: [],
    setData: () => { },
    selectedRecipe: null,
    setSelectedRecipe: () => { },
    dataCache: {},
    setCache: () => { },
    updateDataCache: () => {},
})

export function useRecipeContext() {
    return useContext(RecipeContext);
}

export function RecipeProvider({ children }: { children: React.ReactNode }) {
    const [data, setData] = useState<Recipe[]>([]);
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
    const [dataCache, setCache] = useState<{ [key: string]: Recipe[] }>({})

    const updateDataCache = (key: string, newData: Recipe[]) => {
        setCache((prevCache) => ({
            ...prevCache,
            [key]: newData,
        }));
    };


    return (
        <RecipeContext.Provider value={{ data, setData, selectedRecipe, setSelectedRecipe, dataCache, setCache, updateDataCache }}>
            {children}
        </RecipeContext.Provider>
    );
}