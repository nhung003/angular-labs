import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvDetailComponent } from './nv-detail.component';

describe('NvDetailComponent', () => {
  let component: NvDetailComponent;
  let fixture: ComponentFixture<NvDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NvDetailComponent]
    });
    fixture = TestBed.createComponent(NvDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
