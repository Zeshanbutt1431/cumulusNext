import { Suspense } from "react";
import MainSlider from "./components/home/MainSlider";
import Brands from "./components/home/Brands";
import MiniBanners from "./components/home/MiniBanners";
import FeaturedProducts from "./components/home/FeaturedProducts";
import Deals from "./components/home/Deals";
import Deals2 from "./components/home/Deals2";
import News from "./components/home/News";
import Services from "./components/home/Services";
import Welcome from "./components/home/Welcome";

export const metadata = {
  title: "Home page ",
  description: "Home page description",
  keywords: "Home, page",
};

export default function Home() {
  return (
    <div className="home">
      <Suspense fallback={<p>Loading ....</p>}>
        <MainSlider />
      </Suspense>
      
    <Suspense fallback={<p>Loading ....</p>}>
        <Welcome />
      </Suspense>
      <Suspense fallback={<p>Loading ....</p>}>
        <MiniBanners />
      </Suspense>

      <Suspense fallback={<p>Loading ....</p>}>
        <FeaturedProducts heading={"Featured Products"} />
      </Suspense>

      <Suspense fallback={<p>Loading ....</p>}>
        <Deals />
      </Suspense>

      <Suspense fallback={<p>Loading ....</p>}>
        <FeaturedProducts heading={"Top selling"} />
      </Suspense>

      <Suspense fallback={<p>Loading ....</p>}>
        <Deals2 />
      </Suspense>
      <Suspense fallback={<p>Loading ....</p>}>
        <Brands />
      </Suspense>
      
      <Suspense fallback={<p>Loading ....</p>}>
        <News />
      </Suspense>
      <Suspense fallback={<p>Loading ....</p>}>
        <Services />
      </Suspense>
    </div>
  );
}
