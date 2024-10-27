import dish1 from "../assets/dish1.jpeg";
import dish2 from "../assets/dish2.jpeg";
import dish3 from "../assets/dish3.jpeg";
import dish4 from "../assets/dish4.jpeg";
import dish5 from "../assets/dish5.jpeg";
import dish6 from "../assets/dish6.jpeg";
import dish7 from "../assets/dish7.jpeg";
import dish8 from "../assets/dish8.jpeg";
import dish9 from "../assets/dish9.jpeg";
import dish10 from "../assets/dish10.jpeg";
import dish11 from "../assets/dish11.jpg";

import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";
import indian from "../assets/indian.jpeg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
 
  { text: "Home", targetId: "/" },
  { text: "About", targetId: "/about" },
  { text: "Dishes", targetId: "/dishes" },
  { text: "Expertise", targetId: "/expertise" },
  { text: "Drinks", targetId: "/drink" },

  { text: "Review", targetId: "/review" },
  { text: "Gallary", targetId: "/Gallary" },
  { text: "Contact", targetId: "/contact" },
 
];





export const DISHES = [
  { image: dish1, title: 'Spaghetti Carbonara', description: 'Creamy pasta with bacon and cheese', category: 'Non-Veg', price: '$12.99', rating: 4.5 },
  { image: dish2, title: 'Chicken Tikka Masala', description: 'Indian curry with tender chicken in spicy sauce', category: 'Indian', price: '$14.99', rating: 4.7 },
  { image: dish3, title: 'Caprese Salad', description: 'Fresh tomatoes, mozzarella, and basil with balsamic glaze', category: 'Veg', price: '$9.99', rating: 4.2 },
  { image: dish4, title: 'Sushi Roll', description: 'Assorted seafood and vegetables wrapped in seaweed and rice', category: 'Seafood', price: '$16.99', rating: 4.8 },
  { image: dish5, title: 'Chocolate Lava Cake', description: 'Decadent chocolate cake with a gooey center', category: 'Dessert', price: '$7.99', rating: 4.6 },
  { image: dish6, title: 'Greek Salad', description: 'Crisp lettuce, olives, feta cheese, and tangy dressing', category: 'Veg', price: '$8.99', rating: 4.1 },
  { image: dish7, title: 'Pad Thai', description: 'Stir-fried rice noodles with shrimp, tofu, and peanuts', category: 'Seafood', price: '$13.99', rating: 4.4 },
  { image: dish8, title: 'Peking Duck', description: 'Crispy duck with pancakes, cucumber, and hoisin sauce', category: 'Non-Veg', price: '$22.99', rating: 4.9 },
  { image: dish9, title: 'Beef Wellington', description: 'Tender beef filet wrapped in pastry with mushrooms and herbs', category: 'Non-Veg', price: '$27.99', rating: 4.9 },
  { image: dish10, title: 'Tiramisu', description: 'Italian dessert with layers of coffee-soaked biscuits and mascarpone', category: 'Dessert', price: '$8.49', rating: 4.3 },
  { image: dish1, title: 'Vegetable Biryani', description: 'Fragrant rice with mixed vegetables and spices', category: 'Indian', price: '$11.99', rating: 4.5 },
  { image: dish2, title: 'Grilled Salmon', description: 'Salmon fillet with a lemon garlic glaze', category: 'Seafood', price: '$18.99', rating: 4.8 },
  { image: dish3, title: 'Mango Lassi', description: 'Refreshing yogurt-based mango drink', category: 'Beverages', price: '$4.99', rating: 4.6 },
  { image: dish4, title: 'Falafel Wrap', description: 'Crispy falafel in pita bread with tahini sauce', category: 'Veg', price: '$7.49', rating: 4.3 },
  { image: dish5, title: 'Lamb Shawarma', description: 'Slow-roasted lamb with garlic sauce and vegetables', category: 'Non-Veg', price: '$12.49', rating: 4.7 },
  { image: dish6, title: 'Caesar Salad', description: 'Romaine lettuce with croutons and Caesar dressing', category: 'Veg', price: '$8.49', rating: 4.2 },
  { image: dish7, title: 'Fish Tacos', description: 'Grilled fish with fresh salsa and guacamole in tortillas', category: 'Seafood', price: '$10.99', rating: 4.5 },
  { image: dish8, title: 'Butter Chicken', description: 'Creamy tomato-based curry with tender chicken', category: 'Indian', price: '$14.99', rating: 4.8 },
  { image: dish9, title: 'Pav Bhaji', description: 'Spiced mashed vegetables served with buttered bread', category: 'Indian', price: '$6.99', rating: 4.4 },
  { image: dish10, title: 'French Onion Soup', description: 'Rich beef broth topped with cheese and croutons', category: 'Veg', price: '$9.49', rating: 4.1 },
  { image: dish1, title: 'Mojito', description: 'Classic Cuban cocktail with mint, lime, and rum', category: 'Beverages', price: '$6.99', rating: 4.7 },
  { image: dish2, title: 'Cheeseburger', description: 'Grilled beef patty with cheese, lettuce, and tomato', category: 'Non-Veg', price: '$11.49', rating: 4.4 },
  { image: dish3, title: 'Hummus & Pita', description: 'Creamy hummus served with warm pita bread', category: 'Veg', price: '$5.99', rating: 4.3 },
  { image: dish4, title: 'Grilled Shrimp Skewers', description: 'Marinated shrimp grilled to perfection', category: 'Seafood', price: '$14.99', rating: 4.6 },
  { image: dish5, title: 'Paneer Butter Masala', description: 'Soft paneer in a creamy tomato gravy', category: 'Indian', price: '$12.99', rating: 4.7 },
  { image: dish6, title: 'Eggplant Parmesan', description: 'Baked eggplant slices with marinara sauce and cheese', category: 'Veg', price: '$11.99', rating: 4.2 },
  { image: dish7, title: 'Pasta Alfredo', description: 'Pasta with creamy Alfredo sauce', category: 'Veg', price: '$13.49', rating: 4.3 },
  { image: dish8, title: 'Tom Yum Soup', description: 'Hot and sour Thai soup with shrimp and lemongrass', category: 'Seafood', price: '$10.49', rating: 4.4 },
  { image: dish9, title: 'Green Smoothie', description: 'Healthy blend of spinach, kale, and fruit', category: 'Beverages', price: '$6.49', rating: 4.5 },
  { image: dish10, title: 'Pulled Pork Sandwich', description: 'Slow-cooked pork with barbecue sauce in a bun', category: 'Non-Veg', price: '$10.99', rating: 4.6 },
];




export const ABOUT = {
  header: "We love cooking!",
  content:
    "At Restaura, we believe that great food goes beyond taste; it tells a story of dedication and creativity. From our chef's signature creations to our attentive service, every detail is curated to ensure your visit is nothing short of exceptional. Whether you're savoring our renowned Tikka Kebab or exploring our diverse menu inspired by global flavors, each dish is a celebration of flavor and innovation. Join us for a culinary journey where every bite leaves a lasting impression. Experience Restaura—where every meal is a masterpiece.",
};

export const MISSION =
  "At our restaurant, our mission is to create delicious and memorable dining experiences.";

export const CUSINES = [
  {
    number: "01.",
    image: italian,
    title: "Italian",
    description:
      "Experience the flavors of Italy with our exquisite Italian cuisine, featuring traditional recipes and contemporary dishes.",
  },
  {
    number: "02.",
    image: japanese,
    title: "Japanese",
    description:
      "Delight in the art of Japanese culinary excellence, offering a fusion of classic and modern flavors.",
  },
  {
    number: "03.",
    image: indian,
    title: "Indian",
    description:
      "Indulge in the rich and diverse tastes of India, with a menu that celebrates the country's culinary heritage.",
  },
];

export const SlideLeft2 = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        delay: delay,
      },
    },
  };
};

export const SlideUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: -100,
     
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};




export const REVIEW = {
  name: "Xaviour Fernando",
  profession: "Food Critic",
  content:
    "“As a seasoned food critic, my expectations are always high when stepping into a new dining establishment. Restaura, with its unassuming exterior and elegantly designed interior, promised a unique culinary experience from the moment I walked in. And I must say, it delivered beyond my expectations.”",
};

export const CONTACT = [
  { key: "address", value: "Address: 123 Main Street, Paris, France, 345678" },
  { key: "phone", value: "Phone: 123-456-7890" },
  { key: "email", value: "Email: contact@restaurant.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];


export const TestimonialsData = [
  {
    id: 1,
    name: "John Doe",
    position: "Food Inspector",
    text: "The food was absolutely amazing! The flavors were so authentic, and the service was top-notch. Definitely coming back again soon!",
    img: "https://picsum.photos/101/101",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Steve Smith",
    position: "Food Blogger",
    text: "I've been to many restaurants, but this one stood out. The ambiance was cozy, and the staff made us feel right at home. Highly recommend!",
    img: "https://picsum.photos/102/102",
    delay: 0.5,
  },
  {
    id: 3,
    name: "Kristen",
    position: "Food Critic",
    text: "An unforgettable dining experience! The variety of dishes was incredible, and everything was cooked to perfection. Can't wait to visit again.",
    img: "https://picsum.photos/104/104",
    delay: 0.8,
  },
  {
    id: 4,
    name: "Ariana",
    position: "Chef",
    text: "The best meal I’ve had in a long time! The chef’s special was delightful, and the desserts were heavenly. Worth every penny!",
    img: "https://picsum.photos/109/109",
    delay: 1.1,
  },
  {
    id: 5,
    name: "Mia Thompson",
    position: "Food Vlogger",
    text: "From start to finish, the experience was perfect. The food was fresh, beautifully presented, and full of flavor. Definitely one of my favorite spots now!",
    img: "https://picsum.photos/107/107",
    delay: 1.1,
  },
  {
    id: 6,
    name: "James Lee",
    position: "Restaurant Manager",
    text: "A gem in the city! The staff was incredibly friendly, and the dishes were mouth-watering. I loved the unique fusion of flavors in every bite.",
    img: "https://picsum.photos/106/106",
    delay: 1.1,
  },
  {
    id: 7,
    name: "Sophia Wright",
    position: "Culinary Expert",
    text: "The restaurant had a great vibe, and the food was simply delicious! The seafood platter was especially good. Will definitely return with friends!",
    img: "https://picsum.photos/105/105",
    delay: 1.1,
  },
];
