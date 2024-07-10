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
 * Filters cocktails by alcoholic type.
 *
 * @param {string} type - The alcoholic type to filter by.
 * @returns {Promise<Object[]>} A promise that resolves to an array of filtered cocktails.
 */
export async function filterCocktailsByAlcoholicType(type) {
    if (typeof type !== 'string' || type.trim().length === 0) {
        throw new Error('The type parameter must be a non-empty string');
    }
    const response = await axios.get(`${BASE_URL}filter.php`, {
        params: { a: type }
    });

    if (!response || !response.data) {
        throw new Error('Invalid response from the API');
    }

    if (!response.data.drinks || response.data.drinks.length === 0) {
        throw new Error(`No cocktails found for the alcoholic type: ${type}`);
    }

    return response.data.drinks.map(filterCocktailData);
}

/**
 * Filters cocktails by category.
 *
 * @param {string} category - The category to filter by.
 * @returns {Promise<Object[]>} A promise that resolves to an array of filtered cocktails.
 */
export async function filterCocktailsByCategory(category) {
    if (typeof category !== 'string' || category.trim().length === 0) {
        throw new Error('The category parameter must be a non-empty string');
    }
    const response = await axios.get(`${BASE_URL}filter.php`, {
        params: { c: category }
    });

    if (!response || !response.data) {
        throw new Error('Invalid response from the API');
    }

    if (!response.data.drinks || response.data.drinks.length === 0) {
        throw new Error(`No cocktails found for the category: ${category}`);
    }

    return response.data.drinks.map(filterCocktailData);
}

/**
 * Filters cocktails by glass type.
 *
 * @param {string} glass - The glass type to filter by.
 * @returns {Promise<Object[]>} A promise that resolves to an array of filtered cocktails.
 */
export async function filterCocktailsByGlassType(glass) {
    if (typeof glass !== 'string' || glass.trim().length === 0) {
        throw new Error('The glass parameter must be a non-empty string');
    }
    const response = await axios.get(`${BASE_URL}filter.php`, {
        params: { g: glass }
    });

    if (!response || !response.data) {
        throw new Error('Invalid response from the API');
    }

    if (!response.data.drinks || response.data.drinks.length === 0) {
        throw new Error(`No cocktails found for the glass type: ${glass}`);
    }

    return response.data.drinks.map(filterCocktailData);
}
