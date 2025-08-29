import { Component } from '@angular/core';

@Component({
  selector: 'app-for-you',
  templateUrl: './for-you.component.html',
  styleUrls: ['./for-you.component.scss']
})
export class ForYouComponent {
  activeTab: string = 'forYou';

  posts = [
    {
      id: 1,
      profileName: 'PDGI Indonesia',
      sponsoredBy: 'Roche',
      followers: 2845,
      timeAgo: '30 min ago',
      liveViewers: 800,
      duration: '24:50',
      credits: 1.5,
      expiring: '23h 30m',
      title: 'Perspectives in The Covid19 Management of Parox Health caretine',
      highlights: 'Manage chronic and complex diseases',
      likes: 20,
      comments: 12,
      views: 750,
      image: 'assets/manage.jpg'
    },
    {
      id: 2,
      profileName: 'Webinar Pro',
      sponsoredBy: 'Pfizer',
      followers: 1200,
      timeAgo: '1 hour ago',
      liveViewers: 500,
      duration: '30:10',
      credits: 2,
      expiring: '12h',
      title: 'Breakthroughs in Clinical Pharmacology',
      highlights: 'Updates from latest clinical trials',
      likes: 35,
      comments: 18,
      views: 890,
      image: 'assets/manage.jpg'
    },
    {
      id: 3,
      profileName: 'Dentistry Today',
      sponsoredBy: 'OralCare',
      followers: 980,
      timeAgo: '2 hours ago',
      liveViewers: 300,
      duration: '18:20',
      credits: 1,
      expiring: '2d',
      title: 'Best Practices in Pediatric Dentistry',
      highlights: 'Focus on child dental care',
      likes: 42,
      comments: 20,
      views: 1050,
      image: 'assets/manage.jpg'
    },
    {
      id: 4,
      profileName: 'Nutrition Network',
      sponsoredBy: 'Nestle Health',
      followers: 1500,
      timeAgo: '3 hours ago',
      liveViewers: 600,
      duration: '22:40',
      credits: 1.8,
      expiring: '8h',
      title: 'Nutrition and Immunity: Building Strong Defenses',
      highlights: 'Evidence-based dietary insights',
      likes: 60,
      comments: 25,
      views: 1300,
      image: 'assets/manage.jpg'
    }
  ];
  liveWebinars = [
    {
      id: 1,
      profileName: 'Manage chronic and complex diseases',
      sponsoredBy: 'by PDGI Indonesia',
      followers: 1500,
      timeAgo: '3 hours ago',
      liveViewers: 600,
      duration: '24:50',
      credits: '2 Credits',
      expiring: '8h',
      title: 'Controversies in Bipolar 1 Disorder (Ep-1)',
      highlights: 'Evidence-based dietary insights',
      likes: 60,
      comments: 25,
      views: '200+',
      image: 'assets/bipolar.jpg'
    },
    {
      id: 2,
      profileName: 'Manage chronic and complex diseases',
      sponsoredBy: 'by GSK',
      followers: 1500,
      timeAgo: '3 hours ago',
      liveViewers: 600,
      duration: '24:50',
      credits: '1.5 Credits (Expiring in 23h 30m)',
      expiring: '8h',
      title: 'Controversies in Bipolar 1 Disorder (Ep-1)',
      highlights: 'Evidence-based dietary insights',
      likes: 60,
      comments: 25,
      views: '200+',
      image: 'assets/virus.jpg'
    },
    {
      id: 3,
      profileName: 'Manage chronic and complex diseases',
      sponsoredBy: 'by Bayer',
      followers: 1500,
      timeAgo: '3 hours ago',
      liveViewers: 600,
      duration: '24:50',
      credits: '2 Credits',
      expiring: '8h',
      title: 'Virus is like any other respiratory virus',
      highlights: 'Evidence-based dietary insights',
      likes: 60,
      comments: 25,
      views: '200+',
      image: 'assets/manage.jpg'
    }
  ];
    upcomingWebinars = [
    {
      id: 1,
      profileName: 'Manage chronic and complex diseases',
      sponsoredBy: 'by PDGI Indonesia',
      followers: 1500,
      timeAgo: '3 hours ago',
      liveViewers: 600,
      duration: '24:50',
      credits: '1.5 Credits (Expiring in 2d)',
      expiring: '8h',
      title: 'Asthma from Pediatric Allergy Perspective',
      highlights: 'Manage chronic and complex diseases',
      likes: 60,
      comments: 25,
      views: '200+',
      image: 'assets/Astama.jpeg'
    },
    {
      id: 2,
      profileName: 'Manage chronic and complex diseases',
      sponsoredBy: 'by PDGI Indonesia',
      followers: 1500,
      timeAgo: '3 hours ago',
      liveViewers: 600,
      duration: '24:50',
      credits: '2 Credits',
      expiring: '8h',
      title: '101 Hal tentang PPDS Bedah Umum',
      highlights: 'Manage chronic and complex diseases',
      likes: 60,
      comments: 25,
      views: '200+',
      image: 'assets/tentang.jpg'
    },
    {
      id: 3,
      profileName: 'Manage chronic and complex diseases',
      sponsoredBy: 'by PDGI Indonesia',
      followers: 1500,
      timeAgo: '3 hours ago',
      liveViewers: 600,
      duration: '24:50',
      credits: '2 Credits',
      expiring: '8h',
      title: 'The Covid19 Management of Parox Health',
      highlights: 'Manage chronic and complex diseases',
      likes: 60,
      comments: 25,
      views: '200+',
      image: 'assets/covid.png'
      
    }
  ];
}
