import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseBoxComponent } from './case-box.component';

describe('CaseBoxComponent', () => {
  let component: CaseBoxComponent;
  let fixture: ComponentFixture<CaseBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
