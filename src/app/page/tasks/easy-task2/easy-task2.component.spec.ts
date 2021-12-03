import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyTask2Component } from './easy-task2.component';

describe('EasyTask2Component', () => {
  let component: EasyTask2Component;
  let fixture: ComponentFixture<EasyTask2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasyTask2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyTask2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
