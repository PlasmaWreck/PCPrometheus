import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerBuildingComponent } from './computer-building.component';

describe('ComputerBuildingComponent', () => {
  let component: ComputerBuildingComponent;
  let fixture: ComponentFixture<ComputerBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputerBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
