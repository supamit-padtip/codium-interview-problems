import { TaskService } from './../../core/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listMenu = [
    {
      categoryName: "Easy", menu: [
        { name: "Task 1", path: "/easytask1" },
        { name: "Task 2", path: "/easytask2" },
        { name: "Task 3.1", path: "/easytask3.1" },
        { name: "Task 3.2", path: "/easytask3.2" },
        { name: "Task 3.3", path: "/easytask3.3" },
        { name: "Task 3.4", path: "/easytask3.4" },
        { name: "Task 3.5", path: "/easytask3.5" },
        { name: "Task 3.6", path: "/easytask3.6" },
      ]
    },
    {
      categoryName: "Medium", menu: [
        { name: "Task 1", path: "/mediumtask1" },
      ]
    }
  ]
  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
  }
}
