const events = [
    {
      title: "Tech Innovators Conference",
      date_of_event: "2024-01-15",
      organizer_name: "TechWorld Events",
      event_time: "10:00 AM - 4:00 PM",
      category: "Technology",
      mode: "Hybrid",
      venue: "TechHub Center, San Francisco",
      city: "San Francisco",
      country: "USA",
      event_description: "A gathering of leading innovators to discuss emerging technologies and trends shaping the future.",
      eligibility: "Open to all tech enthusiasts and professionals.",
      participant_count: 200,
      ticket_price: 49.99,
      event_pic: "https://example.com/images/tech_innovators.jpg",
      caption: "Empowering the Future of Tech!"
    },
    {
      title: "Yoga for Beginners Workshop",
      date_of_event: "2024-02-10",
      organizer_name: "Wellness Together",
      event_time: "8:00 AM - 12:00 PM",
      category: "Health & Wellness",
      mode: "In-Person",
      venue: "Downtown Community Center, New York",
      city: "New York",
      country: "USA",
      event_description: "Learn the basics of yoga in a calm and welcoming environment. Perfect for beginners!",
      eligibility: "Anyone aged 16 and above.",
      participant_count: 50,
      ticket_price: 25.0,
      event_pic: "https://example.com/images/yoga_workshop.jpg",
      caption: "Find Your Zen."
    },
    {
      title: "AI & Machine Learning Summit",
      date_of_event: "2024-03-05",
      organizer_name: "AI Global Network",
      event_time: "9:00 AM - 5:00 PM",
      category: "Education",
      mode: "Online",
      venue: "Virtual Event",
      city: "Online",
      country: "Global",
      event_description: "Dive deep into the world of AI and ML with talks from leading experts and interactive workshops.",
      eligibility: "Open to students, professionals, and enthusiasts with a passion for AI.",
      participant_count: 500,
      ticket_price: 0.0,
      event_pic: "https://example.com/images/ai_summit.jpg",
      caption: "The Future of AI Starts Here!"
    },
    {
      title: "Art & Craft Fair",
      date_of_event: "2024-04-12",
      organizer_name: "Creative Minds",
      event_time: "11:00 AM - 6:00 PM",
      category: "Arts",
      mode: "In-Person",
      venue: "Arts District, Los Angeles",
      city: "Los Angeles",
      country: "USA",
      event_description: "A colorful showcase of art and crafts by local artists and creators. Explore and purchase unique pieces.",
      eligibility: "Open to all.",
      participant_count: 300,
      ticket_price: 15.0,
      event_pic: "https://example.com/images/art_craft_fair.jpg",
      caption: "Celebrate Creativity and Talent."
    },
    {
      title: "Startup Pitch Night",
      date_of_event: "2024-05-20",
      organizer_name: "Entrepreneurs United",
      event_time: "6:00 PM - 9:00 PM",
      category: "Business",
      mode: "In-Person",
      venue: "Innovation Hub, Seattle",
      city: "Seattle",
      country: "USA",
      event_description: "An evening for startups to pitch their ideas to investors and gain valuable feedback.",
      eligibility: "Startups in early or growth stages.",
      participant_count: 100,
      ticket_price: 20.0,
      event_pic: "https://example.com/images/startup_pitch.jpg",
      caption: "Your Big Idea, Our Platform."
    },
    {
      title: "International Art Exhibition",
      date_of_event: "2024-06-15",
      organizer_name: "Global Art Society",
      event_time: "9:00 AM - 5:00 PM",
      category: "Arts",
      mode: "In-Person",
      venue: "Gallery of Modern Art, Paris",
      city: "Paris",
      country: "France",
      event_description: "Showcasing contemporary art from around the world, featuring over 100 artists.",
      eligibility: "Open to art lovers and collectors.",
      participant_count: 1000,
      ticket_price: 35.0,
      event_pic: "https://example.com/images/art_exhibition.jpg",
      caption: "A Journey Through Art."
    },
    {
      title: "Digital Marketing Workshop",
      date_of_event: "2024-07-02",
      organizer_name: "Marketing Masters",
      event_time: "10:00 AM - 4:00 PM",
      category: "Marketing",
      mode: "Hybrid",
      venue: "Online & London Convention Center",
      city: "London",
      country: "UK",
      event_description: "Learn the latest digital marketing strategies from industry leaders and experts.",
      eligibility: "Open to marketers, business owners, and entrepreneurs.",
      participant_count: 250,
      ticket_price: 150.0,
      event_pic: "https://example.com/images/marketing_workshop.jpg",
      caption: "Elevate Your Marketing Skills."
    },
    {
      title: "Global Health Summit",
      date_of_event: "2024-08-19",
      organizer_name: "Health Network",
      event_time: "9:00 AM - 3:00 PM",
      category: "Health & Wellness",
      mode: "In-Person",
      venue: "Birmingham Convention Center, UK",
      city: "Birmingham",
      country: "UK",
      event_description: "A global summit featuring keynote speakers from leading health organizations.",
      eligibility: "Health professionals and policy makers.",
      participant_count: 400,
      ticket_price: 100.0,
      event_pic: "https://example.com/images/health_summit.jpg",
      caption: "Transforming Global Health."
    },
    {
      title: "Blockchain for Business",
      date_of_event: "2024-09-01",
      organizer_name: "Tech Innovators",
      event_time: "10:00 AM - 5:00 PM",
      category: "Technology",
      mode: "Online",
      venue: "Virtual Event",
      city: "Global",
      country: "Global",
      event_description: "Learn how blockchain can revolutionize business operations and transactions.",
      eligibility: "Business owners, tech professionals, and students.",
      participant_count: 300,
      ticket_price: 25.0,
      event_pic: "https://example.com/images/blockchain_business.jpg",
      caption: "Unlock the Power of Blockchain."
    },
    {
      title: "Entrepreneurship Bootcamp",
      date_of_event: "2024-10-10",
      organizer_name: "Startup Boosters",
      event_time: "9:00 AM - 6:00 PM",
      category: "Business",
      mode: "In-Person",
      venue: "Tech Park, Berlin",
      city: "Berlin",
      country: "Germany",
      event_description: "A full-day intensive bootcamp to boost your startup ideas and entrepreneurial skills.",
      eligibility: "Entrepreneurs and aspiring startup owners.",
      participant_count: 150,
      ticket_price: 100.0,
      event_pic: "https://example.com/images/entrepreneurship_bootcamp.jpg",
      caption: "Turning Ideas Into Action."
    },
    {
      title: "Cooking Masterclass with Michelin Chefs",
      date_of_event: "2024-11-03",
      organizer_name: "Gourmet Cuisine",
      event_time: "2:00 PM - 6:00 PM",
      category: "Lifestyle",
      mode: "In-Person",
      venue: "Five-Star Hotel, Milan",
      city: "Milan",
      country: "Italy",
      event_description: "Join world-renowned chefs for an afternoon of fine cooking techniques.",
      eligibility: "Open to all food enthusiasts.",
      participant_count: 50,
      ticket_price: 200.0,
      event_pic: "https://example.com/images/cooking_masterclass.jpg",
      caption: "Experience the Art of Cooking."
    },
    {
      title: "Jazz Music Festival",
      date_of_event: "2024-12-12",
      organizer_name: "Music Lovers Society",
      event_time: "6:00 PM - 11:00 PM",
      category: "Music",
      mode: "In-Person",
      venue: "Music Hall, New Orleans",
      city: "New Orleans",
      country: "USA",
      event_description: "An evening of live jazz performances from top international musicians.",
      eligibility: "Open to all music lovers.",
      participant_count: 500,
      ticket_price: 45.0,
      event_pic: "https://example.com/images/jazz_festival.jpg",
      caption: "A Night of Smooth Jazz."
    },
    {
      title: "Sustainable Living Expo",
      date_of_event: "2024-11-25",
      organizer_name: "Green Future Foundation",
      event_time: "9:00 AM - 5:00 PM",
      category: "Environment",
      mode: "In-Person",
      venue: "Eco-Center, Sydney",
      city: "Sydney",
      country: "Australia",
      event_description: "Discover sustainable living solutions through innovative products and eco-friendly practices.",
      eligibility: "Open to environmentally conscious individuals.",
      participant_count: 300,
      ticket_price: 20.0,
      event_pic: "https://example.com/images/sustainable_expo.jpg",
      caption: "Towards a Greener Future."
    },
    {
      title: "Women in Business Forum",
      date_of_event: "2024-12-01",
      organizer_name: "Empower Women",
      event_time: "10:00 AM - 3:00 PM",
      category: "Business",
      mode: "In-Person",
      venue: "Global Business Center, Toronto",
      city: "Toronto",
      country: "Canada",
      event_description: "A forum to discuss the challenges and opportunities for women in business and leadership roles.",
      eligibility: "Open to women entrepreneurs, professionals, and leaders.",
      participant_count: 200,
      ticket_price: 75.0,
      event_pic: "https://example.com/images/women_in_business.jpg",
      caption: "Empowering Women Entrepreneurs."
    },
    // Continue expanding this list up to 100 events by following the same structure...
  ];
  
  export default events;
  