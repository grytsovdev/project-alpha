import { useState } from "react";
const useGameState = () => {
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [turn, setTurn] = useState(0);
  const [letterColors, setLetterColor] = useState(
    Array(6).fill(Array(5).fill(""))
  );
  const [isWin, setWin] = useState(false);

  const solution = "бузок";

  const handleKeyUp = (key: KeyboardEvent) => {
    if (key.key === "Enter" && currentGuess.length > 4) {
      addGuess(currentGuess);
    }
    if (key.key === "Backspace") {
      setCurrentGuess(currentGuess.slice(0, -1));
    }
    if (!/^[А-ЩЬЮЯҐЄІЇа-щьюяґєії]$/.test(key.key) || currentGuess.length > 4) {
      return;
    }

    setCurrentGuess((prev) => prev + key.key);
  };

  const addGuess = (guess: string) => {
    const prevGuesses = guesses.slice();
    prevGuesses[turn] = guess;
    checkWord(guess);
    setGuesses(prevGuesses);
    setTurn((prevTurn) => {
      return prevTurn + 1;
    });
    setCurrentGuess("");
  };

  const checkWord = (word: string) => {
    const prevLetterColors = letterColors.slice();

    if (solution === word) {
      const newColors = Array(5).fill("green");
      prevLetterColors[turn] = newColors;
      setLetterColor(prevLetterColors);
      console.log("solution");
      return;
    }

    console.log("hello");
    const newLetterColors = prevLetterColors[turn].map(
      (color: string, i: number) => {
        const solutionLetter = [...solution][i];
        console.log(solutionLetter);
        if (word[i] === solutionLetter) {
          return "green";
        }
        if (solution.includes(word[i])) {
          return "orange";
        } else {
          return "gray";
        }
      }
    );

    prevLetterColors[turn] = newLetterColors;
    setLetterColor(prevLetterColors);
  };

  return { currentGuess, handleKeyUp, guesses, turn, letterColors, isWin };
};

export default useGameState;
