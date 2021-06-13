import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefferedLanguageComponent } from './preffered-language.component';

describe('PrefferedLanguageComponent', () => {
  let component: PrefferedLanguageComponent;
  let fixture: ComponentFixture<PrefferedLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrefferedLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefferedLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
