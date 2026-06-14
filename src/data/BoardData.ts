// board data here
import { StaticImageData } from "next/image";

import MilanImg from "@/public/board/MilanMohamed.webp";
import NikihilImg from "@/public/board/NikhilSrivastava-CoPres.jpg";
import PranavImg from "@/public/board/PranavPochiraju-ExternalVP.jpg";
import SofiaImg from "@/public/board/SofiaMajeed-InternalVP.jpg";
import VyshnaviImg from "@/public/board/VyshnaviNallandigal-DirectorofMarketing.jpg";

interface BoardInfoProps {
  name: string;
  title: string;
  image: StaticImageData;
  linkedin: string;
}

export const boardInfo: BoardInfoProps[] = [
  {
    name: "Milan Mohamed",
    title: "CO-PRESIDENT",
    image: MilanImg,
    linkedin: "https://www.linkedin.com/in/milan-mohamed/",
  },
  {
    name: "Nikhil Srivastava",
    title: "CO-PRESIDENT",
    image: NikihilImg,
    linkedin: "https://www.linkedin.com/in/nikhil-srivastava1/",
  },
  {
    name: "Sofia Majeed",
    title: "INTERNAL VICE PRESIDENT",
    image: SofiaImg,
    linkedin: "https://www.linkedin.com/in/sofia-majeed/",
  },
  {
    name: "Pranav Pochiraju",
    title: "EXTERNAL VICE PRESIDENT",
    image: PranavImg,
    linkedin: "https://www.linkedin.com/in/pranav-pochiraju/",
  },
  {
    name: "Vyshnavi Nallandigal",
    title: "DIRECTOR OF MARKETING",
    image: VyshnaviImg,
    linkedin: "https://www.linkedin.com/in/vyshnavinallandigal/",
  },
];
