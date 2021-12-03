import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyTask3Dot4Component } from './easy-task3-dot4.component';

describe('EasyTask3Dot4Component', () => {
  let component: EasyTask3Dot4Component;
  let fixture: ComponentFixture<EasyTask3Dot4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasyTask3Dot4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyTask3Dot4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
