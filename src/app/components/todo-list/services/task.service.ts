import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TaskInterface } from '../interfaces/task-interface';
import { TASKS } from '../data/mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  urlData = 'https://assets.breatheco.de/apis/fake/todos/user/sara_moreira';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getToDoList(): Observable<TaskInterface[]> {
    return this.httpClient.get<TaskInterface[]>(this.urlData)
  }
  getToDoByLabel(label: string): Observable<TaskInterface> {

    return this.httpClient.get<TaskInterface>(`${this.urlData}/${label}`)
  }
  postTask(task: any) {
    return this.httpClient.put(this.urlData, task, this.httpOptions)
  }
}
