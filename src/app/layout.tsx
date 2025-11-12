import "./globals.css";
import { Roboto } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});
export const metadata = {
  title: "HCG",
  description:
    "HCG is the premier student-run consulting group at the University of California, Riverside, committed to nurturing students' professional growth by offering hands-on opportunities to collaborate directly with diverse businesses.",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navigation />
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
