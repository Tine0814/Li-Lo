import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContainedButton from "./Buttons/Contained";

export default function NotFound() {
  const [loading, setLoading] = useState(false);

  const ButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1000);
  };

  const navigate = useNavigate();
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-9xl font-extrabold text-[#1A2238] tracking-widest">
        404
      </h1>
      <div className="bg-[#d341cc] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <div className="w-[180px]">
        <ContainedButton
          isLoading={loading}
          label="Go Home"
          onClick={ButtonClick}
        />
      </div>
    </main>
  );
}
