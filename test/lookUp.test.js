import axios from 'axios';
import { lookupCocktailById, lookupIngredientById, lookupRandomCocktail } from '../src/lookUp';

jest.mock('axios');

describe('lookupCocktailById', () => {
  it('should return cocktail details when a valid ID is provided', async () => {
    const mockData = {
      data: {
        drinks: [
          {
            idDrink: '11007',
            strDrink: 'Margarita',
            strInstructions: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
          },
        ],
      },
    };

    axios.get.mockResolvedValue(mockData);

    const result = await lookupCocktailById('11007');
    expect(result).toEqual(mockData.data.drinks[0]);
  });

  it('should throw an error when the ID parameter is invalid', async () => {
    await expect(lookupCocktailById('')).rejects.toThrow('The ID parameter must be a non-empty string');
  });

  it('should throw an error if no cocktail is found for the given ID', async () => {
    const mockData = {
      data: {
        drinks: null,
      },
    };

    axios.get.mockResolvedValue(mockData);

    await expect(lookupCocktailById('12345')).rejects.toThrow('No cocktails found for the ID: 12345');
  });

  it('should throw an error if the API response is invalid', async () => {
    axios.get.mockResolvedValue(null);

    await expect(lookupCocktailById('11007')).rejects.toThrow('Invalid response from the API');
  });

  it('should throw an error if the API request fails', async () => {
    axios.get.mockRejectedValue(new Error('API request failed'));

    await expect(lookupCocktailById('11007')).rejects.toThrow('API request failed');
  });
});

describe('lookupIngredientById', () => {
  it('should return ingredient details when a valid ID is provided', async () => {
    const mockData = {
      data: {
        ingredients: [
          {
            idIngredient: '1',
            strIngredient: 'Vodka',
            strDescription: 'Vodka is a distilled beverage composed primarily of water and ethanol, sometimes with traces of impurities and flavorings. Traditionally, vodka is made by the distillation of cereal grains or potatoes that have been fermented, though some modern brands use fruits or sugar as the base.',
            strType: 'Alcohol',
          },
        ],
      },
    };

    axios.get.mockResolvedValue(mockData);

    const result = await lookupIngredientById('1');
    expect(result).toEqual(mockData.data.ingredients[0]);
  });

  it('should throw an error when the ID parameter is invalid', async () => {
    await expect(lookupIngredientById('')).rejects.toThrow('The ID parameter must be a non-empty string');
  });

  it('should throw an error if no ingredient is found for the given ID', async () => {
    const mockData = {
      data: {
        ingredients: null,
      },
    };

    axios.get.mockResolvedValue(mockData);

    await expect(lookupIngredientById('12345')).rejects.toThrow('No ingredients found for the ID: 12345');
  });

  it('should throw an error if the API response is invalid', async () => {
    axios.get.mockResolvedValue(null);

    await expect(lookupIngredientById('1')).rejects.toThrow('Invalid response from the API');
  });

  it('should throw an error if the API request fails', async () => {
    axios.get.mockRejectedValue(new Error('API request failed'));

    await expect(lookupIngredientById('1')).rejects.toThrow('API request failed');
  });
});

describe('lookupRandomCocktail', () => {
  it('should return a random cocktail', async () => {
    const mockData = {
      data: {
        drinks: [
          {
            idDrink: '11007',
            strDrink: 'Margarita',
            strInstructions: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
          },
        ],
      },
    };

    axios.get.mockResolvedValue(mockData);

    const result = await lookupRandomCocktail();
    expect(result).toEqual(mockData.data.drinks[0]);
  });

  it('should throw an error if the API response is invalid', async () => {
    axios.get.mockResolvedValue(null);

    await expect(lookupRandomCocktail()).rejects.toThrow('Invalid response from the API');
  });

  it('should throw an error if the API request fails', async () => {
    axios.get.mockRejectedValue(new Error('API request failed'));

    await expect(lookupRandomCocktail()).rejects.toThrow('API request failed');
  });
});
