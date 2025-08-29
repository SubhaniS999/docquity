import { Component } from '@angular/core';

interface Webinar {
  id: number;
  sponsor: string;
  followers: number;
  timeAgo: string;
  title: string;
  credits: string;
  expiringIn?: string;
  highlights: string;
  likes: number;
  comments: number;
  views: number;
  imageUrl: string;
  isLive?: boolean;
  specialty?: string;
  topic?: string;
  speaker?: string;
  pharma?: string;
}

interface Filter {
  title: string;
  field: keyof Webinar;
  expanded: boolean;
  options: string[];
  selected: string[];
}

@Component({
  selector: 'app-webinars-you-may-like',
  templateUrl: './webinars-you-may-like.component.html',
  styleUrls: ['./webinars-you-may-like.component.scss']
})
export class WebinarsYouMayLikeComponent {
  // Track which tab is active: 'forYou' | 'live' | 'upcoming'
  activeTab: 'forYou' | 'live' | 'upcoming' = 'forYou';

  webinars: Webinar[] = [
    {
      id: 1,
      sponsor: 'PDGI Indonesia',
      followers: 2845,
      timeAgo: '50 min ago',
      title: 'Perspectives in The Covid19 Management of Parox Health caretine',
      credits: '1.5 Credits',
      expiringIn: 'Expiring in 23h 30m',
      highlights: 'Manage chronic and complex diseases',
      likes: 20,
      comments: 12,
      views: 750,
      imageUrl: '/assets/pre.jpeg',
      isLive: true,
      specialty: 'Allergy and Immunology',
      topic: 'Covid-19',
      speaker: 'Dr. Chong Wei',
      pharma: 'GSK'
    },
    {
      id: 2,
      sponsor: 'PDGI Indonesia',
      followers: 2845,
      timeAgo: '50 min ago',
      title: 'New Perspectives in The Covid19 Management of Parox Health caretine',
      credits: '2 Credits',
      highlights: 'Manage chronic and complex diseases',
      likes: 20,
      comments: 12,
      views: 750,
      imageUrl: '/assets/pre1.jpeg',
      specialty: 'Clinical Nutrition',
      topic: 'Asthma',
      speaker: 'Dr. Wuyama Gurang',
      pharma: 'Bayer'
    },
    {
      id: 3,
      sponsor: 'PDGI Indonesia',
      followers: 2845,
      timeAgo: '50 min ago',
      title: 'New Perspectives in The Covid19 Management of Parox Health caretine',
      credits: '2 Credits',
      expiringIn: 'Expiring in 12 days',
      highlights: 'Manage chronic and complex diseases',
      likes: 20,
      comments: 12,
      views: 750,
      imageUrl: '/assets/pre2.jpeg',
      specialty: 'General Practitioner',
      topic: 'Eczema',
      speaker: 'Dr. Shan Yu Sui An',
      pharma: 'PGDI Indonesia'
    },
    {
      id: 4,
      sponsor: 'PDGI Indonesia',
      followers: 2845,
      timeAgo: '50 min ago',
      title: 'The Covid19 Management of Parox Health caretine',
      credits: '3 Credits',
      highlights: 'Manage chronic and complex diseases',
      likes: 20,
      comments: 12,
      views: 750,
      imageUrl: '/assets/pre4.jpg',
      specialty: 'Acupuncture',
      topic: 'Vaccination',
      speaker: 'Dr. Wuyama Gurang',
      pharma: 'GSK'
    }
  ];

  filters: Filter[] = [
    {
      title: 'Specialty',
      field: 'specialty',
      expanded: true,
      options: ['Acupuncture', 'Allergy and Immunology', 'Anesthesiology', 'Clinical Nutrition', 'General Practitioner'],
      selected: []
    },
    {
      title: 'Topics',
      field: 'topic',
      expanded: false,
      options: ['Covid-19', 'Asthma', 'Eczema', 'Vaccination'],
      selected: []
    },
    {
      title: 'Speakers',
      field: 'speaker',
      expanded: false,
      options: ['Dr. Chong Wei', 'Dr. Wuyama Gurang', 'Dr. Shan Yu Sui An'],
      selected: []
    },
    {
      title: 'Pharma & associations',
      field: 'pharma',
      expanded: false,
      options: ['Bayer', 'GSK', 'PGDI Indonesia'],
      selected: []
    }
  ];

  // Combined filtered webinars getter with filters and activeTab logic
  get filteredWebinars(): Webinar[] {
    return this.webinars
      .filter(webinar => {
        return this.filters.every(filter => {
          const selected = filter.selected;
          const value = webinar[filter.field];
          return selected.length === 0 || selected.includes(String(value || ''));
        });
      })
      .filter(webinar => {
        if (this.activeTab === 'live') {
          return webinar.isLive;
        } else if (this.activeTab === 'upcoming') {
          return webinar.expiringIn !== undefined && !webinar.isLive;
        } else {
          return true; // forYou tab shows all filtered webinars
        }
      });
  }

  toggleSection(index: number): void {
    this.filters[index].expanded = !this.filters[index].expanded;
  }

  toggleOption(sectionIndex: number, option: string): void {
    const selected = this.filters[sectionIndex].selected;
    const i = selected.indexOf(option);
    if (i > -1) {
      selected.splice(i, 1);
    } else {
      selected.push(option);
    }
  }

  isChecked(sectionIndex: number, option: string): boolean {
    return this.filters[sectionIndex].selected.includes(option);
  }

  // Set active tab method to switch tabs
  setActiveTab(tab: 'forYou' | 'live' | 'upcoming'): void {
    this.activeTab = tab;
  }

  follow(sponsor: string) {
    alert(`Followed ${sponsor}`);
  }

  like(webinar: Webinar) {
    webinar.likes++;
  }

  comment(webinar: Webinar) {
    alert(`Comment on: ${webinar.title}`);
  }

  repost(webinar: Webinar) {
    alert(`Reposted: ${webinar.title}`);
  }

  share(webinar: Webinar) {
    alert(`Shared: ${webinar.title}`);
  }
}
