import Icon1 from "@/assets/icon1.svg";
import Icon2 from "@/assets/icon2.svg";
import Icon3 from "@/assets/icon3.svg";
import Icon4 from "@/assets/icon4.svg";

import ServiceImg1 from "@/assets/service-img1.png";
import ServiceImg2 from "@/assets/service-img2.png";
import ServiceImg3 from "@/assets/service-img3.png";

import GalleryImg1 from "@/assets/gallery-img1.jpeg";
import GalleryImg2 from "@/assets/gallery-img2.jpeg";
import GalleryImg3 from "@/assets/gallery-img3.jpeg";
import GalleryImg4 from "@/assets/gallery-img4.jpeg";
import GalleryImg5 from "@/assets/gallery-img5.jpeg";
import GalleryImg6 from "@/assets/gallery-img6.jpeg";

import ProfileImg1 from "@/assets/profile-img1.png";
import ProfileImg2 from "@/assets/profile-img2.png";
import ProfileImg3 from "@/assets/profile-img3.png";

export const STATS_DATA = [
  { iconUrl: Icon1, count: "1M+", label: "Sqft Area Constructed" },
  { iconUrl: Icon2, count: "180", label: "Sqft Area Constructed" },
  { iconUrl: Icon3, count: "25", label: "Years of Experience" },
  { iconUrl: Icon4, count: "151", label: "Trained Professionals" },
];

export const SERVICES = [
  {
    imgUrl: ServiceImg1,
    title: "Pre-Construction",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. \n\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.`,
  },
  {
    imgUrl: ServiceImg2,
    title: "General Constracting",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. \n\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.`,
  },
  {
    imgUrl: ServiceImg3,
    title: "Design Build",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. \n\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.`,
  },
];

export const GALLERY_IMGS = [
  { id: "01", imgUrl: GalleryImg1 },
  { id: "02", imgUrl: GalleryImg2 },
  { id: "03", imgUrl: GalleryImg3 },
  { id: "04", imgUrl: GalleryImg4 },
  { id: "05", imgUrl: GalleryImg5 },
  { id: "06", imgUrl: GalleryImg6 },
];

export const TESTIMONIALS = [
  {
    id: "01",
    imgUrl: ProfileImg1,
    name: "John Snow",
    review: "It was a great experience",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.`,
  },
  {
    id: "02",
    imgUrl: ProfileImg2,
    name: "Mike Williams",
    review: "Incredible journey. Highly recommend!",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.`,
  },
  {
    id: "03",
    imgUrl: ProfileImg3,
    name: "Dustin",
    review: "Truly great. Exceeded expectations",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.`,
  },
];
