import axios from 'axios';
import { filterCocktailsByAlcoholicType, filterCocktailsByCategory, filterCocktailsByGlassType } from '../src/filter';

jest.mock('axios');

describe('filterCocktailsByAlcoholicType', () => {
    it('should return filtered cocktails when a valid alcoholic type is provided', async () => {
        const mockData = {
            data: {
                drinks: [
                    {
                        idDrink: '11007',
                        strDrink: 'Margarita',
                        strAlcoholic: 'Alcoholic'
                    },
                    {
                        idDrink: '11008',
                        strDrink: 'Cosmopolitan',
                        strAlcoholic: 'Alcoholic'
                    }
                ]
            }
        };

        axios.get.mockResolvedValue(mockData);

        const result = await filterCocktailsByAlcoholicType('Alcoholic');
        expect(result).toEqual(mockData.data.drinks);
    });

    it('should throw an error when the alcoholic type parameter is invalid', async () => {
        await expect(filterCocktailsByAlcoholicType('')).rejects.toThrow('The type parameter must be a non-empty string');
    });

    it('should throw an error if no cocktails are found for the given alcoholic type', async () => {
        const mockData = {
            data: {
                drinks: null
            }
        };

        axios.get.mockResolvedValue(mockData);

        await expect(filterCocktailsByAlcoholicType('Non_Alcoholic')).rejects.toThrow('No cocktails found for the alcoholic type: Non_Alcoholic');
    });

    it('should throw an error if the API response is invalid', async () => {
        axios.get.mockResolvedValue(null);

        await expect(filterCocktailsByAlcoholicType('Alcoholic')).rejects.toThrow('Invalid response from the API');
    });

    it('should throw an error if the API request fails', async () => {
        axios.get.mockRejectedValue(new Error('API request failed'));

        await expect(filterCocktailsByAlcoholicType('Alcoholic')).rejects.toThrow('API request failed');
    });
});

describe('filterCocktailsByCategory', () => {
    it('should return filtered cocktails when a valid category is provided', async () => {
        const mockData = {
            data: {
                drinks: [
                    {
                        idDrink: '11007',
                        strDrink: 'Margarita',
                        strCategory: 'Ordinary Drink'
                    },
                    {
                        idDrink: '11008',
                        strDrink: 'Cosmopolitan',
                        strCategory: 'Ordinary Drink'
                    }
                ]
            }
        };

        axios.get.mockResolvedValue(mockData);

        const result = await filterCocktailsByCategory('Ordinary_Drink');
        expect(result).toEqual(mockData.data.drinks);
    });

    it('should throw an error when the category parameter is invalid', async () => {
        await expect(filterCocktailsByCategory('')).rejects.toThrow('The category parameter must be a non-empty string');
    });

    it('should throw an error if no cocktails are found for the given category', async () => {
        const mockData = {
            data: {
                drinks: null
            }
        };

        axios.get.mockResolvedValue(mockData);

        await expect(filterCocktailsByCategory('Shot')).rejects.toThrow('No cocktails found for the category: Shot');
    });

    it('should throw an error if the API response is invalid', async () => {
        axios.get.mockResolvedValue(null);

        await expect(filterCocktailsByCategory('Ordinary_Drink')).rejects.toThrow('Invalid response from the API');
    });

    it('should throw an error if the API request fails', async () => {
        axios.get.mockRejectedValue(new Error('API request failed'));

        await expect(filterCocktailsByCategory('Ordinary_Drink')).rejects.toThrow('API request failed');
    });
});

describe('filterCocktailsByGlassType', () => {
    it('should return filtered cocktails when a valid glass type is provided', async () => {
        const mockData = {
            data: {
                drinks: [
                    {
                        idDrink: '11007',
                        strDrink: 'Margarita',
                        strGlass: 'Cocktail glass'
                    },
                    {
                        idDrink: '11008',
                        strDrink: 'Cosmopolitan',
                        strGlass: 'Cocktail glass'
                    }
                ]
            }
        };

        axios.get.mockResolvedValue(mockData);

        const result = await filterCocktailsByGlassType('Cocktail_glass');
        expect(result).toEqual(mockData.data.drinks);
    });

    it('should throw an error when the glass type parameter is invalid', async () => {
        await expect(filterCocktailsByGlassType('')).rejects.toThrow('The glass parameter must be a non-empty string');
    });

    it('should throw an error if no cocktails are found for the given glass type', async () => {
        const mockData = {
            data: {
                drinks: null
            }
        };

        axios.get.mockResolvedValue(mockData);

        await expect(filterCocktailsByGlassType('Shot_glass')).rejects.toThrow('No cocktails found for the glass type: Shot_glass');
    });

    it('should throw an error if the API response is invalid', async () => {
        axios.get.mockResolvedValue(null);

        await expect(filterCocktailsByGlassType('Cocktail_glass')).rejects.toThrow('Invalid response from the API');
    });

    it('should throw an error if the API request fails', async () => {
        axios.get.mockRejectedValue(new Error('API request failed'));

        await expect(filterCocktailsByGlassType('Cocktail_glass')).rejects.toThrow('API request failed');
    });
});
