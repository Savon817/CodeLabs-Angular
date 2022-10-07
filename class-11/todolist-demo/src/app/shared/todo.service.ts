import { Injectable } from '@angular/core';
import { Todo } from './todolist.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [
    {
      id: 1,
      action: "Dishes",
      completed: true
    }
  ];

  getTodo(){
    return this.todos.splice();
  }

  constructor() { }
}
