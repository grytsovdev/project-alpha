import Board from "../board/boadr";
import { useEffect } from "react";
import useGameState from "../hooks/gameState";

function Game() {
  const { currentGuess, handleKeyUp, guesses, turn, letterColors, isWin } =
    useGameState();

  if (isWin) {
    setTimeout(() => alert("you won"), 2000);
  }
  useEffect(() => {
    document.addEventListener("keydown", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyUp);
    };
  });

  return (
    <div className="game">
      <Board
        currentGuess={currentGuess}
        guesses={guesses}
        turn={turn}
        letterColors={letterColors}
      />
    </div>
  );
}

export default Game;
