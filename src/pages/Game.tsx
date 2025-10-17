import { useState, useEffect, useContext } from "react";
import { useSearchParams, useNavigate } from "react-router";
import { RoomContext } from "../contexts/RoomContext";
import Tile from "../components/Tile";
import CorrectBlock from "../components/CorrectBlock";
import defaultRoom from "../assets/sampleRoom.json";
import HintPopup from "../components/HintPopup";

function hasNumberOfMatchingValues(
  array1: string[],
  array2: string[],
  requiredCount: number
) {
  let matchCount = 0;
  for (const item of array1) {
    if (array2.includes(item)) {
      matchCount++;
    }
  }
  return matchCount === requiredCount;
}

function Game() {
  const navigate = useNavigate();
  const [ searchParams ] = useSearchParams();
  const { room, updateRoom } = useContext(RoomContext);
  const [selected, setSelected] = useState<string[]>([]);
  const [wordList, setWordList] = useState<string[]>([]);
  const [correctList, setCorrectList] = useState<string[]>([]);
  const [hintList, setHintList] = useState<string[]>([]);


  useEffect(() => {
    updateRoom(defaultRoom);
  }, []);

  useEffect(() => {
    console.log("Search params: ", searchParams.get("roomid"))
  }, [searchParams]);

  useEffect(() => {
    console.log("CorrectList: ", JSON.stringify(correctList));
  }, [correctList]);

  useEffect(() => {
    correctReorder();
    console.log("Correct list: ", JSON.stringify(correctList));
  }, [correctList]);

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

  const addPopup = (text:string) => {
    setHintList([...hintList, text]);
    //TODO: cleanup pop ups
  }

  const onSubmit = () => {
    if (selected.length !== 4) {
      addPopup("Select 4 words!");
      return;
    }
    let isWrong = true;
    ["yellow", "green", "blue", "purple"].forEach((key) => {
      if (
        hasNumberOfMatchingValues(
          selected,
          room.games[0][key as "yellow" | "green" | "blue" | "purple"].words,
          4
        )
      ) {
        isWrong = false;
        setSelected([]);
        setCorrectList([...correctList, key]);
        correctReorder();
        addPopup("CORRECT! 🎉");
        console.log("CORRECT!");
      } else if (
        hasNumberOfMatchingValues(
          selected,
          room.games[0][key as "yellow" | "green" | "blue" | "purple"].words,
          3
        )
      ) {
        console.log("One Away! For: ", key);
        isWrong = false;
        addPopup("One Away...");
      } 
    });
    if(isWrong) addPopup("Nope :( Try Again!");
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
      if (selected.length < 4 && correctColor(word) === "blank") {
        console.log("Selected word: ", word);
        setSelected([...selected, word]);
      }
    }
  };

  const shuffleArray = ([...array]: string[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const correctColor = (word: string) => {
    for (const correctCategory of correctList) {
      if (
        room.games[0][
          correctCategory as "yellow" | "green" | "blue" | "purple"
        ].words.includes(word)
      ) {
        return correctCategory;
      }
    }

    return "blank";
  };

  const correctReorder = () => {
    const correctOrder = [];
    for (const correctCategory of correctList) {
      correctOrder.push(
        ...room.games[0][
          correctCategory as "yellow" | "green" | "blue" | "purple"
        ].words
      );
    }

    setWordList([
      ...correctOrder,
      ...wordList.filter((word) => correctColor(word) === "blank"),
    ]);
  };

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
              {`${ searchParams.get("roomid") === "example" ? "This is just a sample, the abbility to join room is coming soon!" : "Make groups of four!"}`} 
            </p>
            <div className="my-1 h-10 relative">
              {hintList.map((text) => (
                <HintPopup text={text} />
              ))}
            </div>
            <ul className="grid grid-cols-4 gap-[0.5rem] font-tile font-semibold text-black uppercase mb-8">
              {correctList.map((correctCategory) => {
                const currentCategory =
                  room.games[0][
                    correctCategory as "yellow" | "green" | "blue" | "purple"
                  ];
                return (
                  <CorrectBlock
                    words={currentCategory.words}
                    title={currentCategory.title}
                    color={correctCategory}
                    className="col-span-4 h-[5.5rem] flex  flex-col items-center justify-center text-wrap text-[0.75rem] md:text-lg"
                  />
                );
              })}
              {wordList
                .filter((word) => correctColor(word) === "blank")
                .map((word) => (
                  <Tile
                    word={word}
                    key={word}
                    onClick={onSelect}
                    isSelected={selected.includes(word)}
                    color={correctColor(word)}
                    className="h-[5.5rem]  md:w-auto flex items-center justify-center text-wrap text-[0.75rem] md:text-lg"
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
                onClick={onShuffle}
              >
                Shuffle
              </div>
              <div
                className={
                  "w-30 h-12 flex items-center justify-center font-tile rounded-full border border-black px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:cursor-pointer hover:bg-theme-selected-tile hover:text-white hover:scale-110 hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-selected-tile"
                }
                onClick={onSubmit}
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

export default Game;
