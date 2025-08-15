import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import LogoTicker from "@/sections/Sponsors";
import About from "@/sections/About";
import Guide from "@/sections/Guide";
import DesignerProfiles from "@/sections/DesignerProfiles";
import DesignBrief from "@/sections/DesignBrief";
import Faqs from "@/sections/Faqs";
import CallToAction from "@/sections/CallToAction";
import Sponsors from "@/sections/Sponsors";

export default function Home() {
  return (
    <div>
     <Navbar />
     <Hero/>
      <Sponsors/>
      <About/>
      <Guide />
      <DesignerProfiles />
      <DesignBrief />
      <Faqs />
      <CallToAction />
      
    </div>
  );
}
