import { MediumTask1Component } from './page/tasks/medium-task1/medium-task1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { EasyTask1Component } from './page/tasks/easy-task1/easy-task1.component';
import { EasyTask2Component } from './page/tasks/easy-task2/easy-task2.component';
import { EasyTask3Dot1Component } from './page/tasks/easy-task3-dot1/easy-task3-dot1.component';
import { EasyTask3Dot2Component } from './page/tasks/easy-task3-dot2/easy-task3-dot2.component';
import { EasyTask3Dot3Component } from './page/tasks/easy-task3-dot3/easy-task3-dot3.component';
import { EasyTask3Dot4Component } from './page/tasks/easy-task3-dot4/easy-task3-dot4.component';
import { EasyTask3Dot5Component } from './page/tasks/easy-task3-dot5/easy-task3-dot5.component';
import { EasyTask3Dot6Component } from './page/tasks/easy-task3-dot6/easy-task3-dot6.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'easytask1',
        component: EasyTask1Component,
      },
      {
        path: 'easytask2',
        component: EasyTask2Component,
      },
      {
        path: 'easytask3.1',
        component: EasyTask3Dot1Component,
      },
      {
        path: 'easytask3.2',
        component: EasyTask3Dot2Component,
      },
      {
        path: 'easytask3.3',
        component: EasyTask3Dot3Component,
      },
      {
        path: 'easytask3.4',
        component: EasyTask3Dot4Component,
      },
      {
        path: 'easytask3.5',
        component: EasyTask3Dot5Component,
      },
      {
        path: 'easytask3.6',
        component: EasyTask3Dot6Component,
      },
      {
        path: 'mediumtask1',
        component: MediumTask1Component,
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
