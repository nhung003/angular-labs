import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangkyComponent } from './dangky.component';

describe('DangkyComponent', () => {
  let component: DangkyComponent;
  let fixture: ComponentFixture<DangkyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DangkyComponent]
    });
    fixture = TestBed.createComponent(DangkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
