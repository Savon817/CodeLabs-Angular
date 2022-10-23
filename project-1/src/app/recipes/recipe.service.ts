import { ThisReceiver } from "@angular/compiler";
import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe('Delicious Tacos', 'Crazy Good Tacos', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/birria-tacos-1648842127.jpg',
  //   [
  //     new Ingredient('Meat', 1),
  //     new Ingredient('Tortillas', 3),
  //     new Ingredient('Sauce', 1)
  //   ]),
  //   new Recipe("Tasty Shrimp Po'Boy", 'A recipe that cannot go wrong', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/08/20/0/FNM_100120-Shrimp-Po-Boy_s4x3.jpg.rend.hgtvcom.616.462.suffix/1597931264750.jpeg',
  //   [
  //     new Ingredient('Shrimp', 15),
  //     new Ingredient('Bread', 2),
  //     new Ingredient('Tomatoes', 1),
  //     new Ingredient('Sauce', 1)
  //   ])
  // ];
  private recipes: Recipe[] = [];
  constructor(private slService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredient: Ingredient[]){
    this.slService.addIngredients(ingredient);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
