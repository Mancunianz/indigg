import { useContext } from 'react';
import { GameContext } from '@rs/game/index';

const useGame = () => {
  const context = useContext(GameContext);
  if (context) return context;
  throw 'Game provider is not available in parent components tree';
};

export default useGame;