import lilo_logo from "../assets/img/lilo_logo.png";
import { VscTriangleDown } from "react-icons/vsc";
import ContainedButton from "./Buttons/Contained";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsList } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

export default function NavBar() {
  const [loading, setLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const ButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/Register");
    }, 1000);
  };

  const navItems = [
    {
      text: "Product",
      link: "/",
      icon: <VscTriangleDown size={25} />,
    },
    { text: "Pricing", link: "/pricing" },
    {
      text: "Resources",
      link: "/resources",
      icon: <VscTriangleDown size={25} />,
    },
    { text: "About Us", link: "/about-us" },
  ];
  return (
    <nav className="fixed w-full z-20">
      <div className="bg-[#ffffff] w-full shadow-md xl:px-40 p-2 flex items-center justify-between text-[16px]">
        <Link to={"/"}>
          <img src={lilo_logo} alt="logo" width={200} />
        </Link>
        <ul className="hidden xl:flex justify-between p-2 gap-20">
          {navItems.map((item, index) => (
            <li className="hover-effect" key={index}>
              <Link to={item.link} className="flex gap-3 items-center">
                {item.text}
                <span className="text-[#d341cc]">{item.icon}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden xl:flex gap-4 w-[180px]">
          <ContainedButton
            label="Register"
            isLoading={loading}
            onClick={ButtonClick}
          />
        </div>
        <button className="xl:hidden " onClick={() => setShowMenu(!showMenu)}>
          <BsList size={50} />
        </button>
        {showMenu && (
          <AnimatePresence>
            <motion.div
              className={`bg-gradient-to-r from-purple-500 to-pink-500 w-[200px] absolute z-20 right-5 rounded-xl top-20 p-5 xl:hidden`}
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: "0%" }}
              exit={{ opacity: 0, y: "-50%", transition: { duration: 1 } }}
              transition={{ type: "spring", stiffness: 100, duration: 0.75 }}
            >
              <motion.ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                initial={{ opacity: 0, y: "-50%" }}
                animate={{ opacity: 1, y: "0%" }}
                exit={{ opacity: 0, y: "-50%", transition: { duration: 1 } }}
                transition={{ type: "spring", stiffness: 100, duration: 1 }}
              >
                {navItems.map((item, index) => (
                  <li className="hover-effect" key={index}>
                    <Link
                      to={item.link}
                      className=" px-4 py-2 flex gap-3 items-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {item.text}
                      <span className="text-[#d341cc]">{item.icon}</span>
                    </Link>
                  </li>
                ))}
                <ContainedButton
                  label="Register"
                  isLoading={loading}
                  onClick={ButtonClick}
                />
              </motion.ul>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </nav>
  );
}
