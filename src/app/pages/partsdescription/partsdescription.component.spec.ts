import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsdescriptionComponent } from './partsdescription.component';

describe('PartsdescriptionComponent', () => {
  let component: PartsdescriptionComponent;
  let fixture: ComponentFixture<PartsdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartsdescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

export { PartsdescriptionComponent };