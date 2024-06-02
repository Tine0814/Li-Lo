import ContainedButton from "../Buttons/Contained";
import Lottie from "lottie-react";
import animation from "../../assets/lottie/Animation - 1699321029936.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function HeroSection() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const ButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/Register");
    }, 1000);
  };
  return (
    <section
      id="hero-section"
      className="relative lg:min-h-screen w-full flex flex-col pt-20 sm:pt-10 md:pt-20 lg:justify-center xl:px-20  2xl:px-40"
    >
      <div className="flex flex-col items-center 2xl:justify-between 2xl:flex-row ">
        <figure>
          {
            <Lottie
              animationData={animation}
              className="w-[400px] sm:[500px] lg:w-[700px] 2xl:w-[800px]"
            />
          }
        </figure>
        <div className="-mt-20 text-center w-full pb-5 flex justify-center flex-col gap-10 sm:gap-5 md:gap-0 2xl:text-right">
          <h1 className=" hero-title leading-tight text-[32px] sm:text-[42px] lg:text-[54px] xl:text-[64px] font-bold">
            <span className="typing inline-block">Automate all your</span>{" "}
            <br />
            <span className="typing inline-block"> HR processes</span> <br />
            <span className="typing inline-block"> in a single system</span>
          </h1>
          <div className="flex justify-center 2xl:justify-end">
            <div className="w-[200px] lg:p-5 lg:w-[220px]">
              <ContainedButton
                label="Get Started Now"
                isLoading={loading}
                onClick={ButtonClick}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 sm:p-10 text-center 2xl:-mt-32">
        <h2 className="text-[20px] sm:text-[25px] lg:text-[35px] font-bold">
          Everything you need to manage the end-to-end employee lifecycle
        </h2>
        <p className="text-[16px] sm:text-[21px] lg:text-[22px]">
          No matter where and how big you are, Li-Lo has a module that suits
          your needs.
        </p>
      </div>
    </section>
  );
}
