import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskService } from 'src/app/core/task.service';

@Component({
  selector: 'app-easy-task2',
  templateUrl: './easy-task2.component.html',
  styleUrls: ['./easy-task2.component.scss']
})
export class EasyTask2Component implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  answer: string = "";

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formGroup = this.fb.group({
      n: [0, [Validators.required, Validators.min(1)]],
    });
  }

  submit(): void {
    if(this.formGroup.valid){
      this.answer = this.taskService.easyTask2(this.formGroup.controls['n'].value);
    }else{
      alert("Please fill out the correct input.")
    }
  }
}
