import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/core/task.service';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})
export class Task1Component implements OnInit {
  answer: string = "";

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.answer = this.taskService.easyTask1();
    // this.answer = this.taskService.easyTask3Dot1(5);
    console.log(this.answer)
  }

}
