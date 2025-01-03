import { Jost } from "next/font/google";
import "../globals.css";
import { Options, OptionsLeft } from "../components/Options";
import { NavbarLeft } from "../components/NavbarLeft";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  title: "Portfolio - Damian Gębala",
  description: "Portfolio created by Damian Gębala",
};

export default async function RootLayout({ children, params }) {
  const resolvedParams = await params; // czekamy na params
  const { locale } = resolvedParams;
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`${jost.className} bg-white text-dark dark:text-white dark:bg-dark transition-all`}
      >
        <NextIntlClientProvider messages={messages}>
          <Options position="top" className=" lg:hidden" />

          <div className="flex">
            <Options position="left" className="hidden lg:flex" />
            <NavbarLeft className="hidden lg:flex" />
            <section className="flex-grow w-full">
              {children} <Footer />
            </section>
          </div>
          <Menu position="bottom" className="lg:hidden" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
