import Alinea from "@/public/work/logos/Alinea.webp";
import BeReal from "@/public/work/logos/BeReal.webp";
import Bookit from "@/public/work/logos/Bookit.webp";
import Capturely from "@/public/work/logos/Capturely.webp";
import EdgeSoundResearch from "@/public/work/logos/EdgeSoundResearch.webp";
import EthosHealth from "@/public/work/logos/EthosHealth.webp";
import Quokka from "@/public/work/logos/Quokka.webp";
import Uruit from "@/public/work/logos/Uruit.webp";
import RandBTea from "@/public/work/logos/RnBTea.webp";
import Sensiply from "@/public/work/logos/SENSIPLY.png";
import Vestr from "@/public/work/logos/VESTR.png";
import { StaticImageData } from "next/image";

interface ClientCarouselDataItem {
  name: string;
  icon: StaticImageData;
}

export const clientCarouselData: ClientCarouselDataItem[] = [
  { name: "R & B Tea", icon: RandBTea },
  { name: "Sensiply", icon: Sensiply },
  { name: "VESTR", icon: Vestr },
  { name: "alinea", icon: Alinea },
  { name: "BeReal", icon: BeReal },
  { name: "bookit", icon: Bookit },
  { name: "Capturely", icon: Capturely },
  { name: "EdgeSoundResearch", icon: EdgeSoundResearch },
  { name: "EthosHealth", icon: EthosHealth },
  { name: "Quokka", icon: Quokka },
  { name: "uruit", icon: Uruit },
];
