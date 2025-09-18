import HeroText from "@/components/home-page/HeroText";
import HeroImage from "@/components/home-page/HeroImage";

const Home = () => {
  return (
    <section className="flex justify-around items-center pt-15">
        <HeroText />
        <HeroImage />
    </section>
  );
};

export default Home;
