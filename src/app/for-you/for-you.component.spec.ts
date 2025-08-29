import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForYouComponent } from './for-you.component';

describe('ForYouComponent', () => {
  let component: ForYouComponent;
  let fixture: ComponentFixture<ForYouComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForYouComponent]
    });
    fixture = TestBed.createComponent(ForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
