import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveWebinarsComponent } from './live-webinars.component';

describe('LiveWebinarsComponent', () => {
  let component: LiveWebinarsComponent;
  let fixture: ComponentFixture<LiveWebinarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveWebinarsComponent]
    });
    fixture = TestBed.createComponent(LiveWebinarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
