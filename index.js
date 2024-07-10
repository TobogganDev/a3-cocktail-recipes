import { filterCocktailsByAlcoholicType, filterCocktailsByCategory, filterCocktailsByGlassType } from './src/filter.js';

(async () => {
    try {
        const alcoholicCocktails = await filterCocktailsByAlcoholicType('Alcoholic');
        console.log('Filter by alcoholic type (Alcoholic):', alcoholicCocktails);

        const ordinaryCocktails = await filterCocktailsByCategory('Ordinary_Drink');
        console.log('Filter by category (Ordinary Drink):', ordinaryCocktails);

        const cocktailGlassCocktails = await filterCocktailsByGlassType('Cocktail_glass');
        console.log('Filter by glass type (Cocktail glass):', cocktailGlassCocktails);
    } catch (error) {
        console.error(error.message);
    }
})();
