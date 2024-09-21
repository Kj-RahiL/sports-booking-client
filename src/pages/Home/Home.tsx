import Hero from "./Hero";
import Features from "./Features";
import HowItWork from "./HowItWork";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWork/>
      <Testimonials/>
      <Newsletter/>
    </div>
  );
};

export default Home;
