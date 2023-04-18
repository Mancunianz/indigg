import { useContext } from 'react';
import { ClanContext } from '@rs/clan/index';

const useClan = () => {
  const context = useContext(ClanContext);
  if (context) return context;
  throw 'Clan provider is not available in parent components tree';
};

export default useClan;