import Button from "@/components/Button";
import contactUsBG from "@/public/work/contactUsBG.webp";
import Title from "@/components/Title";
import Image from "next/image";

interface ContactUsProps {
  buttonText: string;
  buttonHref: string;
  text: string;
  titleText?: string;
}

const ContactUs = ({
  buttonHref,
  buttonText,
  text,
  titleText,
}: ContactUsProps) => {
  return (
    <div className="bg-hcg-black relative flex flex-col items-center justify-center py-10 text-center text-white lg:px-25 lg:py-25">
      <Image
        src={contactUsBG}
        alt="Gold Stripes"
        objectFit="cover"
        className="absolute z-0 h-full w-full"
      />
      {titleText && <Title title={titleText} color="text-white" />}
      <p className="text-md z-20 w-4/5 pt-6 md:w-3/4 md:text-xl">{text}</p>
      <div className="z-20 pt-6">
        <Button text={buttonText} href={buttonHref} />
      </div>
    </div>
  );
};

export default ContactUs;
