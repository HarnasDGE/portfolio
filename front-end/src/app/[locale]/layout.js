import { Jost } from "next/font/google";
import "../globals.css";
import { OptionsTop } from "../components/OptionsTop";
import { NavbarLeft } from "../components/NavbarLeft";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Footer } from "../components/Footer";
import { OptionsLeft } from "../components/OptionsLeft";
import { MenuBottom } from "../components/MenuBottom";
import { MainLayout } from "../components/MainLayout";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  title: "Portfolio - Damian Gębala",
  description: "Portfolio created by Damian Gębala",
  openGraph: {
    title: "Portfolio - Damian Gębala",
    description: "Portfolio created by Damian Gębala",
    url: "https://damingebala.pl",
    images: [
      {
        url: "https://damiangebala.pl/socialBackground.png",
        alt: "Portfolio created by Damian Gębala",
      },
    ],
  },
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params; // czekamy na params
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${jost.className} bg-white text-dark dark:text-white dark:bg-dark transition-all`}
      >
        <NextIntlClientProvider messages={messages}>
          <MainLayout>
            <OptionsLeft />
            <NavbarLeft />
            <section className="flex-grow w-full">
              <OptionsTop />
              {children}
              <Footer />
              <MenuBottom />
            </section>
          </MainLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
