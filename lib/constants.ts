export type ReportItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  status: 'Pending' | 'In Progress' | 'Resolved';
  urgency: 'Low' | 'Medium' | 'High' | 'Emergency';
};

export const reports: ReportItem[] = [
  {
    slug: 'hostel-water-leakage',
    image: '/images/report1.png',
    title: 'Water Leakage in Building',
    location: 'Male Hostel 1 (Jamaica)',
    status: 'Pending',
    urgency: 'High',
  },
  {
    slug: 'hostels-wifi-down',
    image: '/images/report2.png',
    title: 'Hostel WiFi Connectivity Issues',
    location: 'All Hostels - WiFi switched off',
    status: 'In Progress',
    urgency: 'Medium',
  },
  {
    slug: 'broken-lecture-chairs',
    image: '/images/report3.png',
    title: 'Broken Chairs in College',
    location: 'Sciences Auditorium',
    status: 'Pending',
    urgency: 'Low',
  },
  {
    slug: 'cafeteria-hygiene-concern',
    image: '/images/report4.png',
    title: 'Hygiene Concern at Central Cafeteria',
    location: 'Central Cafeteria',
    status: 'In Progress',
    urgency: 'Emergency',
  },
  {
    slug: 'street-light-malfunction',
    image: '/images/report5.png',
    title: 'Faulty Street Lights near Gate',
    location: 'Main University Gate',
    status: 'Resolved',
    urgency: 'Medium',
  },
  {
    slug: 'ac-failure-ict',
    image: '/images/report6.png',
    title: 'AC Failure in ICT Lab',
    location: 'ICT Center',
    status: 'Pending',
    urgency: 'High',
  },
  {
    slug: 'portal-login-error',
    image: '/images/report3.png',
    title: 'Student Portal Login Timeout',
    location: 'Online Services',
    status: 'In Progress',
    urgency: 'High',
  },
  {
    slug: 'overgrown-grass-sports',
    image: '/images/report4.png',
    title: 'Overgrown Grass on Soccer Pitch',
    location: 'Sports Complex',
    status: 'Resolved',
    urgency: 'Low',
  },
  {
    slug: 'security-light-hostel',
    image: '/images/report5.png',
    title: 'No Security Light at Female Hostel',
    location: 'Female Hostel Entrance',
    status: 'Pending',
    urgency: 'Emergency',
  },
  {
    slug: 'lab-equipment-missing',
    image: '/images/report1.png',
    title: 'Missing Chemical Reagents',
    location: 'Chemistry Lab 2',
    status: 'In Progress',
    urgency: 'Medium',
  },
  {
    slug: 'trash-overflow-dept',
    image: '/images/report2.png',
    title: 'Trash Overflow at Engineering',
    location: 'Engineering Complex',
    status: 'Pending',
    urgency: 'Low',
  },
  {
    slug: 'unauthorized-parking',
    image: '/images/report3.png',
    title: 'Blocked Access in Staff Parking',
    location: 'Faculty of Arts Parking',
    status: 'Resolved',
    urgency: 'Medium',
  },
];
