import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuanDetailComponent } from './duan-detail.component';

describe('DuanDetailComponent', () => {
  let component: DuanDetailComponent;
  let fixture: ComponentFixture<DuanDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuanDetailComponent]
    });
    fixture = TestBed.createComponent(DuanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
