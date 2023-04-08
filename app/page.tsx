import BestDeals from "@/components/BestDeals";
import BestSelling from "@/components/BestSelling";
import Brands from "@/components/Brands";
import CashBack from "@/components/CashBack";
import CategoryCard from "@/components/CategoryCard";
import Deals from "@/components/Deals";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import OurServices from "@/components/OurServices";
import TopSavings from "@/components/TopSavings";

// TODO: 1) Details Page
// TODO: 3) Checkout Component (Modal)


export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      <CategoryCard />
      <Deals />
      <Brands />
      <TopSavings />
      <CashBack />
      <BestSelling />
      <BestDeals />
      <OurServices />
      <Footer />
    </div>
  );
}
