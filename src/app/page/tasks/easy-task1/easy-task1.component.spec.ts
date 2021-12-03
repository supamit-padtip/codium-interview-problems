import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyTask1Component } from './easy-task1.component';

describe('EasyTask1Component', () => {
  let component: EasyTask1Component;
  let fixture: ComponentFixture<EasyTask1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasyTask1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyTask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
