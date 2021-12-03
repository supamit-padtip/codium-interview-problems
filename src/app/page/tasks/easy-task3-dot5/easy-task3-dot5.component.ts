import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskService } from 'src/app/core/task.service';

@Component({
  selector: 'app-easy-task3-dot5',
  templateUrl: './easy-task3-dot5.component.html',
  styleUrls: ['./easy-task3-dot5.component.scss']
})
export class EasyTask3Dot5Component implements OnInit {
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
      this.answer = this.taskService.easyTask3Dot5(this.formGroup.controls['n'].value);
    }else{
      alert("Please fill out the correct input.")
    }
  }
}
