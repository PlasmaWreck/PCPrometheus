import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptDriveBoxComponent } from './opt-drive-box.component';

describe('OptDriveBoxComponent', () => {
  let component: OptDriveBoxComponent;
  let fixture: ComponentFixture<OptDriveBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptDriveBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptDriveBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
