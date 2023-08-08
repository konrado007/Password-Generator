export default function Home() {
  return (
    <div className="bg-[#00ff41] w-full h-screen flex items-center justify-center font-mono">
      <div className="bg-[#222225] px-[50px] py-10 flex gap-5 flex-col rounded-lg">
        <nav className="flex justify-between items-center">
          <h2 className="text-xl">{`> Generate a secure password`}</h2>
          <div>toggle</div>
        </nav>
        <div className="w-full items-center justify-between flex border px-2 py-1 bg-transparent">
          <input
            type="text"
            className="w-full font-bold  text-left no-arrows outline-none bg-transparent"
            placeholder="Your password"
          />
          <div className="font-bold">Copy</div>
        </div>

        <div className="border border-dashed border-[#2f3035] " />
        <div>
          <h2 className="text-xl font-bold">Customize your password</h2>
        </div>
        <div className="flex gap-3 justify-between w-full border">
          <div className="p-10">
            <div className="flex gap-3 items-center">
              <input
                type="checkbox"
                className=" bg-[#3f3f44] h-4 rounded-sm w-4 appearance-none checked:bg-[#00ff41]"
              />
              <h2 className="font-bold text-xl">Uppercase</h2>
            </div>
            <div className="flex gap-3  items-center">
              <input
                type="checkbox"
                className=" bg-[#3f3f44] h-4 rounded-sm w-4 appearance-none checked:bg-[#00ff41]"
              />
              <h2 className="font-bold text-xl">Lowercase</h2>
            </div>
            <div className="flex gap-3  items-center">
              <input
                type="checkbox"
                className=" bg-[#3f3f44] h-4 rounded-sm w-4 appearance-none checked:bg-[#00ff41]"
              />
              <h2 className="font-bold text-xl">
                Numeric
              </h2>
            </div>
            <div className="flex gap-3  items-center">
              <input
                type="checkbox"
                className=" bg-[#3f3f44] h-4 rounded-sm w-4 appearance-none checked:bg-[#00ff41]"
              />
              <h2 className="font-bold text-xl">Symbols</h2>
            </div>
          </div>
          <div className="p-10 flex gap-2 items-center">
            <div>Password length: </div>
            <input
              type="number"
              min="0"
              max="40"
              className="w-[45px] font-bold text-xl text-center border no-arrows outline-none bg-transparent"
            />
          </div>
        </div>

        <button className="self-start text-black bg-[#00ff41] px-6 py-2 rounded-lg">
          Generate
        </button>
      </div>
    </div>
  );
}
