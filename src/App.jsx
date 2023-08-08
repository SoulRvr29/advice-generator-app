import patternMobile from "./assets/pattern-divider-mobile.svg";
import patternDesktop from "./assets/pattern-divider-desktop.svg";
import iconDice from "./assets/icon-dice.svg";

function App() {
  return (
    <main className="w-full grid place-content-center min-h-screen bg-Dark-Blue text-Light-Cyan text-center font-manrope font-bold">
      <section className="bg-Dark-Grayish-Blue max-w-[540px] px-12 pb-16 pt-12 mx-4 rounded-xl grid  justify-items-center gap-7 relative">
        <h1 className="text-[10px] text-Neon-Green tracking-[5px]">
          ADVICE #117
        </h1>
        <p className="text-[26px]">
          "It is easy to sit up and take notice, what's difficult is getting up
          and taking action."
        </p>
        <img src={patternDesktop} alt="pattern divider" />
        <div
          id="dice"
          className=" bg-Neon-Green p-5 rounded-full grid place-content-center hover:cursor-pointer hover:shadow-custom-shadow absolute -bottom-8"
        >
          <img className="" src={iconDice} alt="icon dice"></img>
        </div>
      </section>
    </main>
  );
}

export default App;
