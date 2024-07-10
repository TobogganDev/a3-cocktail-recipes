# Cocktail recipes

Library to get recipes of every cocktail using the [Cocktail API](https://www.thecocktaildb.com/api.php)

## Installation

```bash
npm i a3-cocktail-recipes
```

## Local development

```bash
npm install
```

```bash
npm run test
```

## Usage

When you install the library you will have access to multiple function

## Search cocktail by name

Retrieve all the informations about a cocktail with his name :

- Id
- Name
- Tags
- Category
- IBA
- Glass
- Instructions
- Image Thumb
- Ingredients
- Measures

```js
import {searchCocktailByName} from 'a3-cocktail-recipes'

const cocktail = await searchCocktailByName('margarita')
```

return an object

## Search coktails by first letter

Retrieve all cocktails starting with the given letter

```js
import {searchCocktailByFirstLetter} from 'a3-cocktail-recipes'

const cocktails = await searchCocktailByFirstLetter('2')
```

return an array of cocktails

## Search ingredient by name

Retrieve all the informations about an ingredient with his name :

- Id
- Name
- Description
- Type
- Alcohol ?
- Degree

```js
import {searchIngredientByName} from 'a3-cocktail-recipes'

const ingredient = await searchIngredientByName('Gin')
```

return an object

## Get all cocktails by alcoholic type

Retrieve all cocktails of a given alcoholic type

Types (**needs to be written exactly like this**): 

- Alcoholic
- Non alcoholic
- Optional alcohol

```js
import {filterCocktailsByAlcoholicType} from 'a3-cocktail-recipes'

const cocktails = await filterCocktailsByAlcoholicType('Alcoholic')
```

return an array of cocktails

## Get all cocktails by category

Retrieve all cocktails of a given category

Categories (**needs to be written exactly like this**): 

- Ordinary Drink
- Cocktail
- Shake
- Other / Unknown
- Cocoa
- Shot
- Coffee / Tea
- Homemade Liqueur
- Punch / Party Drink
- Beer
- Soft Drink

```js
import {filterCocktailsByCategory} from 'a3-cocktail-recipes'

const cocktails = await filterCocktailsByCategory('Ordinary Drink')
```

return an array of cocktails

## Get all cocktails by glass type

Retrieve all cocktails used with a given glass type

Glass types (**needs to be written exactly like this**): 

- Highball glass
- Cocktail glass
- Old-fashioned glass
- Whiskey Glass
- Collins glass
- Pousse cafe glass
- Champagne flute
- Whiskey sour glass
- Cordial glass
- Brandy snifter
- White wine glass
- Nick and Nora Glass
- Hurricane glass
- Coffee mug
- Shot glass
- Jar
- Irish coffee cup
- Punch bowl
- Pitcher
- Pint glass
- Copper Mug
- Wine Glass
- Beer mug
- Margarita/Coupette glass
- Beer pilsner
- Beer Glass
- Parfait glass
- Mason jar
- Margarita glass
- Martini Glass
- Balloon Glass
- Coupe Glass

```js
import {filterCocktailsByGlassType} from 'a3-cocktail-recipes'

const cocktails = await filterCocktailsByGlassType('Highball')
```

return an array of cocktails

## Look up coktails by ID

Retrieve all cocktail's info with the given ID

```js
import {lookupCocktailById} from 'a3-cocktail-recipes'

const cocktail = await lookupCocktailById('11007')
```

return an object cocktail

## Look up ingredients by ID

Retrieve all ingredient's info with the given ID

```js
import {lookupIngredientById} from 'a3-cocktail-recipes'

const cocktail = await lookupIngredientById('1')
```

return an object ingredient

## Look up a random cocktail

Retrieve a random cocktail

```js
import {lookupRandomCocktail} from 'a3-cocktail-recipes'

const cocktail = await lookupRandomCocktail()
```

return an object cocktail

## List all cocktail, glass, ingredients or alcohol types

Retrieve a list of cocktail, glass, ingredients or alcohol types

```js
import {listCocktailTypes, listGlassTypes, listIngredients, listAlcoholTypes} from 'a3-cocktail-recipes'

const cocktailTypes = await listCocktailTypes()
const glassTypes = await listGlassTypes()
const ingredients = await listIngredients()
const alcoholTypes = await listAlcoholTypes()
```

return an array of types