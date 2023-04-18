import { useContext } from 'react';
import { QuestContext } from '@rs/quest/index';

const useQuest = () => {
  const context = useContext(QuestContext);
  if (context) return context;
  throw 'Quest provider is not available in parent components tree';
};

export default useQuest;