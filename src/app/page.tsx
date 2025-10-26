import Hero from "../Components/Hero";
import Packages from "../Components/Packages";
import Products from "../Components/Products";
import PricingPromos from "../Components/PricingPromos";
import Contact from "../Components/contact";

export default function Page() {
  return (
    <div className="flex flex-col gap-y-1">
      <Hero />
      <Packages />

      <Products />

      <PricingPromos />

      <Contact />
    </div>
  );
}
