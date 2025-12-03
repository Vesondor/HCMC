export const TRIP_DETAILS = {
  title: "Ho Chi Minh City Adventure",
  dates: "Dec 9 - Dec 11, 2025",
  travelers: 3,
  budget: {
    hotel: {
      name: "Hotel",
      pricePerNight: 40,
      nights: 2,
      total: 80,
    },
    transport: {
      name: "Bus Virak Buntham",
      pricePerPerson: 70,
      people: 3,
      total: 210,
    },
    total: 290,
  },
};

export const LOCATIONS = [
  {
    id: 1,
    name: "Ben Thanh Market",
    description:
      "One of the oldest landmarks in Saigon. A bustling market selling everything from local handicrafts and textiles to fresh produce and street food.",
    image: "/images-places/BenThanhMarket.jpeg",
    googleMaps: "https://maps.app.goo.gl/564afWcGUe4k6J2y9",
    bestTime: "Morning (Shopping) or Night (Food)",
    tips: "Be prepared to bargain! The night market outside is great for dinner.",
  },
  {
    id: 2,
    name: "War Remnants Museum",
    description:
      "A powerful and moving museum documenting the Vietnam War. Contains exhibits relating to the war and the first Indochina War.",
    image: "/images-places/WarRemnantsMuseum.jpg",
    googleMaps: "https://maps.app.goo.gl/bdPgNuUjtgGfdg1r7",
    bestTime: "Afternoon (1 PM - 4 PM)",
    tips: "Open 7:30 AM - 5:30 PM. Ticket: 40,000 VND.",
  },
  {
    id: 3,
    name: "Independence Palace",
    description:
      "Also known as the Reunification Palace, this historic building was the home and workplace of the President of South Vietnam during the Vietnam War.",
    image: "/images-places/IndependencePalace.png",
    googleMaps: "https://maps.app.goo.gl/example",
    bestTime: "Morning",
    tips: "Visit the underground bunker and command center.",
  },
  {
    id: 4,
    name: "Saigon Central Post Office",
    description:
      "A stunning example of French colonial architecture, designed by Gustave Eiffel. It is still a functioning post office.",
    image: "/images-places/SaigonCentralPostOffice.webp",
    googleMaps: "https://maps.app.goo.gl/example",
    bestTime: "Morning",
    tips: "Send a postcard to yourself or friends from here!",
  },
  {
    id: 5,
    name: "Notre Dame Cathedral Basilica",
    description:
      "A magnificent neo-Romanesque cathedral built by French colonists. Known for its twin bell towers and red brick facade.",
    image: "/images-places/NotreDameCathedralBasilica.jpg",
    googleMaps: "https://maps.app.goo.gl/example",
    bestTime: "Morning (for photos)",
    tips: "Currently under renovation, but the exterior is still impressive.",
  },
  {
    id: 6,
    name: "Bitexco Financial Tower",
    description:
      "One of the tallest buildings in the city, featuring the Saigon Skydeck for 360-degree views.",
    image: "/images-places/BitexcoFinancialTower.jpg",
    googleMaps: "https://maps.app.goo.gl/example",
    bestTime: "Sunset",
    tips: "Visit the Skydeck for a fee or grab a drink at the bar on the 52nd floor.",
  },
  {
    id: 8,
    name: "Jade Emperor Pagoda",
    description:
      "A spectacular Taoist temple filled with statues of divinities and grotesque heroes. The air is thick with incense smoke.",
    image: "/images-places/JadeEmperorPagoda.jpg",
    googleMaps: "https://maps.app.goo.gl/example",
    bestTime: "Morning",
    tips: "Dress modestly when visiting temples.",
  },
  {
    id: 9,
    name: "Nguyen Hue Walking Street",
    description:
      "A vibrant pedestrian promenade in the heart of District 1. Best visited in the evening when it comes alive with street performers.",
    image: "/images-places/NguyenHue.jpg",
    googleMaps: "https://maps.app.goo.gl/yYq2Bw9kpSPF84kL8",
    bestTime: "Evening (after 6 PM)",
    tips: "Great for photos of the City Hall and people watching.",
  },
];

export const FOOD = [
  {
    id: 1,
    name: "Kiều Bảo Barbecue Rice Noodles",
    vietnameseName: "Bún Thịt Nướng Kiều Bảo",
    description:
      "Famous for its affordable and delicious grilled pork noodles. Generous portions with free vegetables and extra noodles.",
    image: "/images-food/KiềuBảoBarbecueRiceNoodles.jpg",
    googleMaps: "https://maps.app.goo.gl/2AXMfQvkAHpmZyun8",
    price: "$",
    mustTry: "Bun Thit Nuong (Grilled Pork Noodles)",
  },
  {
    id: 2,
    name: "Banh Mi Huynh Hoa",
    vietnameseName: "Bánh Mì Huỳnh Hoa",
    description:
      "The most famous Banh Mi in Saigon, known for being incredibly packed with meat and pate. A heavy, satisfying meal.",
    image: "/images-food/BanhMiHuynhHoa.jpg",
    googleMaps: "https://maps.app.goo.gl/example",
    price: "$$",
    mustTry: "Banh Mi Dac Biet (Special)",
  },
  {
    id: 3,
    name: "Pho Hoa Pasteur",
    vietnameseName: "Phở Hòa Pasteur",
    description:
      "One of the oldest and most respected Pho restaurants in the city. Offers a classic southern-style Pho experience.",
    image: "/images-food/PhoHoaPasteur.jpeg",
    googleMaps: "https://maps.app.goo.gl/example",
    price: "$$",
    mustTry: "Pho Tai Nam (Rare & Flank Beef)",
  },
  {
    id: 4,
    name: "The Cafe Apartment",
    vietnameseName: "Chung Cư Cà Phê",
    description:
      "An iconic 9-story apartment building turned into a hub of cafes and boutiques. Great for photos and people watching.",
    image: "/images-food/TheCafeApartment.jpg",
    googleMaps: "https://maps.app.goo.gl/example",
    price: "$$",
    mustTry: "Coconut Coffee",
  },
  {
    id: 5,
    name: "Com Tam Ba Ghien",
    vietnameseName: "Cơm Tấm Ba Ghiền",
    description:
      "Legendary broken rice spot known for its massive grilled pork chops that cover the entire plate.",
    image: "/images-food/ComTamBaGhien.webp",
    googleMaps: "https://maps.app.goo.gl/example",
    price: "$$",
    mustTry: "Suon Bi Cha (Pork Chop, Skin, Egg Loaf)",
  },
  {
    id: 7,
    name: "Banh Xeo 46A",
    vietnameseName: "Bánh Xèo 46A",
    description:
      "Famous for its crispy Vietnamese savory pancakes filled with pork, shrimp, and bean sprouts.",
    image: "/images-food/BanhXeo46A.jpeg",
    googleMaps: "https://maps.app.goo.gl/example",
    price: "$$",
    mustTry: "Banh Xeo (Vietnamese Pancake)",
  },
  {
    id: 20,
    name: "Little HaNoi Egg Coffee",
    vietnameseName: "Little HaNoi",
    description:
      "A cozy cafe serving the famous Egg Coffee, a must-try Vietnamese specialty.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop",
    googleMaps: "https://maps.app.goo.gl/example",
    price: "$$",
    mustTry: "Egg Coffee",
  },
];

export const ITINERARY = [
  {
    day: "Day 1",
    date: "Dec 9",
    activities: [
      {
        time: "04:50 AM",
        title: "Departure",
        description: "Depart from Phnom Penh via Virak Buntham Bus.",
        icon: "Bus",
      },
      {
        time: "01:00 PM",
        title: "Arrival & Check-in",
        description: "Arrive in HCMC. Drop bags at hotel and freshen up.",
        icon: "MapPin",
      },
      {
        time: "02:00 PM",
        title: "Lunch: Kiều Bảo",
        description: "Try the famous Bun Thit Nuong.",
        icon: "Utensils",
      },
      {
        time: "03:30 PM",
        title: "War Remnants Museum",
        description: "Explore the history of Vietnam.",
        icon: "Museum",
      },
      {
        time: "06:00 PM",
        title: "Nguyen Hue Walking Street",
        description: "Evening walk and street food.",
        icon: "MapPin",
      },
    ],
  },
  {
    day: "Day 2",
    date: "Dec 10",
    activities: [
      {
        time: "08:00 AM",
        title: "Hospital Visit",
        description: "Morning routine visit.",
        icon: "Hospital",
      },
      {
        time: "10:00 AM",
        title: "Ben Thanh Market",
        description: "Shopping and exploring local goods.",
        icon: "ShoppingBag",
      },
      {
        time: "12:30 PM",
        title: "Lunch: Banh Mi Huynh Hoa",
        description: "Grab the famous heavy Banh Mi.",
        icon: "Utensils",
      },
      {
        time: "03:00 PM",
        title: "Saigon Riverside Park",
        description: "Relax by the river.",
        icon: "Tree",
      },
      {
        time: "06:00 PM",
        title: "Dinner & Cafe Apartment",
        description: "Explore the cafe block and have dinner.",
        icon: "Coffee",
      },
    ],
  },
  {
    day: "Day 3",
    date: "Dec 11",
    activities: [
      {
        time: "08:00 AM",
        title: "Hospital Visit",
        description: "Final morning visit.",
        icon: "Hospital",
      },
      {
        time: "10:00 AM",
        title: "Last Minute Shopping",
        description: "Souvenirs at local shops.",
        icon: "ShoppingBag",
      },
      {
        time: "12:00 PM",
        title: "Lunch: Pho Hoa",
        description: "Farewell Pho.",
        icon: "Utensils",
      },
      {
        time: "02:00 PM",
        title: "Departure",
        description: "Bus back to Phnom Penh.",
        icon: "Bus",
      },
    ],
  },
];
