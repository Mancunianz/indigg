import { createContext, ProviderProps } from 'react';
import { GameService } from '@rs/game/game.service';

export const GameContext = createContext<GameService | null>(null);

export type GameProviderProps = ProviderProps<GameService>;
const GameProvider = (props: GameProviderProps) => {
  const { children, value } = props;
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameProvider;