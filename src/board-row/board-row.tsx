import "./board-row.css";
function Box(props: { letter: string; bgColor: string }) {
  return <div className={`letter-box ${props.bgColor}`}>{props.letter}</div>;
}
function BoardRow(props: { guess: string; lettersColors: Array<string> }) {
  if (props.guess) {
    const guess = [...props.guess];
    return (
      <div className="row">
        {guess
          .concat(Array.from({ length: 5 - guess.length }, () => ""))
          .map((letter, i) => {
            return (
              <Box
                key={i}
                letter={letter}
                bgColor={props.lettersColors[i]}
              ></Box>
            );
          })}
      </div>
    );
  }
  return (
    <div className="row">
      <Box key={0} letter="" bgColor="" />
      <Box key={1} letter="" bgColor="" />
      <Box key={2} letter="" bgColor="" />
      <Box key={3} letter="" bgColor="" />
      <Box key={4} letter="" bgColor="" />
    </div>
  );
}

export default BoardRow;
