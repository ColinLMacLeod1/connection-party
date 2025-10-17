import { useNavigate } from "react-router";

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
            <div className="grid grid-cols-4 gap-[0.5rem] font-tile font-semibold text-black uppercase mb-8">
              <div
                className={`bg-theme-yellow px-2 rounded-lg text black col-span-4 h-[8rem] flex  flex-col items-center justify-center text-wrap text-[1rem] md:text-lg`}
              >
                <div className="w-full px-3 md:px-6">
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 w-full text-center"
                    placeholder="Group Decription"
                    maxLength={30}
                  />
                </div>
                <div className="block font-medium w-full">
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 1"
                    maxLength={20}
                  />
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 2"
                    maxLength={20}
                  />
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 3"
                    maxLength={20}
                  />

                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 4"
                    maxLength={20}
                  />
                </div>
              </div>
              <div
                className={`bg-theme-green px-2 rounded-lg text black col-span-4 h-[8rem] flex  flex-col items-center justify-center text-wrap text-[1rem] md:text-lg`}
              >
                <div className="w-full px-3 md:px-6">
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 w-full text-center"
                    placeholder="Group Decription"
                    maxLength={30}
                  />
                </div>
                <div className="block font-medium w-full">
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 1"
                    maxLength={20}
                  />
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 2"
                    maxLength={20}
                  />
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 3"
                    maxLength={20}
                  />

                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 4"
                    maxLength={20}
                  />
                </div>
              </div>
              <div
                className={`bg-theme-blue px-2 rounded-lg text black col-span-4 h-[8rem] flex  flex-col items-center justify-center text-wrap text-[1rem] md:text-lg`}
              >
                <div className="w-full px-3 md:px-6">
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 w-full text-center"
                    placeholder="Group Decription"
                    maxLength={30}
                  />
                </div>
                <div className="block font-medium w-full">
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 1"
                    maxLength={20}
                  />
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 2"
                    maxLength={20}
                  />
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 3"
                    maxLength={20}
                  />

                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 4"
                    maxLength={20}
                  />
                </div>
              </div>
              <div
                className={`bg-theme-purple px-2 rounded-lg text black col-span-4 h-[8rem] flex  flex-col items-center justify-center text-wrap text-[1rem] md:text-lg`}
              >
                <div className="w-full px-3 md:px-6">
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 w-full text-center"
                    placeholder="Group Decription"
                    maxLength={30}
                  />
                </div>
                <div className="block font-medium w-full">
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 1"
                    maxLength={20}
                  />
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 2"
                    maxLength={20}
                  />
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 3"
                    maxLength={20}
                  />

                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 4"
                    maxLength={20}
                  />
                </div>
              </div>
            </div>
            <div className={"flex items-center justify-center gap-x-6"}>
              <button
                className={
                  "w-30 h-12 flex items-center justify-center font-tile rounded-full border border-black px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:cursor-pointer hover:bg-theme-selected-tile hover:text-white hover:scale-110 hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-selected-tile"
                }
                onClick={() => navigate("/")}
              >
                Back
              </button>
              <button
                className={
                  "w-30 h-12 flex items-center justify-center font-tile rounded-full border border-black px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:cursor-pointer hover:bg-theme-selected-tile hover:text-white hover:scale-110 hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-selected-tile"
                }
                onClick={() => {
                  console.log("SUBMIT!");
                  navigate("/game");
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Setup;
