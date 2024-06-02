import OutlineButton from "./Buttons/Outlined";
import lilo_logo from "../assets/img/lilo_logo.png";
import ContainedButton from "./Buttons/Contained";
// import smoke from "../assets/img/smoke.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const ButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/Register");
    }, 1000);
  };
  const menuItems = [
    {
      title: "Product",
      items: [
        { label: "Employee Record", href: "/" },
        { label: "Onboarding", href: "/" },
        { label: "Performance", href: "/" },
        { label: "Attendance", href: "/" },
        { label: "Payroll", href: "/" },
        { label: "Document & e-signatures", href: "/" },
        { label: "Employee self-service", href: "/" },
      ],
    },
    {
      title: "Resources",
      items: [
        { label: "Blog", href: "/" },
        { label: "FAQ", href: "/" },
        { label: "Pricing", href: "/" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About Us", href: "/" },
        { label: "Careers", href: "/" },
        { label: "Contact Us", href: "/" },
      ],
    },
  ];
  return (
    <footer>
      <div className="relative lg:min-h-screen w-full flex flex-col pt-20 sm:pt-10 md:pt-20 lg:justify-center px-5 xl:px-20  2xl:px-40 overflow-hidden">
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center gap-4 p-5">
            <h1 className="text-[30px] md:text-[40px] font-extrabold text-center">
              Ready to supercharge your team?
            </h1>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-[180px]">
                <ContainedButton
                  label="Start Now"
                  isLoading={loading}
                  onClick={ButtonClick}
                />
              </div>
              <OutlineButton label="Learn More" />
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-col md:flex-row text-[20px]">
          <div className="md:w-[270px] flex flex-col items-center">
            <img src={lilo_logo} alt="logo" width={200} />
            <p className="text-center md:text-justify w-full">
              Li-Lo helps companies automate end-to-end employee journey
              including onboarding,time off, employee management, and more.
            </p>
          </div>
          {menuItems.map((section, index) => (
            <div key={index} className="mt-10 p-5">
              <h1 className="font-bold">{section.title}</h1>
              <ul className="ml-3 mt-2 text-[20px] md:text-[24px]">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-[#666464] hover:scale-110 hover:text-[black] transition-transform duration-300 ease-in-out"
                  >
                    <Link to={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex gap-10 text-[16px] mt-5">
          <h6 className="text-[20px] text-center">
            POWERED BY 20023 {currentYear}
          </h6>
          <ul className="flex gap-5 ">
            <li className="hover:scale-110 hover:text-[black] transition-transform duration-300 ease-in-out">
              <Link to={"/"}>Privacy</Link>
            </li>
            <li className="hover:scale-110 hover:text-[black] transition-transform duration-300 ease-in-out">
              <Link to={"/"}>Term</Link>
            </li>
          </ul>
        </div>
        {/* <div className="absolute -z-10 rotate-[220deg] -top-20 right-0 ">
          <img src={smoke} alt="image" />
        </div> */}
      </div>
    </footer>
  );
}
