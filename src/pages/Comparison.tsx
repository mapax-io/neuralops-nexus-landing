import { Navbar } from "@/components/Navbar";
import { Comparison } from "@/components/Comparison";
import { Footer } from "@/components/Footer";

const ComparisonPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Comparison />
      </main>
      <Footer />
    </div>
  );
};

export default ComparisonPage;
