import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HollowBtnComponent } from './hollow-btn.component';

describe('HollowBtnComponent', () => {
  let component: HollowBtnComponent;
  let fixture: ComponentFixture<HollowBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HollowBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HollowBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
