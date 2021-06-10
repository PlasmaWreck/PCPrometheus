import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpSysBoxComponent } from './op-sys-box.component';

describe('OpSysBoxComponent', () => {
  let component: OpSysBoxComponent;
  let fixture: ComponentFixture<OpSysBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpSysBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpSysBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
