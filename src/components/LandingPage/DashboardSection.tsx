import imgs from "../../assets/img/ticket_attachment_1699421351.png";
import { BsFolder2Open, BsCalendarEvent } from "react-icons/bs";
import { FaRegSmileBeam } from "react-icons/fa";
import { AiFillDatabase, AiFillLock } from "react-icons/ai";
import { SiAwsorganizations } from "react-icons/si";
import { IoDocumentsOutline } from "react-icons/io5";
import { FaRegChartBar } from "react-icons/fa";
import ContainedButton from "../Buttons/Contained";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function DashboardSection() {
  const [loading, setLoading] = useState(false);

  const ButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("Newbie-Quiz");
    }, 1000);
  };

  const navigate = useNavigate();
  const dashboardItems = [
    {
      text: "Dashboard",
      icon: <BsFolder2Open />,
    },
    {
      text: "Employees",
      icon: <FaRegSmileBeam />,
    },
    {
      text: "Payroll",
      icon: <AiFillDatabase />,
    },
    {
      text: "Organization",
      icon: <SiAwsorganizations />,
    },
    {
      text: "Time Sheet",
      icon: <IoDocumentsOutline />,
    },
    {
      text: "HR Calendar",
      icon: <BsCalendarEvent />,
    },
    {
      text: "Manage Leaves",
      icon: <FaRegChartBar />,
    },
    {
      text: "HR Reports",
      icon: <FaRegChartBar />,
    },
    {
      text: "Configuration",
      icon: <AiFillLock />,
    },
  ];
  return (
    <section className="relative lg:min-h-screen w-full flex flex-col pt-20  sm:pt-10 md:pt-20 lg:justify-center px-10 xl:px-20  2xl:px-40">
      <div className="flex justify-between">
        <div>
          <ul>
            {dashboardItems.map((items, index) => (
              <li key={index}>
                <Link
                  to={"/"}
                  className="hidden xl:flex gap-3 items-center text-[30px] p-4 hover:text-[#d341cc] transition-transform duration-300 ease-in-out"
                >
                  <span className="text-[#d341cc] font-bold">{items.icon}</span>
                  {items.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img src={imgs} alt="dashboard" width={1021} height={558} />
          <h3 className="text-20px] md:text-[24px] mt-10 text-center lg:text-end">
            Digitize your employee records and keep them secure, organized and
            up-to-date.{" "}
          </h3>
          <div className="flex justify-center lg:justify-end w-full">
            <div className=" p-5 w-[180px]">
              <ContainedButton
                isLoading={loading}
                label="Learn More"
                onClick={ButtonClick}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
