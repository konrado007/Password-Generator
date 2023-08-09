import { CryteriaKeys } from "@/pages";
import React, { useEffect, useState } from "react";

interface Props {
  name: string;
  theme: string;
  setCryteria: React.Dispatch<React.SetStateAction<CryteriaKeys[]>>;
}

const Cryteria: React.FC<Props> = ({ name, setCryteria, theme }) => {
  const [active, setActive] = useState<boolean>(false);

  const addCryteria = (): void => {
    if (active) {
      setCryteria((prevCryteria) => [...prevCryteria, name as CryteriaKeys]);
    } else {
      setCryteria((prevCryteria) =>
        prevCryteria.filter((cryteria) => cryteria !== name)
      );
    }
  };

  useEffect(() => {
    addCryteria();
  }, [active]);

  return (
    <label
      className="flex gap-3 items-center cursor-pointer"
      onClick={() => setActive((prevActive) => !prevActive)}
    >
      <div
        className={`h-4 rounded-sm w-4 appearance-none ${
          active
            ? "bg-[#00ff41]"
            : theme === "dark"
            ? "bg-[#3f3f44]"
            : "bg-[#e0e0e0]"
        }`}
        // Stop the click event from propagating to the outer div
      />
      <div className="font-bold text-xl">{name}</div>
    </label>
  );
};

export default Cryteria;
