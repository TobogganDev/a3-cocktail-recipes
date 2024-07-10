import axios from 'axios';
import { listCocktailTypes, listGlassTypes, listIngredients, listAlcoholTypes } from '../src/list';

jest.mock('axios');

describe('listCocktailTypes', () => {
  it('should return the correct list of cocktail types', async () => {
    const mockResponse = {
      data: {
        drinks: [
          { strCategory: 'Ordinary Drink' },
          { strCategory: 'Cocktail' },
          { strCategory: 'Shake' },
          { strCategory: 'Other / Unknown' },
          { strCategory: 'Cocoa' },
          { strCategory: 'Shot' },
          { strCategory: 'Coffee / Tea' },
          { strCategory: 'Homemade Liqueur' },
          { strCategory: 'Punch / Party Drink' },
          { strCategory: 'Beer' },
          { strCategory: 'Soft Drink' }
        ]
      }
    };
    
    axios.get.mockResolvedValue(mockResponse);
    const result = await listCocktailTypes();
    expect(result).toEqual([
      'Ordinary Drink',
      'Cocktail',
      'Shake',
      'Other / Unknown',
      'Cocoa',
      'Shot',
      'Coffee / Tea',
      'Homemade Liqueur',
      'Punch / Party Drink',
      'Beer',
      'Soft Drink'
    ]);
  });
  
  it('should throw an error for invalid response from the API', async () => {
    axios.get.mockResolvedValue({ data: null });
    
    await expect(listCocktailTypes()).rejects.toThrow('Invalid response from the API');
  });
  
  it('should throw an error if no cocktail types are found', async () => {
    const mockResponse = { data: { drinks: [] } };
    axios.get.mockResolvedValue(mockResponse);
    
    await expect(listCocktailTypes()).rejects.toThrow('No cocktail types found');
  });
});

describe('listGlassTypes', () => {
  it('should return the correct list of glass types', async () => {
    const mockResponse = {
      data: {
        drinks: [
          {
            "strGlass": "Highball glass"
          },
          {
            "strGlass": "Cocktail glass"
          },
          {
            "strGlass": "Old-fashioned glass"
          },
          {
            "strGlass": "Whiskey Glass"
          },
          {
            "strGlass": "Collins glass"
          },
          {
            "strGlass": "Pousse cafe glass"
          },
          {
            "strGlass": "Champagne flute"
          },
          {
            "strGlass": "Whiskey sour glass"
          },
          {
            "strGlass": "Cordial glass"
          },
          {
            "strGlass": "Brandy snifter"
          },
          {
            "strGlass": "White wine glass"
          },
          {
            "strGlass": "Nick and Nora Glass"
          },
          {
            "strGlass": "Hurricane glass"
          },
          {
            "strGlass": "Coffee mug"
          },
          {
            "strGlass": "Shot glass"
          },
          {
            "strGlass": "Jar"
          },
          {
            "strGlass": "Irish coffee cup"
          },
          {
            "strGlass": "Punch bowl"
          },
          {
            "strGlass": "Pitcher"
          },
          {
            "strGlass": "Pint glass"
          },
          {
            "strGlass": "Copper Mug"
          },
          {
            "strGlass": "Wine Glass"
          },
          {
            "strGlass": "Beer mug"
          },
          {
            "strGlass": "Margarita/Coupette glass"
          },
          {
            "strGlass": "Beer pilsner"
          },
          {
            "strGlass": "Beer Glass"
          },
          {
            "strGlass": "Parfait glass"
          },
          {
            "strGlass": "Mason jar"
          },
          {
            "strGlass": "Margarita glass"
          },
          {
            "strGlass": "Martini Glass"
          },
          {
            "strGlass": "Balloon Glass"
          },
          {
            "strGlass": "Coupe Glass"
          }
        ]
      }
    };
    
    axios.get.mockResolvedValue(mockResponse);
    const result = await listGlassTypes();
    expect(result).toEqual([
      'Highball glass',
      'Cocktail glass',
      'Old-fashioned glass',
      'Whiskey Glass',
      'Collins glass',
      'Pousse cafe glass',
      'Champagne flute',
      'Whiskey sour glass',
      'Cordial glass',
      'Brandy snifter',
      'White wine glass',
      'Nick and Nora Glass',
      'Hurricane glass',
      'Coffee mug',
      'Shot glass',
      'Jar',
      'Irish coffee cup',
      'Punch bowl',
      'Pitcher',
      'Pint glass',
      'Copper Mug',
      'Wine Glass',
      'Beer mug',
      'Margarita/Coupette glass',
      'Beer pilsner',
      'Beer Glass',
      'Parfait glass',
      'Mason jar',
      'Margarita glass',
      'Martini Glass',
      'Balloon Glass',
      'Coupe Glass'
    ]);
  });
  
  it('should throw an error for invalid response from the API', async () => {
    axios.get.mockResolvedValue({ data: null });
    
    await expect(listGlassTypes()).rejects.toThrow('Invalid response from the API');
  });
  
  it('should throw an error if no glasses types are found', async () => {
    const mockResponse = { data: { drinks: [] } };
    axios.get.mockResolvedValue(mockResponse);
    
    await expect(listGlassTypes()).rejects.toThrow('No glass types found');
  });
});


describe('listIngredients', () => {
  it('should return the correct list of ingredients', async () => {
    const mockResponse = {
      data: {
        drinks: [
          {
            "strIngredient1": "Light rum"
          },
          {
            "strIngredient1": "Applejack"
          },
          {
            "strIngredient1": "Gin"
          },
          {
            "strIngredient1": "Dark rum"
          },
          {
            "strIngredient1": "Sweet Vermouth"
          },
          {
            "strIngredient1": "Strawberry schnapps"
          },
          {
            "strIngredient1": "Scotch"
          },
          {
            "strIngredient1": "Apricot brandy"
          },
          {
            "strIngredient1": "Triple sec"
          },
          {
            "strIngredient1": "Southern Comfort"
          },
          {
            "strIngredient1": "Orange bitters"
          },
          {
            "strIngredient1": "Brandy"
          },
          {
            "strIngredient1": "Lemon vodka"
          },
          {
            "strIngredient1": "Blended whiskey"
          },
          {
            "strIngredient1": "Dry Vermouth"
          },
          {
            "strIngredient1": "Amaretto"
          },
          {
            "strIngredient1": "Tea"
          },
          {
            "strIngredient1": "Champagne"
          },
          {
            "strIngredient1": "Coffee liqueur"
          },
          {
            "strIngredient1": "Bourbon"
          },
          {
            "strIngredient1": "Tequila"
          },
          {
            "strIngredient1": "Vodka"
          },
          {
            "strIngredient1": "Añejo rum"
          },
          {
            "strIngredient1": "Bitters"
          },
          {
            "strIngredient1": "Sugar"
          },
          {
            "strIngredient1": "Kahlua"
          },
          {
            "strIngredient1": "demerara Sugar"
          },
          {
            "strIngredient1": "Dubonnet Rouge"
          },
          {
            "strIngredient1": "Watermelon"
          },
          {
            "strIngredient1": "Lime juice"
          },
          {
            "strIngredient1": "Irish whiskey"
          },
          {
            "strIngredient1": "Apple brandy"
          },
          {
            "strIngredient1": "Carbonated water"
          },
          {
            "strIngredient1": "Cherry brandy"
          },
          {
            "strIngredient1": "Creme de Cacao"
          },
          {
            "strIngredient1": "Grenadine"
          },
          {
            "strIngredient1": "Port"
          },
          {
            "strIngredient1": "Coffee brandy"
          },
          {
            "strIngredient1": "Red wine"
          },
          {
            "strIngredient1": "Rum"
          },
          {
            "strIngredient1": "Grapefruit juice"
          },
          {
            "strIngredient1": "Ricard"
          },
          {
            "strIngredient1": "Sherry"
          },
          {
            "strIngredient1": "Cognac"
          },
          {
            "strIngredient1": "Sloe gin"
          },
          {
            "strIngredient1": "Apple juice"
          },
          {
            "strIngredient1": "Pineapple juice"
          },
          {
            "strIngredient1": "Lemon juice"
          },
          {
            "strIngredient1": "Sugar syrup"
          },
          {
            "strIngredient1": "Milk"
          },
          {
            "strIngredient1": "Strawberries"
          },
          {
            "strIngredient1": "Chocolate syrup"
          },
          {
            "strIngredient1": "Yoghurt"
          },
          {
            "strIngredient1": "Mango"
          },
          {
            "strIngredient1": "Ginger"
          },
          {
            "strIngredient1": "Lime"
          },
          {
            "strIngredient1": "Cantaloupe"
          },
          {
            "strIngredient1": "Berries"
          },
          {
            "strIngredient1": "Grapes"
          },
          {
            "strIngredient1": "Kiwi"
          },
          {
            "strIngredient1": "Tomato juice"
          },
          {
            "strIngredient1": "Cocoa powder"
          },
          {
            "strIngredient1": "Chocolate"
          },
          {
            "strIngredient1": "Heavy cream"
          },
          {
            "strIngredient1": "Galliano"
          },
          {
            "strIngredient1": "Peach Vodka"
          },
          {
            "strIngredient1": "Ouzo"
          },
          {
            "strIngredient1": "Coffee"
          },
          {
            "strIngredient1": "Spiced rum"
          },
          {
            "strIngredient1": "Water"
          },
          {
            "strIngredient1": "Espresso"
          },
          {
            "strIngredient1": "Angelica root"
          },
          {
            "strIngredient1": "Orange"
          },
          {
            "strIngredient1": "Cranberries"
          },
          {
            "strIngredient1": "Johnnie Walker"
          },
          {
            "strIngredient1": "Apple cider"
          },
          {
            "strIngredient1": "Everclear"
          },
          {
            "strIngredient1": "Cranberry juice"
          },
          {
            "strIngredient1": "Egg yolk"
          },
          {
            "strIngredient1": "Egg"
          },
          {
            "strIngredient1": "Grape juice"
          },
          {
            "strIngredient1": "Peach nectar"
          },
          {
            "strIngredient1": "Lemon"
          },
          {
            "strIngredient1": "Firewater"
          },
          {
            "strIngredient1": "Lemonade"
          },
          {
            "strIngredient1": "Lager"
          },
          {
            "strIngredient1": "Whiskey"
          },
          {
            "strIngredient1": "Absolut Citron"
          },
          {
            "strIngredient1": "Pisco"
          },
          {
            "strIngredient1": "Irish cream"
          },
          {
            "strIngredient1": "Ale"
          },
          {
            "strIngredient1": "Chocolate liqueur"
          },
          {
            "strIngredient1": "Midori melon liqueur"
          },
          {
            "strIngredient1": "Sambuca"
          },
          {
            "strIngredient1": "Cider"
          },
          {
            "strIngredient1": "Sprite"
          },
          {
            "strIngredient1": "7-Up"
          },
          {
            "strIngredient1": "Blackberry brandy"
          },
          {
            "strIngredient1": "Peppermint schnapps"
          },
          {
            "strIngredient1": "Creme de Cassis"
          }
        ]
      }
    };
    
    axios.get.mockResolvedValue(mockResponse);
    const result = await listIngredients();
    expect(result).toEqual([
      'Light rum',        'Applejack',         'Gin',
      'Dark rum',         'Sweet Vermouth',    'Strawberry schnapps',
      'Scotch',           'Apricot brandy',    'Triple sec',
      'Southern Comfort', 'Orange bitters',    'Brandy',
      'Lemon vodka',      'Blended whiskey',   'Dry Vermouth',
      'Amaretto',         'Tea',               'Champagne',
      'Coffee liqueur',   'Bourbon',           'Tequila',
      'Vodka',            'Añejo rum',         'Bitters',
      'Sugar',            'Kahlua',            'demerara Sugar',
      'Dubonnet Rouge',   'Watermelon',        'Lime juice',
      'Irish whiskey',    'Apple brandy',      'Carbonated water',
      'Cherry brandy',    'Creme de Cacao',    'Grenadine',
      'Port',             'Coffee brandy',     'Red wine',
      'Rum',              'Grapefruit juice',  'Ricard',
      'Sherry',           'Cognac',            'Sloe gin',
      'Apple juice',      'Pineapple juice',   'Lemon juice',
      'Sugar syrup',      'Milk',              'Strawberries',
      'Chocolate syrup',  'Yoghurt',           'Mango',
      'Ginger',           'Lime',              'Cantaloupe',
      'Berries',          'Grapes',            'Kiwi',
      'Tomato juice',     'Cocoa powder',      'Chocolate',
      'Heavy cream',      'Galliano',          'Peach Vodka',
      'Ouzo',             'Coffee',            'Spiced rum',
      'Water',            'Espresso',          'Angelica root',
      'Orange',           'Cranberries',       'Johnnie Walker',
      'Apple cider',      'Everclear',         'Cranberry juice',
      'Egg yolk',         'Egg',               'Grape juice',
      'Peach nectar',     'Lemon',             'Firewater',
      'Lemonade',         'Lager',             'Whiskey',
      'Absolut Citron',   'Pisco',             'Irish cream',
      'Ale',              'Chocolate liqueur', 'Midori melon liqueur',
      'Sambuca',          'Cider',             'Sprite',
      '7-Up',             'Blackberry brandy', 'Peppermint schnapps',
      'Creme de Cassis'
    ]);
  });
  
  it('should throw an error for invalid response from the API', async () => {
    axios.get.mockResolvedValue({ data: null });
    
    await expect(listIngredients()).rejects.toThrow('Invalid response from the API');
  });
  
  it('should throw an error if no glasses types are found', async () => {
    const mockResponse = { data: { drinks: [] } };
    axios.get.mockResolvedValue(mockResponse);
    
    await expect(listIngredients()).rejects.toThrow('No ingredients found');
  });
});

describe('listAlcoholTypes', () => {
  it('should return the correct list of alcohol types', async () => {
    const mockResponse = {
      data: {
        drinks: [
          { strAlcoholic: 'Alcoholic' },
          { strAlcoholic: 'Non alcoholic' },
          { strAlcoholic: 'Optional alcohol' }
        ]
      }
    };
    
    axios.get.mockResolvedValue(mockResponse);
    const result = await listAlcoholTypes();
    expect(result).toEqual(['Alcoholic', 'Non alcoholic', 'Optional alcohol']);
  });
  
  it('should throw an error for invalid response from the API', async () => {
    axios.get.mockResolvedValue({ data: null });
    
    await expect(listAlcoholTypes()).rejects.toThrow('Invalid response from the API');
  });
  
  it('should throw an error if no alcohol types are found', async () => {
    const mockResponse = { data: { drinks: [] } };
    axios.get.mockResolvedValue(mockResponse);
    
    await expect(listAlcoholTypes()).rejects.toThrow('No Alcohol types found');
  });
});