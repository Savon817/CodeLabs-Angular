import { EventEmitter, Injectable } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Delicious Tacos', 'Crazy Good Tacos', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/birria-tacos-1648842127.jpg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Tortillas', 3),
      new Ingredient('Sauce', 1)
    ]),
    new Recipe("Tasty Shrimp Po'Boy", 'A recipe that cannot go wrong', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/08/20/0/FNM_100120-Shrimp-Po-Boy_s4x3.jpg.rend.hgtvcom.616.462.suffix/1597931264750.jpeg',
    [
      new Ingredient('Shrimp', 15),
      new Ingredient('Bread', 2),
      new Ingredient('Tomatoes', 1),
      new Ingredient('Sauce', 1)
    ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredient: Ingredient[]){
    this.slService.addIngredients(ingredient);
  }
}
