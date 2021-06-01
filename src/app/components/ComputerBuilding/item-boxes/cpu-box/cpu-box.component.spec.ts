import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuBoxComponent } from './cpu-box.component';

describe('CpuBoxComponent', () => {
  let component: CpuBoxComponent;
  let fixture: ComponentFixture<CpuBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpuBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
