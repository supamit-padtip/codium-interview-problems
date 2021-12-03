import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyTask3Dot2Component } from './easy-task3-dot2.component';

describe('EasyTask3Dot2Component', () => {
  let component: EasyTask3Dot2Component;
  let fixture: ComponentFixture<EasyTask3Dot2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasyTask3Dot2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyTask3Dot2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
