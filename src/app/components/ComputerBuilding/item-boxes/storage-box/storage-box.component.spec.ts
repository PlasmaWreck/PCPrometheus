import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageBoxComponent } from './storage-box.component';

describe('StorageBoxComponent', () => {
  let component: StorageBoxComponent;
  let fixture: ComponentFixture<StorageBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorageBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
