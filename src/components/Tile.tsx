import { Transition } from "motion/react";
import * as motion from "motion/react-client";
import { useRef, LegacyRef } from "react";

const MotionTile = motion.create(BaseTile);

function BaseTile({ word, onClick, isSelected, ref, color, className }: BaseTileProps) {
  return (
    <>
      <div
        onClick={() => onClick(word)}
        key={word}
        ref={ref}
        className={`${isSelected ? "bg-theme-selected-tile text-white" : "bg-theme-beige text-black"} ${color === "yellow" ? "text-white bg-theme-yellow" : color === "green" ? "text-white bg-theme-green" : color === "blue" ? "text-white bg-theme-blue" : color === "purple" ? "text-white bg-theme-purple" : "hover:cursor-pointer hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-selected-tile"} rounded-lg ${className}`}
      >
        {word}
      </div>
    </>
  );
}

function Tile({ word, onClick, isSelected, color, className }: TileProps) {
  const ref = useRef(null);
  return (
    <MotionTile
      word={word}
      ref={ref}
      onClick={onClick}
      isSelected={isSelected}
      className={className}
      transition={spring}
      color={color}
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
  color: string;
  className?: string;
}

interface TileProps {
  word: string;
  onClick: (word: string) => void;
  isSelected: boolean;
  color: string;
  className?: string;
}

const spring: Transition = {
  type: "spring",
  damping: 27,
  stiffness: 300,
};
