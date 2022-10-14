import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { TodoService } from '../shared/todo.service';
import { Todo } from '../shared/todolist.model'

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @ViewChild('todoInput', {static: true}) todoInputRef: ElementRef;
  constructor(private tdService: TodoService) { }

  ngOnInit(): void {
  }

  onAddTodo(){
    const todoAction = this.todoInputRef.nativeElement.value;
    console.log(todoAction);
    const newTodo = new Todo(todoAction)
    this.tdService.addTodo(newTodo);
  }

}
