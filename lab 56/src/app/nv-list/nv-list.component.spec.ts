import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvListComponent } from './nv-list.component';

describe('NvListComponent', () => {
  let component: NvListComponent;
  let fixture: ComponentFixture<NvListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NvListComponent]
    });
    fixture = TestBed.createComponent(NvListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
