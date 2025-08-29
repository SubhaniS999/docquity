import { Component } from '@angular/core';

@Component({
  selector: 'app-upcoming-webinars',
  templateUrl: './upcoming-webinars.component.html',
  styleUrls: ['./upcoming-webinars.component.scss']
})
export class UpcomingWebinarsComponent {
  upcomingWebinars = [
    {
      image: 'assets/Astama.jpeg',
      title: 'Asthma from Pediatric Allergy Perspective',
      by: 'by PDGI Indonesia',
      credits: '1.5 Credits (Expiring in 2d)',
      topic: 'Manage chronic and complex diseases',
      date: '7 Jan 2026, 12:30 PM'
    },
    {
      image: 'assets/tentang.jpg',
      title: '101 Hal tentang PPDS Bedah Umum',
      by: 'by PDGI Indonesia',
      credits: '2 Credits',
      topic: 'Manage chronic and complex diseases',
      date: '7 Jan 2026, 12:30 PM'
    },
    {
      image: 'assets/covid.png',
      title: 'The Covid19 Management of Parox Health',
      by: 'by PDGI Indonesia',
      credits: '2 Credits',
      topic: 'Manage chronic and complex diseases',
      date: '7 Jan 2026, 12:30 PM'
    }
  ];

  continueWatching = [
    {
      image: 'assets/images.jpeg',
      title: 'New Perspectives in The Covid19 Management',
      by: 'by Pfizer Indonesia',
      duration: '24:50',
      progress: '10 min left'
    },
    {
      image: 'assets/co.jpeg',
      title: 'Perspectives in The Covid19 Management',
      by: 'by Bayer',
      duration: '24:50',
      progress: '10 min left'
    },
    {
      image: 'assets/12.jpg',
      title: 'New Perspectives in The 12',
      by: 'by Bayer',
      duration: '24:50',
      progress: '10 min left'
    }
  ];

   categoryTitle = 'webinars based on Cardiology';

  webinars = [
    {
      image: 'assets/pulmonory.jpg',
      title: 'Pulmonary hypertension in perspective',
      by: 'by AstraZeneca',
      credits: '1.5 Credits',
      duration: '24:50'
    },
    {
      image: 'assets/heart.jpg',
      title: 'Pathophysiology of CHF and Clinical Manifestation',
      by: 'by PDGI Indonesia',
      credits: '2 Credits',
      duration: '24:50'
    },
    {
      image: 'assets/ACS.jpg',
      title: 'Evidence-based management of ACS patients',
      by: 'by AstraZeneca',
      credits: '1.5 Credits',
      duration: '24:50'
    }
  ];

  speakers = [
    {
      image: 'assets/Doctor.jpeg',
      name: 'Dr. Chong Wui',
      designation: 'Gastrologist,General Physician'
    },
    {
      image: 'assets/Doctor.jpeg',
      name: 'Dr. Wuyama Guramg',
      designation: 'Gastrologist,General Physician'
    },
    {
      image: 'assets/Doctor.jpeg',
      name: 'Dr. Wuyama Guramg',
      designation: 'Gastrologist,General Physician'
    },
    {
      image: 'assets/Doctor.jpeg',
      name: 'Dr. Wuyama Guramg',
      designation: 'Gastrologist,General Physician'
    },
    {
      image: 'assets/Doctor.jpeg',
      name: 'Dr. Wuyama Guramg',
      designation: 'Gastrologist,General Physician'
    }
  ];


  topics: string[] = [
    'Cardiology(4)',
    'Neurology(5)',
    'Oncology(3)',
    'Pediatrics(2)',
    'Endocrinology(7)',
    'Pulmonology(8)',
    'Gastroenterology(5)',
    'Dermatology(4)',
    'Emergency(2)',
    'General Medicine(9)',
    
  ];

  selectedTopic: string | null = null;

  selectTopic(topic: string) {
    this.selectedTopic = topic;
    // Here you could emit event or filter webinars by this topic
  }
}
