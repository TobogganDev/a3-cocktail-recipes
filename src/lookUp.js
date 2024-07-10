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
 * Looks up a cocktail by its ID and returns the filtered cocktail data.
 *
 * @param {string} id - The ID of the cocktail to look up.
 * @returns {Promise<Object>} A promise that resolves to the filtered cocktail data.
 * @throws {Error} Throws an error if the lookup request fails or if the ID parameter is invalid.
 */
export async function lookupCocktailById(id) {
    if (typeof id !== 'string' || id.trim().length === 0) {
        throw new Error('The ID parameter must be a non-empty string');
    }

    const response = await axios.get(`${BASE_URL}lookup.php`, {
        params: { i: id }
    });

    if (!response || !response.data) {
        throw new Error('Invalid response from the API');
    }

    if (!response.data.drinks || response.data.drinks.length === 0) {
        throw new Error(`No cocktails found for the ID: ${id}`);
    }

    const cocktail = response.data.drinks[0];
    return filterCocktailData(cocktail);
}

/**
 * Looks up an ingredient by its ID and returns the ingredient data.
 *
 * @param {string} id - The ID of the ingredient to look up.
 * @returns {Promise<Object>} A promise that resolves to the ingredient data.
 * @throws {Error} Throws an error if the lookup request fails or if the ID parameter is invalid.
 */
export async function lookupIngredientById(id) {
    if (typeof id !== 'string' || id.trim().length === 0) {
        throw new Error('The ID parameter must be a non-empty string');
    }

    const response = await axios.get(`${BASE_URL}lookup.php`, {
        params: { iid: id }
    });

    if (!response || !response.data) {
        throw new Error('Invalid response from the API');
    }

    if (!response.data.ingredients || response.data.ingredients.length === 0) {
        throw new Error(`No ingredients found for the ID: ${id}`);
    }

    const ingredient = response.data.ingredients[0];
    return ingredient;
}

/**
 * Looks up a random cocktail and returns the filtered cocktail data.
 *
 * @returns {Promise<Object>} A promise that resolves to the filtered cocktail data.
 * @throws {Error} Throws an error if the lookup request fails.
 */
export async function lookupRandomCocktail() {
    const response = await axios.get(`${BASE_URL}random.php`);

    if (!response || !response.data) {
        throw new Error('Invalid response from the API');
    }

    if (!response.data.drinks || response.data.drinks.length === 0) {
        throw new Error('No cocktails found');
    }

    const cocktail = response.data.drinks[0];
    return filterCocktailData(cocktail);
}
