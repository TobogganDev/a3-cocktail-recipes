import axios from 'axios';
import { BASE_URL } from './config.js';

/**
* Filters out null values and unwanted fields from a cocktail object.
*
* @param {Object} cocktail - The cocktail object to filter.
* @returns {Object} The filtered cocktail object.
*/
export function filterCocktailData(cocktail) {
  const unwantedFields = [
    'dateModified',
    'strCreativeCommonsConfirmed',
    'strImageAttribution',
    'strImageSource'
  ];
  
  const filteredCocktail = {};
  Object.keys(cocktail).forEach(key => {
    if (cocktail[key] !== null && !unwantedFields.includes(key) && !(key.startsWith('strInstructions') && key !== 'strInstructions')) {
      filteredCocktail[key] = cocktail[key];
    }
  });
  
  return filteredCocktail;
}

/**
* Searches for a cocktail by name and returns the first result with selected information.
* 
* @param {string} name - The name of the cocktail to search for.
* @returns {Promise<Object>} A promise that resolves to the first search result with non-null information.
* @throws {Error} Throws an error if the search request fails or if the name parameter is invalid.
* 
* @example
* // Example usage:
* const margarita = await searchCocktailByName('margarita');
* console.log('Search by name (margarita):', margarita);
*/
export async function searchCocktailByName(name) {
  if (typeof name !== 'string' || name.trim().length === 0) {
    throw new Error('The name parameter must be a non-empty string');
  }
  
  const response = await axios.get(`${BASE_URL}search.php`, {
    params: { s: name }
  });
  
  if (!response || !response.data) {
    throw new Error('Invalid response from the API');
  }
  
  if (!response.data.drinks || response.data.drinks.length === 0) {
    throw new Error(`No cocktails found for the name: ${name}`);
  }
  
  const cocktail = response.data.drinks[0];
  return filterCocktailData(cocktail);
}


/**
* List all cocktails by first letter.
* 
* @param {string} letter - The first letter of the cocktail to search for.
* @returns {Promise<Object[]>} A promise that resolves to the list of filtered cocktails.
* @throws {Error} Throws an error if the search request fails or if the letter parameter is invalid.
* 
* @example
* // Example usage:
* const cocktails = await searchCocktailByFirstLetter('2');
* console.log('Search by first letter (2):', cocktails);
*/
export async function searchCocktailByFirstLetter(letter) {
  if (typeof letter !== 'string' || letter.trim().length !== 1) {
    throw new Error('The letter parameter must be a single character string');
  }
  
  const response = await axios.get(`${BASE_URL}search.php`, {
    params: { f: letter }
  });
  
  if (!response || !response.data) {
    throw new Error('Invalid response from the API');
  }
  
  if (!response.data.drinks || response.data.drinks.length === 0) {
    throw new Error(`No cocktails found for the letter: ${letter}`);
  }
  
  return response.data.drinks.map(filterCocktailData);
}

/**
 * Searches for an ingredient by name.
 * 
 * @param {string} name - The name of the ingredient to search for.
 * @returns {Promise<Object>} A promise that resolves to the first search result of the ingredient.
 * @throws {Error} Throws an error if the search request fails or if the name parameter is invalid.
 * 
 * @example
 * // Example usage:
 * const ingredient = await searchIngredientByName('Gin');
 * console.log('Search by name (Gin):', ingredient);
 */
export async function searchIngredientByName(name) {
  if (typeof name !== 'string' || name.trim().length === 0) {
    throw new Error('The name parameter must be a non-empty string');
  }

  const response = await axios.get(`${BASE_URL}search.php`, {
    params: { i: name }
  });

  if (!response || !response.data) {
    throw new Error('Invalid response from the API');
  }
  
  if (!response.data.ingredients || response.data.ingredients.length === 0) {
    throw new Error(`No ingredients found for the name: ${name}`);
  }
  
  const ingredient = response.data.ingredients[0];
  return ingredient;
}