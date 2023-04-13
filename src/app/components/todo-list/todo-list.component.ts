import { Component } from '@angular/core';
import { TaskInterface } from './interfaces/task-interface';
import { TaskService } from './services/task.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  count = 0
  taskList: TaskInterface[] = [];
  inputValue = ''

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService
        .getToDoList()
        .subscribe(data => {
          this.taskList = data
          this.count = this.taskList.length
        });
  }

  newTask(){
    const userTask: TaskInterface = {
      label: this.inputValue,
      done: false
    }

    this.taskList.push(userTask)
    this.postMethod()

    this.inputValue = ''
  }

  updateList(newItem: TaskInterface[]) {
    this.taskList = newItem
    this.postMethod()
  }

  deleteList(){
    this.taskList = []
    this.postMethod()
  }

  postMethod(){
    const newTaskListJSON = JSON.stringify(this.taskList)

    this.taskService
        .postTask(newTaskListJSON)
        .subscribe(data => {
          console.log(data)
          this.count = this.taskList.length;
        });
  }
}
