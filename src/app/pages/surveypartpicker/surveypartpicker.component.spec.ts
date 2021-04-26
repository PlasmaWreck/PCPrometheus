import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveypartpickerComponent } from './surveypartpicker.component';

describe('SurveypartpickerComponent', () => {
  let component: SurveypartpickerComponent;
  let fixture: ComponentFixture<SurveypartpickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveypartpickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveypartpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
