import { Injectable } from '@angular/core';
import { Todo } from './todolist.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [
    {
      action: "Dishes",
    }
  ];

  getTodo(){
    return this.todos.splice();
  }

  constructor() { }
}
