import axios from 'axios';
import { searchCocktailByName, searchCocktailByFirstLetter, searchIngredientByName } from "../src/search";

jest.mock('axios');

describe('searchCocktailByName', () => {
  it('should return filtered cocktail (without unwanted fields) when a valid cocktail name is provided', async () => {
    const mockData = {
      data: {
        drinks: [
          {
            idDrink: '11007',
            strDrink: 'Margarita',
            strTags: 'IBA,ContemporaryClassic',
            strCategory: 'Ordinary Drink',
            strIBA: 'Contemporary Classics',
            strAlcoholic: 'Alcoholic',
            strGlass: 'Cocktail glass',
            strInstructions: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
            strIngredient1: 'Tequila',
            strIngredient2: 'Triple sec',
            strIngredient3: 'Lime juice',
            strIngredient4: 'Salt',
            strMeasure1: '1 1/2 oz ',
            strMeasure2: '1/2 oz ',
            strMeasure3: '1 oz '
          }
        ]
      }
    };
    
    axios.get.mockResolvedValue(mockData);
    
    const result = await searchCocktailByName('margarita');
    expect(result).toEqual(mockData.data.drinks[0]);
  });
  
  it('should throw an error when the name parameter is empty', async () => {
    await expect(searchCocktailByName('')).rejects.toThrow('The name parameter must be a non-empty string');
  });
  
  it('should throw an error when the name parameter is not a string', async () => {
    await expect(searchCocktailByName(123)).rejects.toThrow('The name parameter must be a non-empty string');
  });
  
  it('should throw an error if no cocktails are found', async () => {
    const mockData = { data: { drinks: null } };
    axios.get.mockResolvedValue(mockData);
    
    await expect(searchCocktailByName('nonexistent')).rejects.toThrow('No cocktails found for the name: nonexistent');
  });
  
  it('should throw an error if the API response is invalid', async () => {
    axios.get.mockResolvedValue(null);
    
    await expect(searchCocktailByName('margarita')).rejects.toThrow('Invalid response from the API');
  });
});


describe('searchCocktailByFirstLetter', () => {
  it('should return filtered data without unwanted fields when the letter "2" is provided', async () => {
    const mockData = {
      data: {
        drinks: [
          {
            idDrink: '15288',
            strDrink: '252',
            strCategory: 'Shot',
            strAlcoholic: 'Alcoholic',
            strGlass: 'Shot glass',
            strInstructions: 'Add both ingredients to shot glass, shoot, and get drunk quick',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/rtpxqw1468877562.jpg',
            strIngredient1: '151 proof rum',
            strIngredient2: 'Wild Turkey',
            strMeasure1: '1/2 shot Bacardi ',
            strMeasure2: '1/2 shot '
          },
          {
            idDrink: '17060',
            strDrink: '24k nightmare',
            strCategory: 'Shot',
            strAlcoholic: 'Alcoholic',
            strGlass: 'Shot glass',
            strInstructions: 'Add over ice,shake and pour.',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/yyrwty1468877498.jpg',
            strIngredient1: 'Goldschlager',
            strIngredient2: 'Jägermeister',
            strIngredient3: 'Rumple Minze',
            strIngredient4: '151 proof rum',
            strMeasure1: '1/2 oz ',
            strMeasure2: '1/2 oz ',
            strMeasure3: '1/2 oz ',
            strMeasure4: '1/2 oz Bacardi '
          }
        ]
      }
    };
    
    axios.get.mockResolvedValue(mockData);
    
    const result = await searchCocktailByFirstLetter('2');
    expect(result).toEqual(mockData.data.drinks);
  })
  
  it('should throw an error if the letter parameter is invalid', async () => {
    await expect(searchCocktailByFirstLetter('')).rejects.toThrow('The letter parameter must be a single character string');
    await expect(searchCocktailByFirstLetter('aa')).rejects.toThrow('The letter parameter must be a single character string');
    await expect(searchCocktailByFirstLetter(2)).rejects.toThrow('The letter parameter must be a single character string');
  });
  
  it('should throw an error if no cocktails are found for the given letter', async () => {
    const mockData = {
      data: {
        drinks: null
      }
    };
    
    axios.get.mockResolvedValue(mockData);
    
    await expect(searchCocktailByFirstLetter('z')).rejects.toThrow('No cocktails found for the letter: z');
  });
  
  it('should throw an error if the API response is invalid', async () => {
    axios.get.mockResolvedValue(null);
    
    await expect(searchCocktailByFirstLetter('a')).rejects.toThrow('Invalid response from the API');
  });
  
  it('should throw an error if the API request fails', async () => {
    axios.get.mockRejectedValue(new Error('API request failed'));
    
    await expect(searchCocktailByFirstLetter('a')).rejects.toThrow('API request failed');
  });
})


describe('searchIngredientByName',  () => { 
  it('first', async () => {
    const mockData = {
      data: {
        ingredients: [
          {
            idIngredient: '2',
            strIngredient: 'Gin',
            strDescription: 'Gin is a distilled alcoholic drink that derives its predominant flavour from juniper berries (Juniperus communis). Gin is one of the broadest categories of spirits, all of various origins, styles, and flavour profiles, that revolve around juniper as a common ingredient.\r\n' +
            '\r\n' +
            'From its earliest origins in the Middle Ages, the drink has evolved from a herbal medicine to an object of commerce in the spirits industry. Gin emerged in England after the introduction of the jenever, a Dutch liquor which originally had been a medicine. Although this development had been taking place since early 17th century, gin became widespread after the William of Orange-led 1688 Glorious Revolution and subsequent import restrictions on French brandy.\r\n' +
            '\r\n' +
            'Gin today is produced in subtly different ways, from a wide range of herbal ingredients, giving rise to a number of distinct styles and brands. After juniper, gin tends to be flavoured with botanical/herbal, spice, floral or fruit-flavours or often a combination. It is most commonly consumed mixed with tonic water. Gin is also often used as a base spirit to produce flavoured gin-based liqueurs such as, for example, Sloe gin, traditionally by the addition of fruit, flavourings and sugar.',
            strType: 'Gin',
            strAlcohol: 'Yes',
            strABV: '40'
          }
        ]
      }
    }
    
    axios.get.mockResolvedValue(mockData);
    
    const result = await searchIngredientByName('Gin');
    expect(result).toEqual(mockData.data.ingredients[0]);
  })

  it('should throw an error when the name parameter is empty', async () => {
    await expect(searchIngredientByName('')).rejects.toThrow('The name parameter must be a non-empty string');
  });
  
  it('should throw an error when the name parameter is not a string', async () => {
    await expect(searchIngredientByName(123)).rejects.toThrow('The name parameter must be a non-empty string');
  });
  
  it('should throw an error if no ingredients are found', async () => {
    const mockData = { data: { ingredients: null } };
    axios.get.mockResolvedValue(mockData);
    
    await expect(searchIngredientByName('nonexistent')).rejects.toThrow('No ingredients found for the name: nonexistent');
  });
  
  it('should throw an error if the API response is invalid', async () => {
    axios.get.mockResolvedValue(null);
    
    await expect(searchIngredientByName('margarita')).rejects.toThrow('Invalid response from the API');
  });
})