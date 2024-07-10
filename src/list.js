import axios from 'axios';
import { BASE_URL } from './config.js';

/**
 * Retrieves a list of cocktail types.
 * 
 * @returns {Promise<Array<string>>} A promise that resolves to an array of cocktail types.
 * @throws {Error} Throws an error if the API response is invalid or if no cocktail types are found.
 * 
 * @example
 * // Example usage:
 * const cocktailTypes = await listCocktailTypes();
 * console.log('Cocktail Types:', cocktailTypes); // ['Ordinary Drink', 'Cocktail', ...]
 */
export async function listCocktailTypes() {
  const response = await axios.get(`${BASE_URL}list.php`, {
    params: { c: 'list' }
  });

  if (!response || !response.data) {
    throw new Error('Invalid response from the API');
  }

  if (!response.data.drinks || response.data.drinks.length === 0) {
    throw new Error('No cocktail types found');
  }

  const rawTypes = response.data.drinks;
  const types = [];
  for (let i = 0; i < rawTypes.length; i++) {
    types.push(rawTypes[i].strCategory)
  }

  return types;
}

/**
 * Retrieves a list of glass types.
 *
 * Similar to `listCocktailTypes`, this function requests a list of glass types from the CocktailDB API,
 * parses the response, and returns the glass type names as an array of strings.
 *
 * @returns {Promise<Array<string>>} A promise that resolves to an array of glass types.
 * @throws {Error} Throws an error if the API response is invalid or if no glass types are found.
 *
 * @example
 * // Example usage:
 * const glassTypes = await listGlassTypes();
 * console.log('Glass Types:', glassTypes); // ['Highball Glass', 'Margarita Glass', ...]
 */
export async function listGlassTypes() {
  const response = await axios.get(`${BASE_URL}list.php`, {
    params: { g: 'list' }
  });

  if (!response || !response.data) {
    throw new Error('Invalid response from the API');
  }

  if (!response.data.drinks || response.data.drinks.length === 0) {
    throw new Error('No glass types found');
  }

  const rawTypes = response.data.drinks;
  const types = [];
  for (let i = 0; i < rawTypes.length; i++) {
    types.push(rawTypes[i].strGlass)
  }
  
  return types;
}

/**
 * Retrieves a list of ingredients.
 *
 * This function fetches a list of ingredients from the CocktailDB API, parses the response,
 * and returns the ingredient names as an array of strings.
 *
 * @returns {Promise<Array<string>>} A promise that resolves to an array of ingredient names.
 * @throws {Error} Throws an error if the API response is invalid or if no ingredients are found.
 *
 * @example
 * // Example usage:
 * const ingredients = await listIngredients();
 * console.log('Ingredients:', ingredients); // ['Rum', 'Lemon Juice', 'Sugar', ...]
 */
export async function listIngredients() {
  const response = await axios.get(`${BASE_URL}list.php`, {
    params: { i: 'list' }
  });

  if (!response || !response.data) {
    throw new Error('Invalid response from the API');
  }

  if (!response.data.drinks || response.data.drinks.length === 0) {
    throw new Error('No ingredients found');
  }

  const rawIngredients = response.data.drinks;
  const ingredients = [];
  for (let i = 0; i < rawIngredients.length; i++) {
    ingredients.push(rawIngredients[i].strIngredient1)
  }
  
  return ingredients;
}

/**
 * Retrieves a list of alcohol types.
 *
 * Fetches a list of alcohol types (e.g., Alcoholic, Non-Alcoholic, Optional Alcohol) from the CocktailDB API,
 * parses the response, and returns the alcohol type names as an array of strings.
 *
 * @returns {Promise<Array<string>>} A promise that resolves to an array of alcohol types.
 * @throws {Error} Throws an error if the API response is invalid or if no alcohol types are found.
 *
 * @example
 * // Example usage:
 * const alcoholTypes = await listAlcoholTypes();
 * console.log('Alcohol Types:', alcoholTypes); // ['Alcoholic', 'Non alcoholic', 'Optional alcohol']
 */
export async function listAlcoholTypes() {
  const response = await axios.get(`${BASE_URL}list.php`, {
    params: { a: 'list' }
  });

  if (!response || !response.data) {
    throw new Error('Invalid response from the API');
  }

  if (!response.data.drinks || response.data.drinks.length === 0) {
    throw new Error('No Alcohol types found');
  }

  const rawAlcoholTypes = response.data.drinks;
  const alcoholTypes = [];
  for (let i = 0; i < rawAlcoholTypes.length; i++) {
    alcoholTypes.push(rawAlcoholTypes[i].strAlcoholic)
  }
  
  return alcoholTypes;
}