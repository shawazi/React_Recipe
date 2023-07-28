export interface Recipe {
    recipe: {
      label: string;
      mealType: Array<String>;
      cuisineType: Array<string>;
      dietLabels: Array<string>;
      healthLabels: Array<string>;
      source: string;
      image: string;
    };
  }