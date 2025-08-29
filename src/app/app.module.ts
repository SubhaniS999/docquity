import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebinarComponent } from './webinar/webinar.component';
import { LiveWebinarsComponent } from './live-webinars/live-webinars.component';
import { UpcomingWebinarsComponent } from './upcoming-webinars/upcoming-webinars.component';
import { WebinarsYouMayLikeComponent } from './webinars-you-may-like/webinars-you-may-like.component';
import { ForYouComponent } from './for-you/for-you.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WebinarComponent,
    LiveWebinarsComponent,
    UpcomingWebinarsComponent,
    WebinarsYouMayLikeComponent,
    ForYouComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
