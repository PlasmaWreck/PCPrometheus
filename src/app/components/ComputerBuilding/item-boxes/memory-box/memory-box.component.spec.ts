import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryBoxComponent } from './memory-box.component';

describe('MemoryBoxComponent', () => {
  let component: MemoryBoxComponent;
  let fixture: ComponentFixture<MemoryBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
