import { useContext } from "react";
import { useNavigate } from "react-router";
import { useForm, SubmitHandler } from "react-hook-form";
import { RoomContext } from "../contexts/RoomContext";

import { GameSetup } from "../types/global";

function Setup() {
  const navigate = useNavigate();
  const { room, updateRoom } = useContext(RoomContext);
  const { register, handleSubmit, watch } = useForm<GameSetup>();

  const onSubmit: SubmitHandler<GameSetup> = (data) => {
    console.log("Output: ", JSON.stringify(data));

    updateRoom(createNewRoom(room.roomID, data));

    navigate("/game?roomid=custom");
  };

  console.log(watch("yellow.title"));
  return (
    <>
      <div className={"bg-white h-full flex items-center justify-center"}>
        <div className={"mx-0 lg:max-w-2xl md:w-xl w-[24.5rem] px-[0.5rem]"}>
          <form className={"text-center"} onSubmit={handleSubmit(onSubmit)}>
            <p
              className={
                "mt-8 text-lg font-medium text-pretty text-gray-500 md:text-xl/8"
              }
            >
              {`${"Make your own game!"}`}
            </p>
            <div className="my-1 h-10 relative text-sm font-semibold p-2">
              Fill out all of the fields. No duplicate words!
            </div>
            <div className="grid grid-cols-4 gap-[0.5rem] font-tile font-semibold text-black uppercase mb-8">
              <div
                className={`bg-theme-yellow px-2 rounded-lg text black col-span-4 h-[8rem] flex  flex-col items-center justify-center text-wrap text-[1rem] md:text-lg`}
              >
                <div className="w-full px-3 md:px-6">
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 w-full text-center"
                    placeholder="Group Description"
                    maxLength={30}
                    {...register("yellow.title")}
                  />
                </div>
                <div className="block font-medium w-full">
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 1"
                    maxLength={20}
                    {...register("yellow.word1")}
                  />
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 2"
                    maxLength={20}
                    {...register("yellow.word2")}
                  />
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 3"
                    maxLength={20}
                    {...register("yellow.word3")}
                  />

                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 4"
                    maxLength={20}
                    {...register("yellow.word4")}
                  />
                </div>
              </div>
              <div
                className={`bg-theme-green px-2 rounded-lg text black col-span-4 h-[8rem] flex  flex-col items-center justify-center text-wrap text-[1rem] md:text-lg`}
              >
                <div className="w-full px-3 md:px-6">
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 w-full text-center"
                    placeholder="Group Description"
                    maxLength={30}
                    {...register("green.title")}
                  />
                </div>
                <div className="block font-medium w-full">
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 1"
                    maxLength={20}
                    {...register("green.word1")}
                  />
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 2"
                    maxLength={20}
                    {...register("green.word2")}
                  />
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 3"
                    maxLength={20}
                    {...register("green.word3")}
                  />

                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 4"
                    maxLength={20}
                    {...register("green.word4")}
                  />
                </div>
              </div>
              <div
                className={`bg-theme-blue px-2 rounded-lg text black col-span-4 h-[8rem] flex  flex-col items-center justify-center text-wrap text-[1rem] md:text-lg`}
              >
                <div className="w-full px-3 md:px-6">
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 w-full text-center"
                    placeholder="Group Description"
                    maxLength={30}
                    {...register("blue.title")}
                  />
                </div>
                <div className="block font-medium w-full">
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 1"
                    maxLength={20}
                    {...register("blue.word1")}
                  />
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 2"
                    maxLength={20}
                    {...register("blue.word2")}
                  />
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 3"
                    maxLength={20}
                    {...register("blue.word3")}
                  />

                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 4"
                    maxLength={20}
                    {...register("blue.word4")}
                  />
                </div>
              </div>
              <div
                className={`bg-theme-purple px-2 rounded-lg text black col-span-4 h-[8rem] flex  flex-col items-center justify-center text-wrap text-[1rem] md:text-lg`}
              >
                <div className="w-full px-3 md:px-6">
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 w-full text-center"
                    placeholder="Group Description"
                    maxLength={30}
                    {...register("purple.title")}
                  />
                </div>
                <div className="block font-medium w-full">
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 1"
                    maxLength={20}
                    {...register("purple.word1")}
                  />
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 2"
                    maxLength={20}
                    {...register("purple.word2")}
                  />
                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 3"
                    maxLength={20}
                    {...register("purple.word3")}
                  />

                  <input
                    className="border-b-2 shadow-sm hover:scale-105 m-1 text-center w-2/5"
                    placeholder="Word 4"
                    maxLength={20}
                    {...register("purple.word4")}
                  />
                </div>
              </div>
            </div>
            <div className={"flex items-center justify-center gap-x-6"}>
              <button
                className={
                  "w-30 h-12 flex items-center justify-center font-tile rounded-full border border-black px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:cursor-pointer hover:bg-theme-selected-tile hover:text-white hover:scale-110 hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-selected-tile"
                }
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
              >
                Back
              </button>
              <button
                className={
                  "w-30 h-12 flex items-center justify-center font-tile rounded-full border border-black px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:cursor-pointer hover:bg-theme-selected-tile hover:text-white hover:scale-110 hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-selected-tile"
                }
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

function createNewRoom(roomID: string, data: GameSetup) {
  return {
    roomID,
    games: [
      {
        createdBy: "",
        title: "",
        yellow: {
          title: data.yellow.title,
          words: [
            data.yellow.word1,
            data.yellow.word2,
            data.yellow.word3,
            data.yellow.word4,
          ],
          hint: data.yellow.hint,
        },
        green: {
          title: data.green.title,
          words: [
            data.green.word1,
            data.green.word2,
            data.green.word3,
            data.green.word4,
          ],
          hint: data.green.hint,
        },
        blue: {
          title: data.blue.title,
          words: [
            data.blue.word1,
            data.blue.word2,
            data.blue.word3,
            data.blue.word4,
          ],
          hint: data.blue.hint,
        },
        purple: {
          title: data.purple.title,
          words: [
            data.purple.word1,
            data.purple.word2,
            data.purple.word3,
            data.purple.word4,
          ],
          hint: data.purple.hint,
        },
      },
    ],
  };
}

export default Setup;
