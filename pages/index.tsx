import Copy from "@/components/Copy";
import Cryteria from "@/components/Cryteria";
import Toggler from "@/components/Toggler";
import { cryterias } from "@/constants/cryteria";
import { allCryteria } from "@/constants/password";
import { useEffect, useState } from "react";

export type CryteriaKeys = keyof typeof allCryteria;

export default function Home() {
  const [password, setPassword] = useState<string>("");
  const [cryteria, setCryteria] = useState<CryteriaKeys[]>([]);

  const [length, setLength] = useState<number>(0);
  const [error, setError] = useState<string>("");

  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generatePassword = () => {
    if (!cryteria.length || !length) {
      setError("Choose at least one cryteria and define password length ");
    } else {
      setError("");
    }

    let generatedPassword = "";
    let maxLength = length;

    if (length > 40) {
      maxLength = 40;
    }

    for (let i = 0; i < maxLength; i++) {
      const randomType = cryteria[getRandomInt(0, cryteria.length - 1)]; // on each index get random category from checked and get random sign of this category
      const randomSign =
        allCryteria[randomType][
          getRandomInt(0, allCryteria[randomType].length - 1)
        ];

      generatedPassword += randomSign;
    }

    setPassword(generatedPassword);
  };

  const getBorder = (): string => {
    return theme === "dark" ? "border-white" : "border-[#000]";
  };

  return (
    <div className="bg-[#00ff41] w-full h-screen flex items-center justify-center font-mono">
      <div
        className={`${
          theme == "dark" ? "bg-[#222225] text-white" : "bg-white text-black"
        } px-[50px] py-10 flex gap-5 flex-col rounded-lg transition duration-300`}
      >
        <nav className="flex justify-between items-center">
          <h2 className="text-xl">{`> Generate a secure password`}</h2>
          <Toggler theme={theme} setTheme={setTheme} />
        </nav>
        <div
          className={`w-full items-center justify-between flex border ${getBorder()} px-2 py-1 bg-transparent`}
        >
          <p className="w-full font-bold text-left no-arrows outline-none bg-transparent">
            {password || "Your secure password"}
          </p>
          <Copy toCopy={password} />
        </div>

        <div
          className={`border border-dashed ${
            theme === "dark" ? "border-[#42444a]" : "border-[#d7d8da]"
          }`}
        />
        <div>
          <h2 className="text-xl font-bold">Customize your password</h2>
        </div>
        <div
          className={`flex gap-3 justify-between w-full border ${getBorder()}`}
        >
          <div className="p-10">
            {cryterias.map((cryteria: string) => {
              return (
                <Cryteria
                  name={cryteria}
                  setCryteria={setCryteria}
                  theme={theme}
                />
              );
            })}
          </div>
          <div className="p-10 flex gap-2 items-center">
            <div>Password length: </div>
            <input
              onChange={(e) => {
                setLength(parseInt(e.target.value));
              }}
              type="number"
              min="0"
              max="40"
              className={`w-[45px] font-bold text-xl text-center border ${getBorder()} no-arrows outline-none bg-transparent`}
            />
          </div>
        </div>
        {error && <div className="text-red-400">{error}</div>}
        <button
          className={`transition duration-300 self-start ${
            theme == "dark" ? "text-black" : "text-white"
          } hover:bg-[#1b8d36] bg-[#00ff41] px-6 py-2 rounded-lg`}
          onClick={generatePassword}
        >
          Generate
        </button>
      </div>
    </div>
  );
}
