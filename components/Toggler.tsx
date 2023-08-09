import React from "react";

interface Props {
  theme: "dark" | "light";
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
}

const Toggler: React.FC<Props> = ({ theme, setTheme }) => {
  return (
    <div
      className={`rounded-full h-5 w-10 ${
        theme === "dark" ? "bg-[#3f3f44]" : "bg-[#d6d6d8]"
      }  relative`}
      onClick={() =>
        setTheme((prevTheme) => (prevTheme == "dark" ? "light" : "dark"))
      }
    >
      <div
        className={`${
          theme == "dark" ? "right-0 bg-white" : "left-0 bg-[#3f3f44] "
        } absolute h-full aspect-[1/1] rounded-full `}
      />
    </div>
  );
};

export default Toggler;
