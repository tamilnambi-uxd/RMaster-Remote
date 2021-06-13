import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStudioComponent } from './my-studio.component';

describe('MyStudioComponent', () => {
  let component: MyStudioComponent;
  let fixture: ComponentFixture<MyStudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
