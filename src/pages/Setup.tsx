import { useState } from "react";

function Setup() {
  const [count, setCount] = useState(0);
  const buttonClick = () => {
    const test = count;
    setCount(test);
  };

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
                Setup
              </h1>
              <p
                className={
                  "mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"
                }
              >
                Add your ideas
              </p>
              <div className={"mt-10 flex items-center justify-center gap-x-6"}>
                <a
                  href="#"
                  className={
                    "font-tile rounded-md bg-theme-beige px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:bg-theme-blue hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-theme-blue"
                  }
                  onClick={buttonClick}
                >
                  Back
                </a>
                <a
                  href="#"
                  className={
                    "font-tile rounded-md bg-theme-beige px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:bg-theme-purple hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-purple"
                  }
                  onClick={buttonClick}
                >
                  Next
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Setup;
