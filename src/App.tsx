import React from 'react';
import { createStage } from './utils/helper';
import { StyledTetrisWrapper, StyledTetris } from './App.styles';
import Stage from './components/Stage';
import Display from './components/Display';
import StartButton from './components/StartButton';

const App: React.FC = () => {
  const [dropTime, setDroptime] = React.useState<null | number>(null)
  const [gameOver, setGameOver] = React.useState(true)

  const gameArea = React.useRef<HTMLDivElement>(null)

  return (
    <StyledTetrisWrapper role='button' tabIndex={0}>
      <StyledTetris>
        <div className='display'>
          {gameOver ? (
            <>
              <Display gameOver={gameOver} text='Game Over!' />
              <StartButton callback={() => null} />
            </>
          ) : (
            <>
              <Display text={`Score: `} />
              <Display text={`Rows: `} />
              <Display text={`Level: `} />
            </>
          )}
        </div>
        <Stage stage={createStage()} />
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default App