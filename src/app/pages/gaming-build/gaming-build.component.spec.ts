import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingBuildComponent } from './gaming-build.component';

describe('GamingBuildComponent', () => {
  let component: GamingBuildComponent;
  let fixture: ComponentFixture<GamingBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamingBuildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamingBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
