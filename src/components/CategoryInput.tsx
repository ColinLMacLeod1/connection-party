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

function CategoryInput({ words, title, color, className }: CategoryInputProps) {
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

export default CategoryInput;

interface BaseComponentProps {
  words: string[];
  title: string;
  color: string;
  className?: string;
  key: string;
  ref: LegacyRef<HTMLDivElement> | null;
}

interface CategoryInputProps {
  words: string[];
  title: string;
  color: string;
  className?: string;
}
