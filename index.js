import { searchCocktailByName, searchCocktailByFirstLetter, searchIngredientByName } from "./src/search.js";
import { listAlcoholTypes, listCocktailTypes, listGlassTypes, listIngredients } from "./src/list.js";

// Example usage for the search functions:

// const margarita = await searchCocktailByName('margarita');
// console.log('Search by name (margarita):', margarita);

// const cocktails = await searchCocktailByFirstLetter('2');
// console.log('Search by first letter (2):', cocktails);

// const gin = await searchIngredientByName('Gin');
// console.log('Search by ingredient (gin):', gin);


// Example usage for the list functions:

// const cocktailTypes = await listCocktailTypes();
// console.log('List cocktail types:', cocktailTypes);

// const glassTypes = await listGlassTypes();
// console.log('List cocktail types:', glassTypes);

// const ingredients = await listIngredients();
// console.log('List ingredients:', ingredients);

const alcoholtypes = await listAlcoholTypes();
console.log('List alcohol types:', alcoholtypes);