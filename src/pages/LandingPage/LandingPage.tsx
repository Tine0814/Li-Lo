import HeroSection from "../../components/LandingPage/HeroSection";
import DashboardSection from "../../components/LandingPage/DashboardSection";
// import smoke from "../../assets/img/smoke.png";
import SummarySection from "../../components/LandingPage/SummarySection";
import LiloBenificiarySection from "../../components/LandingPage/LiloBenificiarySection";
import { useEffect } from "react";

export default function LandingPage() {
  useEffect(() => {
    document.title = "Li-Lo";
  }, []);
  return (
    <>
      <HeroSection />
      {/* <div className="absolute -z-10 rotate-45 top-[760px]">
        <img src={smoke} alt="image" />
      </div> */}
      <DashboardSection />
      <SummarySection />
      <LiloBenificiarySection />
    </>
  );
}
