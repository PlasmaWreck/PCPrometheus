import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoEditingBuildComponent } from './video-editing-build.component';

describe('VideoEditingBuildComponent', () => {
  let component: VideoEditingBuildComponent;
  let fixture: ComponentFixture<VideoEditingBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoEditingBuildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoEditingBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
