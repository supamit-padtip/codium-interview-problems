import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyTask3Dot6Component } from './easy-task3-dot6.component';

describe('EasyTask3Dot6Component', () => {
  let component: EasyTask3Dot6Component;
  let fixture: ComponentFixture<EasyTask3Dot6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasyTask3Dot6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyTask3Dot6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
