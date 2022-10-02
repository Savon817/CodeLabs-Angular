import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2022_38/1909415/marcela-valladolid-makes-flautas-zz-220920-2x1.jpg'),
    new Recipe('Another test recipe', 'This is simply a test', 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2022_38/1909415/marcela-valladolid-makes-flautas-zz-220920-2x1.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
