import Hero from "../sections/Hero/Hero";
import WhyChooseUs from "../sections/WhyChooseUs/WhyChooseUs";
import FeaturedServices from "../sections/FeaturedServices/FeaturedServices";
import Testimonials from "../sections/Testimonials/Testimonials";
import CallToAction from "../sections/CallToAction/CallToAction";

export default function Home() {
  return (
    <main className="main">
      <Hero />
      <WhyChooseUs />
      <FeaturedServices />
      <CallToAction />
    </main>
  );
}
