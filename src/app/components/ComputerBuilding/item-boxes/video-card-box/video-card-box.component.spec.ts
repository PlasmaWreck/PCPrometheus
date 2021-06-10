import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCardBoxComponent } from './video-card-box.component';

describe('VideoCardBoxComponent', () => {
  let component: VideoCardBoxComponent;
  let fixture: ComponentFixture<VideoCardBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCardBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCardBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
