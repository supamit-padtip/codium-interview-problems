import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyTask3Dot3Component } from './easy-task3-dot3.component';

describe('EasyTask3Dot3Component', () => {
  let component: EasyTask3Dot3Component;
  let fixture: ComponentFixture<EasyTask3Dot3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasyTask3Dot3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyTask3Dot3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
