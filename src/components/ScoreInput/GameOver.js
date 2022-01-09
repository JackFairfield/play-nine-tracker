function getSortedTotalScores(rounds) {
  let scores = {};

  for (let i = 0; i < rounds.length; i++) {
    const round = rounds[i];
    console.log(round);
    // for (let j = 0; j < round.scores.length; j++) {
    //   const { name, score } = round.scores[j];
    //   scores[name] = scores[name] || round.scores[j];
    //   scores[name].score += score;
    // }
  }
  return Object.keys(scores)
    .map((key) => scores[key])
    .sort((a, b) => a.score - b.score);
}

export default function GameOver({
  rounds,
  setRounds,
  setActiveRound,
  setGameOver,
}) {
  const scores = getSortedTotalScores(rounds);

  return (
    <>
      <div>Game over</div>
      {scores.map(({ name, score }) => (
        <>
          <p>{name}</p>
          <p>{score}</p>
        </>
      ))}
    </>
  );
}
