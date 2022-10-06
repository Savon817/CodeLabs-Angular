import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2022_38/1909415/marcela-valladolid-makes-flautas-zz-220920-2x1.jpg'),
    new Recipe('Another test recipe', 'This is simply a test', 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2022_38/1909415/marcela-valladolid-makes-flautas-zz-220920-2x1.jpg')
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}
