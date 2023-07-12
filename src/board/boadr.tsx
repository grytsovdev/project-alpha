import "./board.css";
import BoardRow from "../board-row/board-row";

function Board(props: {
  currentGuess: string;
  guesses: Array<string>;
  turn: number;
  letterColors: Array<Array<string>>;
}) {
  return (
    <div className="board">
      {props.guesses.map((guess, i) => {
        if (i == props.turn)
          return (
            <BoardRow
              key={i}
              guess={props.currentGuess}
              lettersColors={props.letterColors[i]}
            ></BoardRow>
          );
        return (
          <BoardRow
            key={i}
            guess={guess}
            lettersColors={props.letterColors[i]}
          ></BoardRow>
        );
      })}
    </div>
  );
}

export default Board;
