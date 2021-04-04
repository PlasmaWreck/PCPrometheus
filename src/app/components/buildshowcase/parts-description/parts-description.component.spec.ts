import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsDescriptionComponent } from './parts-description.component';

describe('PartsDescriptionComponent', () => {
  let component: PartsDescriptionComponent;
  let fixture: ComponentFixture<PartsDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartsDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
