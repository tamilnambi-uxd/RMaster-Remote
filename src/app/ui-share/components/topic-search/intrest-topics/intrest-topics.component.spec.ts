import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrestTopicsComponent } from './intrest-topics.component';

describe('IntrestTopicsComponent', () => {
  let component: IntrestTopicsComponent;
  let fixture: ComponentFixture<IntrestTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrestTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrestTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
