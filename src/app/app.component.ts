import { Component } from '@angular/core';

class toDo{
  description: string;
  done: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';

  public list: toDo[] = [];
  public newItem: string;

  addNewtoDo(): void{
    this.list.push({
      description: this.newItem,
      done: false
    });
    this.newItem = null;
  }
}
