import Button from '@material-ui/core/Button';

export default function NewGameForm({ gameStarted, setGameStarted }) {
  function startButtonClicked() {
    setGameStarted(true);
  }

  return (
    <>
      <div style={{ display: gameStarted ? 'none' : '' }}>
        <Button onClick={startButtonClicked} variant='contained'>
          Start New Game!
        </Button>
      </div>
    </>
  );
}
