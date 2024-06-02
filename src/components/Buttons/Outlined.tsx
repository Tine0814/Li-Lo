// components/OutlineButton.tsx

import React from "react";

interface OutlineButtonProps {
  label: string;
  onClick?: () => void;
}

const OutlinedButton: React.FC<OutlineButtonProps> = ({ label, onClick }) => {
  return (
    <div>
      <button
        className="border-solid border-2 w-[180px] border-[#fe01f5] py-3 rounded-md font-extrabold hover:scale-90 transition-transform duration-300 ease-in-out"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default OutlinedButton;
