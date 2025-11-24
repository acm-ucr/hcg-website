import Header from "@/components/Header";
import InfoSection from "@/components/InfoSection";
import Solutions from "@/components/work/Solutions";
import ContactUs from "@/components/ContactUs";

import OurServicesImage from "@/public/work/ourServices.webp";
import workHeader from "@/public/work/clientWorkBG.webp";

import { clientCarouselData } from "@/data/ClientCarouselData";
import Carousel from "@/components/LogoCarousel";

const Work = () => {
  return (
    <div>
      <Header title="Client Work" headerPicture={workHeader} />
      <InfoSection
        title="Our Services"
        text="Established in fall 2022 as the first and only consulting club on campus, Highlander Consulting Group is driven by a mission to offer members real-world experience through partnerships with diverse firms. We're dedicated to creating and delivering top-tier solutions that drive measurable results."
        image={OurServicesImage}
        imageAlt="Our Services"
      />
      <Carousel data={clientCarouselData} />
      <Solutions />
      <ContactUs
        buttonText="Contact Us"
        buttonHref="/"
        text="Driven by a passion for consulting, a dedication to transformative
          collaborations, and experience from top firms, we're always eager to
          tackle fresh challenges."
      />
    </div>
  );
};

export default Work;
