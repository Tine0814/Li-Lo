import img1 from "../../assets/img/Ellipse 1.png";
import img2 from "../../assets/img/Ellipse 2.png";
import img3 from "../../assets/img/Ellipse 3.png";

export default function LiloBenificiarySection() {
  const card = [
    {
      img: img1,
      h5: "Business owners",
      p: "Get access to your people insights. Have the confidence to make data-driven decisions instead of doing the guesswork",
    },
    {
      img: img2,
      h5: "HR managers",
      p: "Get access to your people insights. Have the confidence to make data-driven decisions instead of doing the guesswork",
    },
    {
      img: img3,
      h5: "Employees",
      p: "Get access to your people insights. Have the confidence to make data-driven decisions instead of doing the guesswork",
    },
  ];
  return (
    <section className="relative lg:min-h-screen w-full flex flex-col items-center justify-center pt-20 sm:pt-10 md:pt-20 lg:justify-center px-10 xl:px-20  2xl:px-40">
      <div className="p-5 sm:p-10 text-center 2xl:-mt-32">
        <h2 className="text-[20px] sm:text-[25px] lg:text-[35px] font-bold">
          Let's make it easier for you and everyone in your team
        </h2>
        <p className="text-[16px] sm:text-[21px] lg:text-[22px]">
          Suitble for anyone in the company. Li-Lo got you covered.
        </p>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10 mt-20">
        {card.map((items, index) => (
          <div
            key={index}
            className="relative flex flex-col text-center gap-6 justify-center items-center p-6 border border-gray-200 rounded-lg shadow mt-20 w-[300px] h-[200px] md:w-[500px] md:h-[300px]"
          >
            <div className="absolute flex justify-center items-center inset-2/4 -top-16 transform -translate-x-2/4 h-[100px] w-[100px] md:h-[170px] md:w-[170px] rounded-full shadow-md shadow-[#f189ec] border border-gray-200">
              <img
                src={items.img}
                alt="img"
                className="rounded-full w-[157px]"
              />
            </div>
            <h5 className="text-md md:text-2xl font-semibold tracking-tight text-gray-900  mt-10">
              {items.h5}
            </h5>
            <p className="mb-3 text-sm md:text-md  font-normal text-gray-500">
              {items.p}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
