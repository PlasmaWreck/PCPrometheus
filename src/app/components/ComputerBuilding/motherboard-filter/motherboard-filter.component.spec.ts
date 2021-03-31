import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherboardFilterComponent } from './motherboard-filter.component';

describe('MotherboardFilterComponent', () => {
  let component: MotherboardFilterComponent;
  let fixture: ComponentFixture<MotherboardFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotherboardFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherboardFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
