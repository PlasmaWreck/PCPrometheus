import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherboardBoxComponent } from './motherboard-box.component';

describe('MotherboardBoxComponent', () => {
  let component: MotherboardBoxComponent;
  let fixture: ComponentFixture<MotherboardBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotherboardBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherboardBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
