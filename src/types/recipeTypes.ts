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
    };
  }