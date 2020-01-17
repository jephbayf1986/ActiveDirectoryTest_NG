import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOnlyApiComponent } from './admin-only-api.component';

describe('AdminOnlyApiComponent', () => {
  let component: AdminOnlyApiComponent;
  let fixture: ComponentFixture<AdminOnlyApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOnlyApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOnlyApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
