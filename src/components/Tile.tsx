function Tile({ word, onClick, isSelected } : MyComponentProps) {
  return (
    <>
      <div onClick={() => onClick(word)} className={`${isSelected ? "bg-theme-selected-tile text-white" : "bg-theme-beige text-black"} px-2 py-6 rounded-lg hover:cursor-pointer hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-purple`}>
        {word}
      </div>
    </>
  );
}

export default Tile;

interface MyComponentProps {
  word: string;
  onClick: (word: string) => void;
  isSelected: boolean;
}
