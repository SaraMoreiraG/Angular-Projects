import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TaskInterface } from '../../interfaces/task-interface';
import { TaskService } from '../../services/task.service'


@Component({
  selector: 'task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent {

  task: TaskInterface = {
    label: "",
    done: false
  }
  taskName = ''

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    this.taskName = String(this.route.snapshot.paramMap.get('label'));
  }

  goBack() {
    this.location.back();
  }

  switch_expression = 'p'
  edit = false;
  groupTitle = "";
}
