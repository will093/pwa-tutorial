import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Todo } from './models/todo';
import { TodoDataService } from './services/todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos$: Observable<Todo[]>

  constructor(private todoDataService: TodoDataService) {}

  ngOnInit() {
    this.todos$ = this.todoDataService.fetchTodos();
  }
}
