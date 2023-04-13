import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskInterface } from '../../interfaces/task-interface';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent{
  @Input('task') taskName = '';
  @Input('tasksList') tasksList: TaskInterface[] = [];
  @Output() newItemEvent = new EventEmitter<TaskInterface[]>();

  editing = false
  editedTask = ''
  styleIcon = 'edit ms-2 me-0'
  result: TaskInterface[] = []

  constructor(private taskService: TaskService) {}

  deleteTask(){
    this.tasksList = this.tasksList.filter(item => item.label != this.taskName)
    this.sendNewList()
  }
  editingMode(){
    this.editing = !this.editing
    if(this.editing)
      this.styleIcon = 'iconselected ms-2 p-1'
    else
      this.styleIcon = 'edit ms-2 me-0'
  }
  editTask(){
    if (this.editedTask){
      var result: any = this.tasksList.findIndex(item => item.label === this.taskName);
      this.tasksList[result].label = this.editedTask
      this.sendNewList()
    }
    this.editingMode()
  }

  sendNewList(){
    this.newItemEvent.emit(this.tasksList);
    console.log('Lo que manda el hijo: ')
    console.log(this.tasksList)
    this.editingMode()
  }
}
