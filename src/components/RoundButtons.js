import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function RoundButtons({ rounds, setActiveRound, activeRound }) {
  const handleNext = () => {
    setActiveRound((prevActiveRound) => prevActiveRound + 1);
  };

  const handleBack = () => {
    setActiveRound((prevActiveRound) => prevActiveRound - 1);
  };

  return (
    <div>
      <div>
        {/* <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography> */}
        <div>
          <Button variant='contained' color='default' disabled={activeRound === 0} onClick={handleBack}>
            Back
          </Button>
          <Button variant='contained' color='primary' onClick={handleNext}>
            {activeRound === rounds.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
}
