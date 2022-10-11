import { Injectable } from '@angular/core';
import { Todo } from './todolist.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [
    {
      action: "Mowing Lawn",
    },
    {
      action: "Clean Kitchen"
    }
  ];

  getTodos(){
    return this.todos.slice();
  }

  constructor() { }
}
