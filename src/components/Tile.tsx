import { Transition } from "motion/react";
import * as motion from "motion/react-client";
import { useRef, LegacyRef } from "react";

const MotionTile = motion.create(BaseTile);

function BaseTile({ word, onClick, isSelected, ref }: BaseTileProps) {
  return (
    <>
      <div
        onClick={() => onClick(word)}
        key={word}
        ref={ref}
        className={`${isSelected ? "bg-theme-selected-tile text-white" : "bg-theme-beige text-black"} px-2 py-6 rounded-lg hover:cursor-pointer hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-purple`}
      >
        {word}
      </div>
    </>
  );
}

function Tile({ word, onClick, isSelected }: TileProps) {
  const ref = useRef(null);
  return (
    <MotionTile
      word={word}
      ref={ref}
      onClick={onClick}
      isSelected={isSelected}
      transition={spring}
      layout
    />
  );
}

export default Tile;

interface BaseTileProps {
  word: string;
  onClick: (word: string) => void;
  isSelected: boolean;
  key: string;
  ref: LegacyRef<HTMLDivElement> | null;
}

interface TileProps {
  word: string;
  onClick: (word: string) => void;
  isSelected: boolean;
}

const spring: Transition = {
  type: "spring",
  damping: 27,
  stiffness: 300,
};
