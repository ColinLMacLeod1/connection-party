import { useNavigate } from "react-router";
import CorrectBlock from "../components/CorrectBlock";

function Setup() {
  const navigate = useNavigate();

  return (
    <>
      <div className={"bg-white h-full flex items-center justify-center"}>
        <div className={"mx-0 lg:max-w-2xl md:w-xl w-[24.5rem] px-[0.5rem]"}>
          <div className={"text-center"}>
            <p
              className={
                "mt-8 text-lg font-medium text-pretty text-gray-500 md:text-xl/8"
              }
            >
              {`${"Make your own game!"}`}
            </p>
            <div className="my-1 h-10 relative text-sm font-semibold p-2">
              Fill out all of the fields
            </div>
            <ul className="grid grid-cols-4 gap-[0.5rem] font-tile font-semibold text-black uppercase mb-8">
              {["yellow", "green", "blue", "purple"].map((color) => (
                <CorrectBlock
                  words={["test", "test", "test", "test"]}
                  title={"test"}
                  color={color}
                  className="col-span-4 h-[5.5rem] flex  flex-col items-center justify-center text-wrap text-[0.75rem] md:text-lg"
                />
              ))}
            </ul>
            <div className={"flex items-center justify-center gap-x-6"}>
              <div
                className={
                  "w-30 h-12 flex items-center justify-center font-tile rounded-full border border-black px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:cursor-pointer hover:bg-theme-selected-tile hover:text-white hover:scale-110 hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-selected-tile"
                }
                onClick={() => navigate("/")}
              >
                Back
              </div>
              <div
                className={
                  "w-30 h-12 flex items-center justify-center font-tile rounded-full border border-black px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:cursor-pointer hover:bg-theme-selected-tile hover:text-white hover:scale-110 hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-selected-tile"
                }
                onClick={() => {
                  console.log("SUBMIT!");
                }}
              >
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Setup;
