import { RiHomeOfficeFill } from "react-icons/ri";
import { BiTime } from "react-icons/bi";
import { GoTools } from "react-icons/go";
import { AiFillContacts } from "react-icons/ai";

export default function SummarySection() {
  const card = [
    {
      icons: <RiHomeOfficeFill />,
      h5: "Li-Lo is your digital HR hub",
      p: "Delete your clutterd spreadsheets and documents. keep all of your digital assets, and kept in a single location.",
    },
    {
      icons: <BiTime />,
      h5: "Automate manual repetitive tasks",
      p: "Don't waste time chasing paperwork, updating employee data manually, or preparing repetative reports. Let Li-Lo do it for you",
    },
    {
      icons: <GoTools />,
      h5: "Scale your special personnel procedure",
      p: "Li-Lo lets you easily customize databases and workflows, so you won't have to change how you work to fit a system",
    },
    {
      icons: <AiFillContacts />,
      h5: "Dedicated Success Manager",
      p: "Never be required to raise tickets, Our customer Success Manager will be there for you always",
    },
  ];
  return (
    <section className="relative lg:min-h-screen w-full flex flex-col items-center justify-center pt-20 sm:pt-10 md:pt-20 lg:justify-center px-10 xl:px-20  2xl:px-40">
      <div className="p-5 sm:p-10 text-center 2xl:-mt-32">
        <h2 className="text-[20px] sm:text-[25px] lg:text-[35px] font-bold">
          A Smarter Way To manage Your People
        </h2>
        <p className="text-[16px] sm:text-[21px] lg:text-[22px]">
          Focus on you valuable employees and let Li-Lo handle all the admin
          works.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-10 mt-20">
        {card.map((items, index) => (
          <div
            key={index}
            className="max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow"
          >
            <div className="text-[25px] md:text-[40px] text-gray-500 mb-3">
              {items.icons}
            </div>
            <a href="#">
              <h5 className="mb-2 text-xl md:text-2xl font-semibold tracking-tight text-gray-900 ">
                {items.h5}
              </h5>
            </a>
            <p className="mb-3 text-sm md:text-md  font-normal text-gray-500">
              {items.p}
            </p>
            <a
              href="#"
              className="inline-flex items-center text-[#d341cc] hover:underline"
            >
              See More
              <svg
                className="w-3 h-3 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
