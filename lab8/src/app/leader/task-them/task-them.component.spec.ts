import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskThemComponent } from './task-them.component';

describe('TaskThemComponent', () => {
  let component: TaskThemComponent;
  let fixture: ComponentFixture<TaskThemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskThemComponent]
    });
    fixture = TestBed.createComponent(TaskThemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
