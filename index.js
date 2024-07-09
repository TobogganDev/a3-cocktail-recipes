import { searchCocktailByName, searchCocktailByFirstLetter, searchIngredientByName } from "./src/search.js";

// const margarita = await searchCocktailByName('margarita');
// console.log('Search by name (margarita):', margarita);

// const cocktails = await searchCocktailByFirstLetter('2');
// console.log('Search by first letter (2):', cocktails);

const gin = await searchIngredientByName('Gin');
console.log('Search by ingredient (gin):', gin);