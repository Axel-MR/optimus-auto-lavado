import Hero from "../Components/Hero";
import Packages from "../Components/Packages";
import Products from "../Components/Products";
import PricingPromos from "../Components/PricingPromos";
import Contact from "../Components/contact";

export default function Page() {
  return (
    <div className="flex flex-col gap-y-5">
      <Hero />
      <hr className=" border-2 border-amber-200" />
      <Packages />
      <hr className=" border-2 border-amber-200" />

      <Products />
      <hr className=" border-2 border-amber-200" />

      <PricingPromos />
      <hr className=" border-2 border-amber-200" />

      <Contact />
      <hr className=" border-2 border-amber-200" />
    </div>
  );
}
