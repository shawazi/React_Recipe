export interface Recipe {
  recipe: {
    id: number;
    label: string;
    mealType: Array<String>;
    cuisineType: Array<string>;
    dietLabels: Array<string>;
    healthLabels: Array<string>;
    source: string;
    image: string;
    url: string;
    uri: string;
    calories: number;
    cautions: string[];
    totalWeight: number;
    totalTime: number;
    yield: number;
    ingredients: {
      text: string;
      quantity: number;
      measure: string;
      food: string;
      weight: number;
    }[];
    totalNutrients: {
      [key: string]: {
        label: string;
        quantity: number;
        unit: string;
      };
    };
    totalDaily: {
      [key: string]: {
        label: string;
        quantity: number;
        unit: string;
      };
    };
  };
}