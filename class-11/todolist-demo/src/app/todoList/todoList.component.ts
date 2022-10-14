import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TodoService } from '../shared/todo.service';
import { Todo } from '../shared/todolist.model';

@Component({
  selector: 'app-todoList',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: Todo[] = [];
  showAddForm: boolean = false
  addBtnName: string = "Add a todo"
  private tdChangeSub: Subscription;

  constructor(private todoService: TodoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.todoList = this.todoService.getTodos();
    this.tdChangeSub = this.todoService.todoChanged.subscribe(
      (todos: Todo[]) => {
        this.todoList = todos;
      }
    );
  }

  toggleAddTodo(){
    this.router.navigate(['add'], {relativeTo: this.route})
    this.showAddForm = !this.showAddForm;
    if(this.showAddForm){
      this.addBtnName = "Hide Add Todo"
    } else{
      this.addBtnName = "Add a Todo"
    }
  }
}
