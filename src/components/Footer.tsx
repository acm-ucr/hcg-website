import Link from "next/link";
import { footerLinks } from "@/data/FooterLinks";

const Footer = () => {
  return (
    <div className="bg-hcg-black justify-between bg-linear-to-r px-6 py-4 md:flex md:items-end">
      <div className="text-hcg-white flex flex-col p-2 md:p-6">
        <p className="font-hcg-main w-fit border-b-2 border-white pb-2 font-light">
          Highlander Consulting Group
        </p>
        <div className="space-y-3 pt-2 font-light">
          <p>900 University Ave, Riverside, CA 92521</p>
          <p>Est. 2022</p>
        </div>
      </div>
      <div className="flex space-x-4 p-2 md:p-0">
        {footerLinks.map(({ icon: Icon, url }, index) => (
          <Link key={index} href={url} target="_blank">
            <Icon className="h-8 w-8 text-white transition-transform duration-200 hover:scale-110" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
