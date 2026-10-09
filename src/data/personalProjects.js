import the100 from "../assets/images/projects/100.jpg";
import free from "../assets/images/projects/freetv.jpg";
import locked from "../assets/images/projects/locked.jpg";
import cof from "../assets/images/projects/coffee.jpg";
import we from "../assets/images/projects/weather.jpg";

export const personalProjects = [
  {
    title: "B Movie",
    category: "frontend",
    description: "A movie discovery interface built to help users browse and search for films.",
    tags: ["React", "Tailwind CSS", "Vite"],
    link: "https://b-moviee.vercel.app/",
    image: the100,
  },
  {
    title: "E-Live",
    category: "frontend",
    description: "A streaming-style interface that brings live television channels together in one place.",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    link: "https://e-live-one.vercel.app/",
    image: free,
  },
  {
    title: "Sports & Premium UI",
    category: "frontend",
    description: "A sports-focused streaming interface concept; this project is still in development.",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    link: "https://ae-live.vercel.app/",
    image: locked,
  },
  {
    title: "B Coffee",
    category: "frontend",
    description: "A coffee shop web concept focused on a clean, product-led browsing experience.",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    link: "https://b-coffee.vercel.app/",
    image: cof,
  },
  {
    title: "Weather App",
    category: "frontend",
    description: "A weather-focused interface for looking up conditions by location.",
    tags: ["React", "Search UI", "Responsive Design"],
    link: "https://b-w.vercel.app/",
    image: we,
  },
];
