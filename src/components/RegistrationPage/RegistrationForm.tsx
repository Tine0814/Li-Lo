import { useEffect, useState } from "react";
import InputField from "../Form/InputField";
import logo from "../../assets/img/logo.png";
import disc from "../../assets/img/disc.png";
import wave from "../../assets/img/wave.png";
import ContainedButton from "../Buttons/Contained";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../api/authApi";
import { GenericResponse } from "../../api/type";
import CheckEmailModal from "./CheckEmailModal";

const schema = z.object({
  fullName: z.string().min(4, "full name min 4 char"),
  workEmail: z.string().email("Invalid email").min(1, "Email is required"),
  companyName: z.string().min(4, "company Name min 3 char"),
  phoneNumber: z.string().refine((value) => value.length >= 11, {
    message: "Phone number is required",
  }),
  companySize: z.string(),
  country: z.string().min(1, "country are required"),
});

type FormSchemaType = z.infer<typeof schema>;

export default function RegistrationForm() {
  const [loading, setLoading] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    setLoading(true);

    const userData = {
      fullName: data.fullName,
      workEmail: data.workEmail,
      companyName: data.companyName,
      phoneNumber: data.phoneNumber,
      companySize: data.companySize,
      country: data.country,
    };

    try {
      const response = await authApi.post<GenericResponse>(
        "/registration",
        userData
      );
      console.log(response);

      reset(); //reset all input field function provide by react hook form
      setIsSubmited(true);
    } catch (error: any) {
      if (error.response) {
        console.log(error.response);
        console.log("Server responded");
      } else if (error.request) {
        console.log("Network error");
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Registration";
  }, []);

  return (
    <>
      {isSubmited ? (
        <CheckEmailModal />
      ) : (
        <section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 0.4,
            }}
            className="relative w-full  h-screen flex flex-col justify-center items-center md:overflow-hidden pt-32 md:pt-0 overflow-x-hidden"
          >
            <div className="w-full absolute top-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
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
            <div className="md:w-[300px] w-[150px] absolute -left-[10em] top-5">
              <img src={disc} alt="disc" />
            </div>
            <div className="md:w-[300px] w-[150px] absolute left-24 bottom-20">
              <img src={wave} alt="wave" />
            </div>
            <motion.div
              onClick={() => navigate("/")}
              className="z-10 flex justify-center items-center gap-2 bg-white px-5 py-2 rounded-md mb-10 costume-box-shadow cursor-pointer"
              whileHover={{ scale: 1.1 }} // Optional: Add a scaling effect on hover
            >
              <div className="w-[50px]">
                <motion.img src={logo} alt="logo" />
              </div>
              <h1 className="font-extrabold text-[30px] md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Li-Lo
              </h1>
            </motion.div>
            <h1 className="z-10 text-[#252525] text-[50px]  font-extrabold text-7xl">
              Register
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                ease: "linear",
                delay: 0.5,
              }}
              className="relative w-[400px] sm:w-[500px] md:w-[700px] p-10"
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <InputField
                    type="text"
                    id="fullName"
                    label="Full Name"
                    {...register("fullName")}
                    error={errors.fullName}
                  />
                  <InputField
                    type="text"
                    id="workEmail"
                    label="Work Email"
                    {...register("workEmail")}
                    error={errors.workEmail}
                  />
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <InputField
                    type="text"
                    id="companyName"
                    label="Company Name"
                    {...register("companyName")}
                    error={errors.companyName}
                  />
                  <InputField
                    type="number"
                    id="phoneNumber"
                    label="Phone Number"
                    {...register("phoneNumber")}
                    error={errors.phoneNumber}
                  />
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <InputField
                    type="number"
                    id="companySize"
                    label="Company Size"
                    {...register("companySize")}
                    error={errors.companySize}
                  />
                  <InputField
                    type="text"
                    id="country"
                    label="Country"
                    {...register("country")}
                    error={errors.country}
                  />
                </div>
                <div className="w-full flex justify-center p-5">
                  <ContainedButton label="Submit" isLoading={loading} />
                </div>
              </form>
              <p className="mt-10 text-center text-[#837f7f]">
                We will process your data as set forth in our{" "}
                <span className="text-[#00A9FF]">
                  Terms of Use. Privacy Policy
                </span>{" "}
                and{" "}
                <span className="text-[#00A9FF]">
                  Data Processing Agreement
                </span>
              </p>
            </motion.div>
          </motion.div>
        </section>
      )}
    </>
  );
}
