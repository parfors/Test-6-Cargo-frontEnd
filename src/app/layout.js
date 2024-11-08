import { Exo_2 } from "next/font/google";
import "./globals.css";
import Container from "@/components/common/Container";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const exo_2 = Exo_2({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Cargo",
  description: "Cargo web site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={exo_2.className}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
