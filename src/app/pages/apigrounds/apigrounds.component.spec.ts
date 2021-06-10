import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApigroundsComponent } from './apigrounds.component';

describe('ApigroundsComponent', () => {
  let component: ApigroundsComponent;
  let fixture: ComponentFixture<ApigroundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApigroundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApigroundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
