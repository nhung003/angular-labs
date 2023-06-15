import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDatailComponent } from './task-datail.component';

describe('TaskDatailComponent', () => {
  let component: TaskDatailComponent;
  let fixture: ComponentFixture<TaskDatailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskDatailComponent]
    });
    fixture = TestBed.createComponent(TaskDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
