import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import StepConnector from '@material-ui/core/StepConnector';

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      // backgroundImage: 'linear-gradient( 136deg, rgb(50, 205, 50) 0%, rgb(35,144,35) 50%, rgb(1, 50, 32) 100%)',
      backgroundColor: 'red'
    },
  },
  completed: {
    '& $line': {
      backgroundImage: 'linear-gradient( 136deg, rgb(50, 205, 50) 0%, rgb(35,144,35) 50%, rgb(1, 50, 32) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage: 'linear-gradient( 136deg, rgb(255,0,0) 0%, rgb(231,0,0) 50%, rgb(75,0,0) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage: 'linear-gradient( 136deg, rgb(50, 205, 50) 0%, rgb(35,144,35) 50%, rgb(1, 50, 32) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      <span style={{ fontSize: '1.2rem' }}>{String(props.icon)}</span>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function CustomizedSteppers({ rounds, activeRound }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeRound} connector={<ColorlibConnector />}>
        {rounds.map((round, i) => (
          <Step key={i}>
            <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
