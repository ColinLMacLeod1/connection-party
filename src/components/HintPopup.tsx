import * as motion from "motion/react-client";
import { useRef, LegacyRef } from "react";

const MotionTile = motion.create(BaseComponent);

function BaseComponent({ text, ref, className }: BaseComponentProps) {
  return (
    <div
      ref={ref}
      key={text}
      className={`p-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-tile text-white text-sm font-semibold bg-theme-selected-tile rounded-lg ${className}`}
    >
      {text}
    </div>
  );
}

function HintPopup({ text, className }: HintPopupProps) {
  const ref = useRef(null);
  return (
    <MotionTile
      text={text}
      ref={ref}
      className={className}
      animate={{
        y: [10, 0, 0, 0, 0, 0, 0],
        opacity: [0, 0.5, 1, 1, 1, 1, 1, 1, 0],
      }}
      transition={{ duration: 2 }}
    />
  );
}

export default HintPopup;

interface BaseComponentProps {
  text: string;
  ref: LegacyRef<HTMLDivElement> | null;
  className?: string;
}

interface HintPopupProps {
  text: string;
  className?: string;
}
