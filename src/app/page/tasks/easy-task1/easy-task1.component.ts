import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/core/task.service';

@Component({
  selector: 'app-easy-task1',
  templateUrl: './easy-task1.component.html',
  styleUrls: ['./easy-task1.component.scss']
})
export class EasyTask1Component implements OnInit {
  answer: string = "";

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.answer = this.taskService.easyTask1();
  }
}
