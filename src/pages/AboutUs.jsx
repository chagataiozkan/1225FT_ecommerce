import AboutUsBrandHeader from "../components/AboutUsBrandHeader";
import AboutUsDescription from "../components/AboutUsDescription";
import AboutUsHero from "../components/AboutUsHero";
import AboutUsStats from "../components/AboutUsStats";
import AboutUsTeamCard from "../components/AboutUsTeamCard";
import AboutUsVideo from "../components/AboutUsVideo";
import AboutUsWork from "../components/AboutUsWork";
import AboutUsBrands from "../components/AboutUsBrands";

export default function AboutUs() {
  return (
    <div>
      <AboutUsHero />
      <AboutUsDescription />
      <AboutUsStats />
      <AboutUsVideo />
      <AboutUsTeamCard />
      <AboutUsBrandHeader />
      <AboutUsBrands />
      <AboutUsWork />
    </div>
  );
}
