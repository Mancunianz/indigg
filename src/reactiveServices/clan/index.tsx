import { createContext, ProviderProps } from 'react';
import { ClanService } from '@rs/clan/clan.service';

export const ClanContext = createContext<ClanService | null>(null);

export type ClanProviderProps = ProviderProps<ClanService>;

const ClanProvider = (props: ClanProviderProps) => {
  const { children, value } = props;
  return <ClanContext.Provider value={value}>{children}</ClanContext.Provider>;
};

export default ClanProvider;