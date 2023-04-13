import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TrafficLightComponent } from './components/traffic-light/traffic-light.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { DemosComponent } from './views/demos/demos.component';
import { CodeComponent } from './views/code/code.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { TaskDetailsComponent } from './components/todo-list/components/task-details/task-details.component';
import { TaskComponent } from './components/todo-list/components/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    TrafficLightComponent,
    NavBarComponent,
    FooterComponent,
    BannerComponent,
    DemosComponent,
    CodeComponent,
    TodoListComponent,
    ButtonsComponent,
    SignInComponent,
    LogInComponent,
    TaskDetailsComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
