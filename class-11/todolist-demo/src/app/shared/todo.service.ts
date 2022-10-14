import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Todo } from './todolist.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoChanged = new Subject<Todo[]>();

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

  addTodo(todo: Todo){
    this.todos.push(todo);
    this.todoChanged.next(this.todos.slice());
  }

  constructor() { }
}
