import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarsYouMayLikeComponent } from './webinars-you-may-like.component';

describe('WebinarsYouMayLikeComponent', () => {
  let component: WebinarsYouMayLikeComponent;
  let fixture: ComponentFixture<WebinarsYouMayLikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebinarsYouMayLikeComponent]
    });
    fixture = TestBed.createComponent(WebinarsYouMayLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
