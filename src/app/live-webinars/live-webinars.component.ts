import { Component } from '@angular/core';

@Component({
  selector: 'app-live-webinars',
  templateUrl: './live-webinars.component.html',
  styleUrls: ['./live-webinars.component.scss']
})
export class LiveWebinarsComponent {
  liveWebinars = [
    {
      image: 'assets/bipolar.jpg',
      title: 'Controversies in Bipolar 1 Disorder (Ep-1)',
      by: 'by PDGI Indonesia',
      viewers: '200+',
      duration: '24:50',
      credits: '2 Credits',
      topic: 'Manage chronic and complex diseases'
    },
    {
      image: 'assets/virus.jpg',
      title: 'Virus is like any other respiratory virus',
      by: 'by GSK',
      viewers: '200+',
      duration: '24:50',
      credits: '1.5 Credits (Expiring in 23h 30m)',
      topic: 'Manage chronic and complex diseases'
    },
    {
      image: 'assets/manage.jpg',
      title: 'Virus is like any other respiratory virus',
      by: 'by Bayer',
      viewers: '200+',
      duration: '24:50',
      credits: '2 Credits',
      topic: 'Manage chronic and complex diseases'
    }
  ];
}
