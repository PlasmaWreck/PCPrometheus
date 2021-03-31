import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecbuildComponent } from './recbuild.component';

describe('RecbuildComponent', () => {
  let component: RecbuildComponent;
  let fixture: ComponentFixture<RecbuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecbuildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecbuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
