import Lottie from "lottie-react";
import animation from "../../assets/lottie/Animation (2) - 1700359812053.json";
import { motion } from "framer-motion";
import logo from "../../assets/img/logo.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { authApi } from "../../api/authApi";
import { GenericResponse } from "../../api/type";
import NotFound from "../NotFound";

export default function RegistrationComplete() {
  const params = useParams();
  const [emailVerified, setEmailVerified] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const verifyEmailToken = async () => {
      try {
        // Check if email is already verified
        if (!emailVerified) {
          const response = await authApi.get<GenericResponse>(
            `/verify/${params.token}`
          );
          setEmailVerified(true);
          console.log(response);
        }
      } catch (error: any) {
        if (error.response && error.response.status === 404) {
          // Extract the error message from the response data
          const errorMessage = error.response.data; // Assuming the error message is sent from the server as response data
          console.log(errorMessage); // Log or handle the error message as needed
          setError(errorMessage); // Set the error message in the state
        } else {
          console.log("An error occurred:", error);
          // Handle other types of errors here
        }
      }
    };

    verifyEmailToken();
  }, [params.token, emailVerified]);

  return (
    <>
      {emailVerified ? (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 0.4,
          }}
          className="h-screen w-full flex justify-center items-center flex-col gap-10"
        >
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
            className="md:w-[300px] w-[150px] absolute right-0 bottom-0"
            animate={{ y: [0, -20, 0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <img src={logo} alt="logo" />
          </motion.div>
          {
            <Lottie
              animationData={animation}
              className="h-[4em] w-[4em] md:h-[10em] md:w-[10em]"
            />
          }
          <div className="p-5 sm:p-10 text-center">
            <h2 className="text-[25px] lg:text-[35px] font-bold">
              Email Confirmed!
            </h2>
            <p className="text-[20px] sm:text-[21px] lg:text-[22px]">
              Your user name and password will be sent to your registered email
              shortly. Thank you.
            </p>
          </div>
        </motion.section>
      ) : (
        <>
          {error}
          <NotFound />
        </>
      )}
    </>
  );
}
