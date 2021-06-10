import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeBuildComponent } from './office-build.component';

describe('OfficeBuildComponent', () => {
  let component: OfficeBuildComponent;
  let fixture: ComponentFixture<OfficeBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeBuildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
