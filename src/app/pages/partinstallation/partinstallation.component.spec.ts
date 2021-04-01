import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartinstallationComponent } from './partinstallation.component';

describe('PartinstallationComponent', () => {
  let component: PartinstallationComponent;
  let fixture: ComponentFixture<PartinstallationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartinstallationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartinstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
