import { Jost } from "next/font/google";
import "../globals.css";
import { OptionsLeft } from "../components/OptionsLeft";
import { NavbarLeft } from "../components/NavbarLeft";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Footer } from "../components/Footer";

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
          <div className="flex ">
            <OptionsLeft />
            <NavbarLeft />
            <section className="flex-grow w-full">
              {children} <Footer />
            </section>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}