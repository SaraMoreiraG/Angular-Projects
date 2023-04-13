import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemosComponent } from './views/demos/demos.component';
import { CodeComponent } from './views/code/code.component';
import { TaskDetailsComponent } from './components/todo-list/components/task-details/task-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/demos', pathMatch: 'full' },
  { path: 'demos', component: DemosComponent },
  { path: 'code', component: CodeComponent },
  { path: 'taskDetail/:label', component: TaskDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
