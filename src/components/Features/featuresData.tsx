import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
   <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18 3L23 10L30 11L25 18L26 26L18 22L10 26L11 18L6 11L13 10L18 3Z" fill="white"/>
</svg>
    ),
    title: "Designing",
    paragraph: "Transform your business vision into impactful visuals with services like logo creation, 3D designs, animations, visa card designs, and social media graphics.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 2,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="24" height="24" fill="white"/>
      <line x1="6" y1="18" x2="30" y2="18" stroke="black" stroke-width="2"/>
    </svg>
    ),
    title: "Printing",
    paragraph: "High-quality printing services for all your needs, including visa cards, brochures, posters, and street labels.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 3,
    icon: (
<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 4H32V32H4V4Z" fill="white"/>
  <circle cx="18" cy="18" r="10" fill="black"/>
  <text x="13" y="21" font-size="10" fill="white">Ad</text>
</svg>
    ),
    title: "Advertisment",
    paragraph: "Comprehensive advertising solutions through street ads, local radio, TV spots, and effective online campaigns",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 4,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="10" width="20" height="15" fill="white" />
      <circle cx="18" cy="17.5" r="4" stroke="gray" stroke-width="2"/>
    </svg>
    ),
    title: "Photography Services",
    paragraph: "Capture excellence with product photography, professional photo sessions, and videography for all occasions.",
    btn: "Learn More",
    btnLink: "/#",
  }, {
    id: 5,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="10,10 26,18 10,26" fill="white"/>
    </svg>
    ),
    title: "Montag",
    paragraph: "Delivering top-notch video editing and reel creation services to bring your stories to life.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 6,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 14C9 10 12 6 18 6C24 6 27 10 27 14V26H22V14C22 12 20 10 18 10C16 10 14 12 14 14V26H9V14Z" fill="white"/>
    </svg>
    ),
    title: "Audio Services",
    paragraph: "Expert audio services such as dubbing to make your projects sound professional and polished.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 7,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="6" width="24" height="24" fill="white"/>
  <path d="M12 14L18 18L12 22" fill="none"/>
  <line x1="20" y1="14" x2="26" y2="14" stroke="black" stroke-width="2"/>
</svg>
    ),
    title: "Programming",
    paragraph: "Custom-made websites and app development tailored to your business goals and audience.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 8,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="12" width="24" height="12" fill="white" />
  <circle cx="10" cy="26" r="3" fill="white"/>
  <circle cx="26" cy="26" r="3" fill="white"/>
</svg>
    ),
    title: "Logistic Services",
    paragraph: "Efficient delivery and shipping services to ensure smooth business operations.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 9,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="13" r="5" fill="white" />
      <rect x="12" y="20" width="12" height="10" fill="white"/>
    </svg>
    ),
    title: "Hiring",
    paragraph: "Find the perfect talent for your business with our professional hiring services.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 10,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="5" fill="white"/>
      <circle cx="24" cy="14" r="6" fill="white"/>
      <path d="M8 20C8 18 10 16 12 16C14 16 16 18 16 20V24H8V20Z" fill="white"/>
      <path d="M20 22C20 19.5 22 18 24 18C26 18 28 19.5 28 22V26H20V22Z" fill="white"/>
    </svg>
    ),
    title: "Social Media Management",
    paragraph: "Expertly managing your social media presence to boost engagement, increase brand visibility, and connect with your target audience effectively.",
    btn: "Learn More",
    btnLink: "/#",
  },
];
export default featuresData;
