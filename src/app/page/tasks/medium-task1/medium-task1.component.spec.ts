import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumTask1Component } from './medium-task1.component';

describe('MediumTask1Component', () => {
  let component: MediumTask1Component;
  let fixture: ComponentFixture<MediumTask1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumTask1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumTask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
