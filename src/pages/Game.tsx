import { useState, useEffect, useContext } from "react";
import { RoomContext } from "../contexts/RoomContext";
import Tile from "../components/Tile";
import defaultRoom from "../assets/sampleRoom.json";

function Game() {
  const [selected, setSelected] = useState<string[]>([]);
  const [wordList, setWordList] = useState<string[]>([]);
  const { room, updateRoom } = useContext(RoomContext);

  useEffect(() => {
    updateRoom(defaultRoom);
  });

  useEffect(() => {
    updateRoom(defaultRoom);
    if (room.games.length > 0) {
      const initalWordList = shuffleArray([
        ...room.games[0].yellow.words,
        ...room.games[0].green.words,
        ...room.games[0].blue.words,
        ...room.games[0].purple.words,
      ]);
      setWordList(initalWordList);
    }
  }, [room.games, updateRoom]);

  const onSubmit = () => {
    console.log("SUBMIT");
  };

  const onShuffle = () => {
    const newWordList = shuffleArray([...wordList]);
    setWordList(newWordList);
  };

  const onSelect = (word: string) => {
    if (selected.includes(word)) {
      console.log("Unselecting word: ", word);
      setSelected(selected.filter((item) => item !== word));
    } else {
      if (selected.length < 4) {
        console.log("Selected word: ", word);
        setSelected([...selected, word]);
      }
    }
  };

  function shuffleArray([...array]: string[]) {
    return array.sort(() => Math.random() - 0.5);
  }

  return (
    <>
      <div className={"bg-white h-full flex items-center justify-center"}>
        <div className={"relative isolate"}>
          <div className={"mx-auto max-w-2xl"}>
            <div className={"text-center"}>
              <p
                className={
                  "mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"
                }
              >
                Make groups of four!
              </p>
              <ul className="grid grid-cols-4 gap-4 font-tile font-semibold text-black uppercase my-8">
                {wordList.map((word) => (
                  <Tile
                    word={word}
                    key={word}
                    onClick={onSelect}
                    isSelected={selected.includes(word)}
                  />
                ))}
              </ul>
              <div className={"flex items-center justify-center gap-x-6"}>
                <div
                  className={
                    "font-tile rounded-full border border-black px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:cursor-pointer hover:bg-theme-selected-tile hover:text-white hover:scale-110 hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-selected-tile"
                  }
                  onClick={onShuffle}
                >
                  Shuffle
                </div>
                <div
                  className={
                    "font-tile rounded-full border border-black px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:cursor-pointer hover:bg-theme-selected-tile hover:text-white hover:scale-110 hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-selected-tile"
                  }
                  onClick={onSubmit}
                >
                  Submit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Game;
