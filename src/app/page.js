import Features from "@/components/common/features/Features";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Information from "@/components/information/Information";

export default function Home() {
  return (
    <>
      <Hero />
      <Information />
      <Features />
      <Contact />
    </>
  );
}
