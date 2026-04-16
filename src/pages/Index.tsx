import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Blends } from "@/components/Blends";
import { Manifesto } from "@/components/Manifesto";
import { Protocol } from "@/components/Protocol";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Blends />
        <Manifesto />
        <Protocol />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
