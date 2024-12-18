export type Project = {
  name: string;
  domains: string[];
  country: string;
  desc: string;
  year: number;
  image: string;
  playStore?: string;
  appStore?: string;
  isPersonalProject?: boolean;
};

const projects: Project[] = [
  {
    name: "Account & Expense Manager",
    domains: ["Finance"],
    country: "Worldwide",
    desc: "A smart solution which helps you to easily manage your day-to-day transactions.",
    year: 2022,
    image: "/images/projects/account-manager.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.itwaves.accountmanager",
    appStore:
      "https://apps.apple.com/us/app/account-expense-manager/id1596113242",
    isPersonalProject: true,
  },
  {
    name: "Geo Cam",
    domains: ["Photography"],
    country: "Worldwide",
    desc: "A smart solution which helps you to easily manage your day-to-day transactions.",
    year: 2024,
    image: "/images/projects/geo-cam.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.itwaves.accountmanager",
    appStore:
      "https://apps.apple.com/us/app/account-expense-manager/id1596113242",
    isPersonalProject: true,
  },
  {
    name: "Keep Links",
    domains: ["Utility"],
    country: "Worldwide",
    desc: "A smart solution which helps you to easily manage your day-to-day transactions.",
    year: 2024,
    image: "/images/projects/keep-links.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.itwaves.accountmanager",
    appStore:
      "https://apps.apple.com/us/app/account-expense-manager/id1596113242",
    isPersonalProject: true,
  },
  {
    name: "Melaleuca Shopping",
    domains: ["Utility"],
    country: "Worldwide",
    desc: "A smart solution which helps you to easily manage your day-to-day transactions.",
    year: 2023,
    image: "/images/projects/melaleuca.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.melaleuca.shopping",
    appStore:
      "https://apps.apple.com/us/app/account-expense-manager/id1596113242",
  },
  {
    name: "Baduli Music",
    domains: ["Utility"],
    country: "Worldwide",
    desc: "A smart solution which helps you to easily manage your day-to-day transactions.",
    year: 2024,
    image: "/images/projects/baduli.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.melaleuca.shopping",
    appStore:
      "https://apps.apple.com/us/app/account-expense-manager/id1596113242",
  },
  {
    name: "OZZI - Global Safety",
    domains: ["Utility"],
    country: "Worldwide",
    desc: "A smart solution which helps you to easily manage your day-to-day transactions.",
    year: 2024,
    image: "/images/projects/ozzi.png",
    playStore: "https://play.google.com/store/apps/details?id=com.ozzi.app",
    appStore:
      "https://apps.apple.com/us/app/account-expense-manager/id1596113242",
  },
  {
    name: "Callingly",
    domains: ["Utility"],
    country: "Kuwait",
    desc: "Feel free to explore sports events happening around you. Meet new players who are close to your level. Seek new challenges amongst your friends. Take on the I'M IN experience, Let's go!",
    year: 2022,
    image: "/images/projects/callingly.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.goinfoo.imin&hl=en_IN&gl=US",
    appStore: "https://apps.apple.com/in/app/im-in/id1562889443",
  },
  {
    name: "SML Lens",
    domains: ["Utility"],
    country: "Kuwait",
    desc: "Feel free to explore sports events happening around you. Meet new players who are close to your level. Seek new challenges amongst your friends. Take on the I'M IN experience, Let's go!",
    year: 2022,
    image: "/images/projects/sml-lens.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.goinfoo.imin&hl=en_IN&gl=US",
    appStore: "https://apps.apple.com/in/app/im-in/id1562889443",
  },
  {
    name: "SML Eboard Pro",
    domains: ["Utility"],
    country: "Kuwait",
    desc: "Feel free to explore sports events happening around you. Meet new players who are close to your level. Seek new challenges amongst your friends. Take on the I'M IN experience, Let's go!",
    year: 2024,
    image: "/images/projects/sml-eboard.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.goinfoo.imin&hl=en_IN&gl=US",
    appStore: "https://apps.apple.com/in/app/im-in/id1562889443",
  },
  {
    name: "SML Vahaan Suraksha",
    domains: ["Utility"],
    country: "Kuwait",
    desc: "Feel free to explore sports events happening around you. Meet new players who are close to your level. Seek new challenges amongst your friends. Take on the I'M IN experience, Let's go!",
    year: 2024,
    image: "/images/projects/sml-logistics.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.goinfoo.imin&hl=en_IN&gl=US",
    appStore: "https://apps.apple.com/in/app/im-in/id1562889443",
  },
  {
    name: "I'M IN",
    domains: ["Sports"],
    country: "Kuwait",
    desc: "Feel free to explore sports events happening around you. Meet new players who are close to your level. Seek new challenges amongst your friends. Take on the I'M IN experience, Let's go!",
    year: 2023,
    image: "/images/projects/imin.jpg",
    playStore:
      "https://play.google.com/store/apps/details?id=com.goinfoo.imin&hl=en_IN&gl=US",
    appStore: "https://apps.apple.com/in/app/im-in/id1562889443",
  },
  {
    name: "Community Voice",
    domains: ["Communication", "Social", "Networking"],
    country: "USA",
    desc: "Connecting Communities Through Communication!",
    year: 2022,
    image:
      "https://play-lh.googleusercontent.com/XKywzFiE2mbEe2QmhM_2A1SPRwLvQhzeOjzd6VEcnYRP2xVYc5qseAmo3ctXxG8NBzA=w1052-h592-rw",
    playStore:
      "https://play.google.com/store/apps/details?id=com.communityvoice.app",
    appStore: "https://apps.apple.com/us/app/community-voice/id1622145253",
  },
  {
    name: "The Cancer App",
    desc: "The Cancer App has been designed to help you stay in control of your care, appointments, medications, contacts, and relevant expert information specific to your cancer.",
    country: "Worldwide",
    domains: ["Healthcare"],
    year: 2021,
    image: "/images/projects/screw-cancer.webp",
    playStore:
      "https://play.google.com/store/apps/details?id=com.screwcancer.app&hl=en_IN&gl=US",
    appStore: "https://apps.apple.com/in/app/the-cancer-app/id1450257601",
  },
  {
    name: "Ando Rider",
    desc: "Rider app for Kenya based Food & Beverage delivery company.",
    domains: ["Food & Beverage", "Maps & Navigation"],
    country: "Kenya",
    year: 2023,
    image: "/images/projects/ando-foods.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.andofoods.rider",
  },
  {
    name: "People Asset",
    desc: "The PeopleAsset app offers thought-provoking knowledge on leadership, business strategy, workplace organization, and human resources.",
    domains: ["Business"],
    country: "India",
    year: 2023,
    image:
      "https://is4-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/2f/6a/8e/2f6a8e1c-8eb7-f811-65b2-f35c5070fdb1/e3271a90-630f-487a-98f5-4d1e5e5638a6_IMG_1586_NEW.jpg/460x0w.webp",
    playStore:
      "https://play.google.com/store/apps/details?id=com.peopleasset&hl=en_IN&gl=US",
    appStore: "https://apps.apple.com/in/app/peopleasset/id1545833242",
  },
  {
    name: "Salonista - Salon Booking App",
    desc: "Professional beauty salon appointment booking and scheduler app",
    domains: ["Food & Beverage"],
    country: "UAE",
    year: 2020,
    image: "/images/projects/salonista.webp",
    playStore:
      "https://play.google.com/store/apps/details?id=com.salonista.android",
    appStore:
      "https://apps.apple.com/us/app/salonista-salon-booking-app/id1521804032",
  },
  {
    name: "eQWe",
    domains: ["Food & Beverage"],
    country: "Worldwide",
    desc: "Find the ideal meeting point for you and your friends!",
    year: 2020,
    image: "/images/projects/eqwe.webp",
    playStore:
      "https://play.google.com/store/apps/details?id=com.perfectlocation.eqwe",
    appStore: "https://apps.apple.com/in/app/eqwe/id1527450909",
  },
];

export default projects;
