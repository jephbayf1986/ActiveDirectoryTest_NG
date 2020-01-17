import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwearWordsComponent } from './swear-words.component';

describe('SwearWordsComponent', () => {
  let component: SwearWordsComponent;
  let fixture: ComponentFixture<SwearWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwearWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwearWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
