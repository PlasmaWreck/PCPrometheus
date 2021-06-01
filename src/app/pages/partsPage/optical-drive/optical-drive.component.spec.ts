import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpticalDriveComponent } from './optical-drive.component';

describe('OpticalDriveComponent', () => {
  let component: OpticalDriveComponent;
  let fixture: ComponentFixture<OpticalDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpticalDriveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpticalDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
