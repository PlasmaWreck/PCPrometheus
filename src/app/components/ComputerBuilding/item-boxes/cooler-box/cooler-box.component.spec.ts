import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolerBoxComponent } from './cooler-box.component';

describe('CoolerBoxComponent', () => {
  let component: CoolerBoxComponent;
  let fixture: ComponentFixture<CoolerBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoolerBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
