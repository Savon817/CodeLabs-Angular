import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TodoFormComponent } from "./todo-form/todo-form.component";
import { TodoListComponent } from "./todoList/todoList.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/todolist', pathMatch: 'full' },
  { path: 'todolist', component: TodoListComponent, children: [
    { path: 'add', component: TodoFormComponent }
  ] },

]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})

export class AppRouteModule{

}
