import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyTask3Dot5Component } from './easy-task3-dot5.component';

describe('EasyTask3Dot5Component', () => {
  let component: EasyTask3Dot5Component;
  let fixture: ComponentFixture<EasyTask3Dot5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasyTask3Dot5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyTask3Dot5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
