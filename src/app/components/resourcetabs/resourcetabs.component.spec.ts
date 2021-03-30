import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcetabsComponent } from './resourcetabs.component';

describe('ResourcetabsComponent', () => {
  let component: ResourcetabsComponent;
  let fixture: ComponentFixture<ResourcetabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcetabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcetabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
