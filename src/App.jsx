import patternMobile from "./assets/pattern-divider-mobile.svg";
import patternDesktop from "./assets/pattern-divider-desktop.svg";
import iconDice from "./assets/icon-dice.svg";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [advice, changeAdvice] = useState("");
  const [number, changeNumber] = useState("");

  useEffect(() => {
    clickHandler();
  }, []);

  const clickHandler = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("no data");
        }
      })

      .then((data) => {
        console.log(data.slip.advice);
        changeAdvice((oldAdvice) => (oldAdvice = data.slip.advice));
        changeNumber((oldNumber) => (oldNumber = data.slip.id));
      })

      .catch((err) => {
        console.log("Something went wrong!", err);
      });
  };

  return (
    <main className="w-full grid place-content-center min-h-screen bg-Dark-Blue text-Light-Cyan text-center font-manrope font-bold">
      <section className="bg-Dark-Grayish-Blue max-w-[540px] px-12 pb-16 pt-12 mx-4 rounded-xl grid  justify-items-center gap-7 relative max-sm:px-8">
        <h1 className="max-sm:text-[9px] max-sm:tracking-[4px] text-[10px] text-Neon-Green tracking-[5px]">
          ADVICE #{number}
        </h1>
        <p className="text-[26px] max-sm:text-[22px]">{advice}</p>
        <img
          className="max-[500px]:hidden block"
          src={patternDesktop}
          alt="pattern divider"
        />
        <img
          className="max-[500px]:block hidden"
          src={patternMobile}
          alt="pattern divider"
        />
        <div
          onClick={clickHandler}
          id="dice"
          className=" bg-Neon-Green p-5 rounded-full grid place-content-center hover:cursor-pointer hover:shadow-custom-shadow absolute -bottom-8 transition-shadow duration-500"
        >
          <img className="" src={iconDice} alt="icon dice"></img>
        </div>
      </section>
    </main>
  );
}

export default App;
