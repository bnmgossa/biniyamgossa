import hammer from '../assets/images/projects/hamer.png';
import legal from '../assets/certificates/legal.jpg';
import udacity from '../assets/certificates/udacityprograming.png';
import udacityai from '../assets/certificates/udacityaifundamentals.png';

const getGoogleDriveId = (value) => {
  if (!value) return '';
  const match = value.match(/(?:\/d\/|id=)([a-zA-Z0-9_-]+)/);
  return match ? match[1] : value;
};

export const isGoogleDriveUrl = (value) => {
  if (!value) return false;
  return /(?:drive\.google\.com|docs\.google\.com)/i.test(String(value));
};

export const googleDriveImage = (fileIdOrUrl) => {
  const fileId = getGoogleDriveId(fileIdOrUrl);
  return fileId ? `https://drive.google.com/uc?export=view&id=${fileId}` : '';
};

export const googleDriveVideo = (fileIdOrUrl) => {
  const fileId = getGoogleDriveId(fileIdOrUrl);
  return fileId ? `https://drive.google.com/uc?export=download&id=${fileId}` : '';
};

export const googleDrivePreview = (fileIdOrUrl) => {
  const fileId = getGoogleDriveId(fileIdOrUrl);
  return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : '';
};

export const itProjects = [
  // {
  //   title: 'Hammer cars',
  //   category: 'it',
  //   description: 'HUEC Thesis project: A system for car showcase, rent, buy, sell, and mechanics.',
  //   tags: ['Login', 'SignUp', 'Search'],
  //   link: 'https://hammer-car.vercel.app/',
  //   image: hammer,
  //   video: googleDriveVideo('VIDEO_FILE_ID'),
  // },
  {
    title: 'Cisco Catalyst 2960 VLAN Lab',
    category: 'it',
    description: 'Hands-on Cisco switching lab covering VLAN configuration and switch management. The demo video shows the configuration process.',
    tags: ['Cisco IOS', 'VLANs', 'Switching', 'VTP'],
    link: "",
    image: '',
    video:  googleDriveVideo('https://drive.google.com/file/d/1pjoAniAvJbD6AQxx__6BYUJncN_n6x3t/view?usp=drivesdk'),
  },

  //  {
  //   title: 'Switch 2960 vlan config',
  //   category: 'it',
  //   description: 'Project documentation and technical details.',
  //   tags: ['IT', 'Documentation', 'Systems', 'switch'],
  //   link: "",
  //   image: '',
  //   video:  googleDriveVideo('https://drive.google.com/file/d/12LlydJRFeNzr-DKiBSmGfb-p-K2_iBE-/view?usp=drivesdk'),
  // },
  // Copy this object to add another IT project.
  // Use googleDriveImage('FILE_ID') and googleDriveVideo('FILE_ID') for Google Drive media.
  // {
  //   title: 'My IT Project',
  //   category: 'it',
  //   description: 'Short project description.',
  //   tags: ['Networking', 'Security'],
  //   link: 'https://example.com',
  //   image: googleDriveImage('GOOGLE_DRIVE_IMAGE_FILE_ID'),
  //   video: googleDriveVideo('GOOGLE_DRIVE_VIDEO_FILE_ID'),
  // },
];

export const certificateData = [
  {
    id: 'bsc',
    name: 'BSc Degree',
    sub: 'Hope Enterprise University College',
    color: 'border-orange-500/20 text-orange-500',
    img: legal,
    btn: 'text-white',
    links: [
      { label: 'Official Graduation Degree Certificate', type: 'image', target: legal },
    ],
  },
  {
    id: 'udacity',
    name: 'Nanodegrees',
    sub: 'Nanodegrees Specialized Tracks',
    color: 'border-cyan-500/20 text-cyan-400',
    img: udacity,
    btn: 'text-white',
    isCollection: true,
    subDegrees: [
      {
        title: 'Programming Fundamentals',
        links: [
          { label: 'Graduation Cert', type: 'image', target: udacity },
          { label: 'Verify Credential Hash ID', type: 'link', target: 'https://udacity.com/certificate/e/9a18a302-40a7-11f0-b0ae-9fd8a7dc9473' },
          { label: 'Core Syllabus Matrix', type: 'link', target: 'https://udacity.com/syllabus' },
        ],
      },
      {
        title: 'AI Fundamentals',
        links: [
          { label: 'AI Certificate', type: 'image', target: udacityai },
          { label: 'Project Registry: Portfolio Hub', type: 'link', target: 'https://udacity.com/certificate/e/9a18a302-40a7-11f0-b0ae-9fd8a7dc9473' },
        ],
      },
    ],
  },
  {
    id: 'infrastructure',
    name: 'QIYAS IT Infrastructure Training',
    sub: 'Skills for Jobs (EASE) Project · World Bank-supported',
    color: 'border-emerald-500/20 text-emerald-500',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85',
    btn: 'text-white',
    links: [
      {
        label: 'IT Infrastructure & System Support Training',
        type: 'image',
        target: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=90',
      },
    ],
  },
  // Copy this object to add another certificate.
  // Use googleDriveImage('FILE_ID') for the certificate image and link target.
  // {
  //   id: 'new-certificate',
  //   name: 'Certificate name',
  //   sub: 'School or platform',
  //   color: 'border-blue-500/20 text-blue-500',
  //   img: googleDriveImage('GOOGLE_DRIVE_IMAGE_FILE_ID'),
  //   btn: 'text-white',
  //   links: [
  //     { label: 'View certificate', type: 'image', target: googleDriveImage('GOOGLE_DRIVE_IMAGE_FILE_ID') },
  //   ],
  // },
];
