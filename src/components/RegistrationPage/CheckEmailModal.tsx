import Lottie from "lottie-react";
import animation from "../../assets/lottie/Animation (3) - 1701396442354.json";
import { motion } from "framer-motion";
import logo from "../../assets/img/logo.png";

export default function CheckEmailModal() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "linear",
        duration: 0.4,
      }}
      className="min-h-screen w-full flex justify-center items-center flex-col gap-10 text-center p-10"
    >
      <div></div>
      <div className="w-full absolute top-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#FE7BE5", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#00A9FF", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradient)"
            fillOpacity={1}
            d="M0,192L40,192C80,192,160,192,240,208C320,224,400,256,480,240C560,224,640,160,720,165.3C800,171,880,245,960,272C1040,299,1120,277,1200,234.7C1280,192,1360,128,1400,96L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          />
        </svg>
      </div>
      <motion.div
        className="md:w-[300px] w-[150px] absolute right-0 bottom-0 -z-10"
        animate={{ y: [0, -20, 0, -10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <img src={logo} alt="logo" />
      </motion.div>
      {<Lottie animationData={animation} className="h-[20em] w-[20em]" />}
      <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold">
        Email Confirmation Sent.
      </h1>
      <p className="text-md md:text-2xl">
        We have sent a verification link to your email. Please check your inbox
        to verify your account.
      </p>
    </motion.section>
  );
}
