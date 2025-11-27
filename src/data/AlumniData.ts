import { StaticImageData } from "next/image";
import Arvind from "@/public/alumni/ArvindUpadhya.webp";
import Hammad from "@/public/alumni/HammadManjra.webp";
import Preksha from "@/public/alumni/PrekshaKaushik.webp";
import Rithika from "@/public/alumni/RithikaErumadi.webp";
import Saamir from "@/public/alumni/SaamirAppali.webp";
import Sabrina from "@/public/alumni/SabrinaYang.webp";
import Sai from "@/public/alumni/SaiBirla.webp";
import Tamanna from "@/public/alumni/TamannaDilip.webp";
import Tara from "@/public/alumni/TaraWu.webp";
import Tejas from "@/public/alumni/TejasLolge.webp";
import Varun from "@/public/alumni/VarunSrivastava.webp";

interface AlumniInfoProps {
  name: string;
  role: Uppercase<string>;
  image: StaticImageData;
  currentOccupation?: string;
  linkedin: string;
}

export const AlumniData: AlumniInfoProps[] = [
  {
    name: "Hammad Manjra",
    role: "FOUNDER & ADVISOR",
    image: Hammad,
    currentOccupation: "Analyst at BlackRock",
    linkedin: "https://www.linkedin.com/in/hammadmanjra/",
  },
  {
    name: "Varun Srivastava",
    role: "ADVISOR",
    image: Varun,
    currentOccupation: "M&A at Optum West",
    linkedin: "https://www.linkedin.com/in/varunsrivastava01/",
  },
  {
    name: "Sabrina Yang",
    role: "ADVISOR",
    image: Sabrina,
    currentOccupation: "Analyst at JP Morgan",
    linkedin: "https://www.linkedin.com/in/sabrina-z-yang/",
  },
  {
    name: "Saamir Appali",
    role: "ADVISOR",
    image: Saamir,
    currentOccupation: "Advisory Consultant at Deloitte",
    linkedin: "https://www.linkedin.com/in/saamirappali/",
  },
  {
    name: "Tamanna Dilip",
    role: "ADVISOR",
    image: Tamanna,
    currentOccupation: "Financial Markets Associate at PWC",
    linkedin: "https://www.linkedin.com/in/tamannadilip/",
  },
  {
    name: "Tejas Lolge",
    role: "ADVISOR",
    image: Tejas,
    currentOccupation: "Financial Advisor Trainee at UBS",
    linkedin: "https://www.linkedin.com/in/tejas-lolge-056841200/",
  },
  {
    name: "Preksha Kaushik",
    role: "ADVISOR",
    image: Preksha,
    currentOccupation: "Digital Sales Associate Manager at PepsiCo",
    linkedin: "https://www.linkedin.com/in/preksha-kaushik/",
  },
  {
    name: "Sai Birla",
    role: "ADVISOR",
    image: Sai,
    currentOccupation: "Technology Risk Consultant at EY",
    linkedin: "https://www.linkedin.com/in/saibirla/",
  },
  {
    name: "Tara Wu",
    role: "ADVISOR",
    image: Tara,
    currentOccupation: "Project Manager at Boeing",
    linkedin: "https://www.linkedin.com/in/tara-wu/",
  },
  {
    name: "Arvind Upadhya",
    role: "ADVISOR",
    image: Arvind,
    currentOccupation: "Sales Management Intern at PepsiCo",
    linkedin: "https://www.linkedin.com/in/arvind-upadhya-9614b621a/",
  },
  {
    name: "Rithika Erumadi",
    role: "ADVISOR",
    image: Rithika,
    currentOccupation: "Enterprise Development Representative at Verkada",
    linkedin: "https://www.linkedin.com/in/rithika-erumadi/",
  },
];
