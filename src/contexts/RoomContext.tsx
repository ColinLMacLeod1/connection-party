import { createContext, useState } from "react";
import { Room } from "../types/global";

const defaultRoom = { roomID: "", games: [] } as Room;
const defaultContext = {room: defaultRoom, updateRoom: (newRoom: Room) => {
    console.log("New Room: ", newRoom);
  }}
const RoomContext = createContext(defaultContext);

const RoomProvider = ({ children }: RoomProviderProps) => {
  const [room, setRoom] = useState(defaultRoom);

  const updateRoom = (newRoom: Room) => {
    setRoom(newRoom);
  };

  return (
    <RoomContext.Provider value={{ room, updateRoom }}>
      {children}
    </RoomContext.Provider>
  );
};

export { RoomContext, RoomProvider };

interface RoomProviderProps {
  children: string | JSX.Element | JSX.Element[];
}
