import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EasyTask1Component } from './page/tasks/easy-task1/easy-task1.component';
import { EasyTask2Component } from './page/tasks/easy-task2/easy-task2.component';
import { EasyTask3Dot1Component } from './page/tasks/easy-task3-dot1/easy-task3-dot1.component';
import { EasyTask3Dot2Component } from './page/tasks/easy-task3-dot2/easy-task3-dot2.component';
import { EasyTask3Dot3Component } from './page/tasks/easy-task3-dot3/easy-task3-dot3.component';
import { EasyTask3Dot4Component } from './page/tasks/easy-task3-dot4/easy-task3-dot4.component';
import { EasyTask3Dot5Component } from './page/tasks/easy-task3-dot5/easy-task3-dot5.component';
import { EasyTask3Dot6Component } from './page/tasks/easy-task3-dot6/easy-task3-dot6.component';
import { MediumTask1Component } from './page/tasks/medium-task1/medium-task1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EasyTask1Component,
    EasyTask2Component,
    EasyTask3Dot1Component,
    EasyTask3Dot2Component,
    EasyTask3Dot3Component,
    EasyTask3Dot4Component,
    EasyTask3Dot5Component,
    EasyTask3Dot6Component,
    MediumTask1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
