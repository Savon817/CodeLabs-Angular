import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todolist.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo = {
    action: '',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
