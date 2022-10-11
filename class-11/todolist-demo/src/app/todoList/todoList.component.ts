import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../shared/todo.service';
import { Todo } from '../shared/todolist.model';

@Component({
  selector: 'app-todoList',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: Todo[] = [];

  constructor(private todoService: TodoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.todoList = this.todoService.getTodos();
  }

  onAddTodo(){
    this.router.navigate(['add'], {relativeTo: this.route})
  }
}
