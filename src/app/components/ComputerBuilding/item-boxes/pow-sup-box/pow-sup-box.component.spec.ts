import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowSupBoxComponent } from './pow-sup-box.component';

describe('PowSupBoxComponent', () => {
  let component: PowSupBoxComponent;
  let fixture: ComponentFixture<PowSupBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowSupBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowSupBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
