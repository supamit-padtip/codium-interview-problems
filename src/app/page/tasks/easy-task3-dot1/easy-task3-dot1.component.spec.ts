import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyTask3Dot1Component } from './easy-task3-dot1.component';

describe('EasyTask3Dot1Component', () => {
  let component: EasyTask3Dot1Component;
  let fixture: ComponentFixture<EasyTask3Dot1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasyTask3Dot1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyTask3Dot1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
