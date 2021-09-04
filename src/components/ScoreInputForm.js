import React from 'react';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import RoundButtons from './RoundButtons';

export default function ScoreInputForm({ activeRound, rounds, setRounds, setActiveRound }) {
  function handleScoreChange(e, playerIndex) {
    const tempRounds = [...rounds].map((round, i) => {
      if (activeRound === i) {
        round.scores[playerIndex].score = Number(e.target.value);
      }
      return round;
    });
    setRounds(tempRounds);
  }

  function getTotalScore(playerIndex) {
    return rounds.reduce((acc, curr) => {
      return acc + curr.scores[playerIndex].score;
    }, 0);
  }

  return (
    <>
      <div>
        <Card variant='outlined'>
          <CardContent>
            {rounds[activeRound].scores.map(({ name, score }, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', paddingBottom: '10px' }}>
                <span style={{ flex: '1' }}>
                  {name} ({getTotalScore(i)})
                </span>
                <Input
                  onChange={(e) => handleScoreChange(e, i)}
                  type='number'
                  style={{ fontSize: '2.6rem', flex: '1' }}
                  variant='outlined'
                  label={name}
                  value={score}
                />
              </div>
            ))}
          </CardContent>
          <CardActions>
            <RoundButtons activeRound={activeRound} rounds={rounds} setActiveRound={setActiveRound} />
          </CardActions>
        </Card>
      </div>
    </>
  );
}
