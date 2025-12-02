"use client";
import FeaturedCarousel from "@/Components/FeaturedCarousel";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Newsletter from "@/Components/Newsletter";
import Packages from "@/Components/Packages";
import PricingPromos from "@/Components/PricingPromos";
import Products from "@/Components/Products";
import Contact from "@/Components/contact";
import Footer from "@/Components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-8">
        <Hero />
        <Products />
        <FeaturedCarousel />
        <Packages />
        <Newsletter />
        <PricingPromos />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
