import AlaskaAirlines from "@/public/about/logos/AlaskaAirlines.webp";
import AMD from "@/public/about/logos/AMD.webp";
import BofA from "@/public/about/logos/BankofAmerica.webp";
import BlackRock from "@/public/about/logos/BlackRock.webp";
import Boeing from "@/public/about/logos/Boeing.webp";
import CapitalGroup from "@/public/about/logos/CapitalGroup.webp";
import Deloitt from "@/public/about/logos/Deloitte.webp";
import Disney from "@/public/about/logos/Disney.webp";
import EY from "@/public/about/logos/EY.webp";
import FentyBeauty from "@/public/about/logos/FentyBeauty.webp";
import JPMorgan from "@/public/about/logos/JPMorgan.webp";
import KPMG from "@/public/about/logos/KPMG.webp";
import Nasa from "@/public/about/logos/NASA.webp";
import Nvidia from "@/public/about/logos/Nvidia.webp";
import Oaktree from "@/public/about/logos/Oaktree.webp";
import Paramount from "@/public/about/logos/Paramount.webp";
import Pepsico from "@/public/about/logos/PepsiCo.webp";
import PWC from "@/public/about/logos/Pwc.webp";
import ServiceNow from "@/public/about/logos/Servicenow.webp";
import Tesla from "@/public/about/logos/Tesla.webp";
import BRG from "@/public/about/logos/BRG.webp";
import CityOfHope from "@/public/about/logos/CityofHope.webp";
import ClevelandClinic from "@/public/about/logos/ClevelandClinic.webp";
import Lenovo from "@/public/about/logos/lenovo.webp";
import Oracle from "@/public/about/logos/oracle.webp";
import KaiserPermanente from "@/public/about/logos/KaiserPermanente.webp";
import { StaticImageData } from "next/image";

interface CarouselDataItem {
  name: string;
  icon: StaticImageData;
}

export const carouselData: CarouselDataItem[] = [
  { name: "BRG", icon: BRG },
  { name: "City of Hope", icon: CityOfHope },
  { name: "Cleveland Clinc", icon: ClevelandClinic },
  { name: "Lenovo", icon: Lenovo },
  { name: "Oracle", icon: Oracle },
  { name: "Kaiswer Permanente", icon: KaiserPermanente },
  { name: "Boeing", icon: Boeing },
  { name: "BlackRock", icon: BlackRock },
  { name: "Tesla", icon: Tesla },
  { name: "PWC", icon: PWC },
  { name: "KPMG", icon: KPMG },
  { name: "Deloitt", icon: Deloitt },
  { name: "Pepsico", icon: Pepsico },
  { name: "AMD", icon: AMD },
  { name: "JPMorgan", icon: JPMorgan },
  { name: "CapitalGroup", icon: CapitalGroup },
  { name: "Nvidia", icon: Nvidia },
  { name: "EY", icon: EY },
  { name: "Oaktree", icon: Oaktree },
  { name: "Paramount", icon: Paramount },
  { name: "Nasa", icon: Nasa },
  { name: "AlaskaAirlines", icon: AlaskaAirlines },
  { name: "ServiceNow", icon: ServiceNow },
  { name: "Disney", icon: Disney },
  { name: "BofA", icon: BofA },
  { name: "FentyBeauty", icon: FentyBeauty },
];
