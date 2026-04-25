import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Comparison } from "@/components/Comparison";
import { Market } from "@/components/Market";
import { BusinessModel } from "@/components/BusinessModel";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Comparison />
        <Market />
        <BusinessModel />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
