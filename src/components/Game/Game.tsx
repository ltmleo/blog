import React, { useState, useEffect, useRef } from 'react';
import '@site/src/css/custom.css';

// Definição de tipos
type ObstacleImage = string;

interface GameState {
  isJumping: boolean;
  position: number;
  obstaclePosition: number;
  gameOver: boolean;
  score: number;
  highScore: number;
  currentObstacle: ObstacleImage;
}

const obstacleImages: ObstacleImage[] = [
  require('@site/static/game/obstacles/1.png').default,
  require('@site/static/game/obstacles/2.png').default,
  require('@site/static/game/obstacles/3.png').default,
  require('@site/static/game/obstacles/4.png').default,
  require('@site/static/game/obstacles/5.png').default,
  require('@site/static/game/obstacles/6.png').default,
  require('@site/static/game/obstacles/7.png').default,
  require('@site/static/game/obstacles/8.png').default,
  require('@site/static/game/obstacles/9.png').default,
  require('@site/static/game/obstacles/10.png').default,
];

const playerImage: string = require('@site/static/game/player/player.png').default;

const getRandomObstacle = (): ObstacleImage => {
  const randomIndex: number = Math.floor(Math.random() * obstacleImages.length);
  return obstacleImages[randomIndex];
};

const Game: React.FC = () => {
  const [isJumping, setIsJumping] = useState<boolean>(false);
  const [position, setPosition] = useState<number>(0);
  const [obstaclePosition, setObstaclePosition] = useState<number>(100);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);
  const [currentObstacle, setCurrentObstacle] = useState<ObstacleImage>(getRandomObstacle());
  const gameRef = useRef<HTMLDivElement>(null);

  const handleJump = (): void => {
    if (!isJumping && !gameOver) {
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 400);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.code === 'Space') {
        handleJump();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isJumping, gameOver]);

  useEffect(() => {
    if (!gameOver) {
      const interval = setInterval(() => {
        setObstaclePosition((prev) => (prev > 0 ? prev - 1 : 100));
        setScore((prev) => prev + 1);
      }, Math.max(20 - Math.floor(score / 100), 5));

      return () => clearInterval(interval);
    }
  }, [gameOver, score]);

  useEffect(() => {
    if (obstaclePosition < 5 && obstaclePosition > 0 && position < 50) {
      setGameOver(true);
      setObstaclePosition(100);
      if (score > highScore) {
        setHighScore(score);
      }
    }
  }, [obstaclePosition, position, score, highScore]);

  useEffect(() => {
    if (isJumping) {
      setPosition(80);
    } else {
      setPosition(0);
    }
  }, [isJumping]);

  useEffect(() => {
    if (obstaclePosition === 100) {
      setCurrentObstacle(getRandomObstacle());
    }
  }, [obstaclePosition]);

  const resetGame = (): void => {
    setGameOver(false);
    setObstaclePosition(100);
    setPosition(0);
    setScore(0);
    setCurrentObstacle(getRandomObstacle());
  };

  return (
    <div
      ref={gameRef}
      onClick={handleJump}
      style={{
        position: 'relative',
        width: '100%',
        height: '200px',
        border: '1px solid var(--ifm-color-primary-dark)',
        overflow: 'hidden',
        backgroundColor: 'black',
        backgroundImage: 'url("/static/game/background/space.jpg")',
        backgroundSize: 'cover',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      {gameOver && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          <p style={{ fontSize: '24px', margin: '0 0 10px' }}>Game Over</p>
          <p style={{ fontSize: '18px', margin: '0 0 10px' }}>Score: {score}m</p>
          <p style={{ fontSize: '18px', margin: '0 0 20px' }}>High Score: {highScore}m</p>
          <button
            onClick={resetGame}
            style={{
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              backgroundColor: 'var(--ifm-color-primary)',
              color: 'white',
              border: 'none',
              fontSize: '16px',
            }}
          >
            Restart
          </button>
        </div>
      )}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          fontSize: '20px',
          color: 'var(--ifm-color-primary-lightest)',
        }}
      >
        Score: {score}m
      </div>
      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          fontSize: '20px',
          color: 'var(--ifm-color-primary-lightest)',
        }}
      >
        High Score: {highScore}m
      </div>
      <img
        src={playerImage}
        alt="Player"
        style={{
          position: 'absolute',
          bottom: `${position}px`,
          left: '40px',
          width: '50px',
          height: '50px',
          transition: 'bottom 0.1s',
        }}
      />
      <img
        src={currentObstacle}
        alt="Obstacle"
        style={{
          position: 'absolute',
          bottom: '0px',
          left: `${obstaclePosition}%`,
          width: '70px',
          height: '70px',
          transition: 'left 0.01s',
        }}
      />
    </div>
  );
};

export default Game;