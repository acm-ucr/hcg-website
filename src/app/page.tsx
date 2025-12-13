import LandingHeader from "@/components/home/LandingHeader";
import InfoSection from "@/components/InfoSection";
import OurTeam from "@/components/home/OurTeam";
import Carousel from "@/components/LogoCarousel";
import ContactUs from "@/components/ContactUs";
import MailingList from "@/components/home/MailingList";
import { carouselData } from "@/data/CarouselItems";
import { clientCarouselData } from "@/data/ClientCarouselData";

import AboutUsImage from "@/public/about/aboutUs.webp";

const Home = () => {
  return (
    <>
      <div>
        <LandingHeader />
        <InfoSection
          title="About Us"
          text="HCG is the premier student-run consulting group at the University of California, Riverside, committed to nurturing students' professional growth by offering hands-on opportunities to collaborate directly with diverse businesses. Our practical approach enriches our members with invaluable experience in consulting and strategic management, empowering them to excel in the business world."
          image={AboutUsImage}
          imageAlt="About Us"
        />
        <OurTeam />
        <Carousel data={carouselData} />
        <ContactUs
          buttonText="Learn More"
          buttonHref="/work"
          text="Our team has led transformative projects, revitalizing marketing strategies, optimizing operations, and more, enabling clients to achieve remarkable business outcomes."
          titleText="Clients"
        />
        <Carousel data={clientCarouselData} />
        <MailingList />
      </div>
    </>
  );
};

export default Home;
