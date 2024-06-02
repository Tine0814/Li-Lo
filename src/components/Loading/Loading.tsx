import "./loading.css";
import { motion } from "framer-motion";
import lilo from "../../assets/img/logo.png";

export default function Loading() {
  return (
    <>
      <motion.div
        className="min-h-screen bg-white w-full z-50 flex justify-center items-center overflow-hidden"
        initial={{ y: 0, opacity: 0 }} // Start the animation from the top
        animate={{ y: 0, opacity: 1 }} // End the animation at the center (0)
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <div className="flex items-center justify-center w-full">
          <motion.div
            className="sm:ml-[200px] ml-[250px]"
            initial={{ x: 0 }}
            animate={{ x: -200 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src={lilo}
              alt=""
              className="lg:w-[300px] sm:w-[200px] w-[150px]"
            />
          </motion.div>
          <motion.div
            className="content text-[4em] lg:text-[8em] md:text-[7em] sm:text-[6em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
          >
            <h2>Li-Lo</h2>
            <h2>Li-Lo</h2>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
