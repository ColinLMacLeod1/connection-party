import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div className={"bg-white h-full flex items-center justify-center"}>
        <div className={"relative isolate"}>
          <div className={"mx-auto max-w-2xl"}>
            <div className={"text-center"}>
              <h1
                className={
                  "text-5xl font-semibold tracking-tight text-balance text-black sm:text-7xl"
                }
              >
                Connection Party!
              </h1>
              <p
                className={
                  "mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"
                }
              >
                Join or Create a room:
              </p>
              <div className={"mt-10 flex items-center justify-center gap-x-6"}>
                <a
                  href="#"
                  className={
                    "font-tile rounded-md bg-theme-beige px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:bg-theme-blue hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-theme-blue"
                  }
                  onClick={() => navigate("/game/123")}
                >
                  Join Room
                </a>
                <a
                  href="#"
                  className={
                    "font-tile rounded-md bg-theme-beige px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:bg-theme-purple hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-purple"
                  }
                  onClick={() => navigate("/setup")}
                >
                  Create Room
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
