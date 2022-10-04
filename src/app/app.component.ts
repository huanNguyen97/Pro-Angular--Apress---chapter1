import { Component } from '@angular/core';

// Import component
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private list = new TodoList("Bob", [
    new TodoItem("Go for fun", true),
    new TodoItem("Get flowers"),
    new TodoItem("Collect tickets")
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items
      .filter(item => !item.complete).length;
  }

  get items(): readonly TodoItem[] {
    return this.list.items
      .filter(item => this.showComplete || !item.complete);
  }

  // Function execute
  addItem(newItem: string) {
    if (newItem != "") {
      this.list.addItem(newItem);
    }
  }

  showComplete: boolean = false;
}
