// import { Transition } from "motion/react";
import * as motion from "motion/react-client";
import { useRef, LegacyRef } from "react";

const MotionTile = motion.create(BaseComponent);

function BaseComponent({
  words,
  title,
  color,
  className,
  ref,
}: BaseComponentProps) {
  return (
    <>
      <div
        key={color}
        ref={ref}
        className={`${color === "yellow" ? "bg-theme-yellow" : color === "green" ? "bg-theme-green" : color === "blue" ? "bg-theme-blue" : color === "purple" ? "bg-theme-purple" : ""} px-2 rounded-lg text black ${className}`}
      >
        <p>{title}</p>
        <p className="font-medium">{`${words[0]}, ${words[1]}, ${words[2]}, ${words[3]}`}</p>
      </div>
    </>
  );
}

function CorrectBlock({ words, title, color, className }: CorrectBlockProps) {
  const ref = useRef(null);
  return (
    <MotionTile
      words={words}
      title={title}
      color={color}
      className={className}
      ref={ref}
      layout
      animate={{ y: [50, 0, 0], opacity: [0, 0.5, 1] }}
      transition={{ duration: 0.5 }}
    />
  );
}

export default CorrectBlock;

interface BaseComponentProps {
  words: string[];
  title: string;
  color: string;
  className?: string;
  key: string;
  ref: LegacyRef<HTMLDivElement> | null;
}

interface CorrectBlockProps {
  words: string[];
  title: string;
  color: string;
  className?: string;
}

// const spring: Transition = {
//   duration: 0.8,
//   delay: 0.5,
//   ease: [0, 0.71, 0.2, 1.01],
// };
