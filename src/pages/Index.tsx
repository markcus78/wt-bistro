import Hero from "@/components/landing/Hero";
import Manifesto from "@/components/landing/Manifesto";
import Veloce from "@/components/landing/Veloce";
import QuattroMomenti from "@/components/landing/QuattroMomenti";
import Allunga from "@/components/landing/Allunga";
import Menu from "@/components/landing/Menu";
import Valori from "@/components/landing/Valori";
import DoveQuando from "@/components/landing/DoveQuando";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Allunga />
      <Manifesto />
      <Veloce />
      <QuattroMomenti />
      <Menu />
      <Valori />
      <DoveQuando />
      <Footer />
    </main>
  );
};

export default Index;
