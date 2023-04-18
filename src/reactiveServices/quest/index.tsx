import { createContext, ProviderProps } from 'react';
import { QuestService } from '@rs/quest/quest.service';

export const QuestContext = createContext<QuestService | null>(null);

export type QuestProviderProps = ProviderProps<QuestService>;
const QuestProvider = (props: QuestProviderProps) => {
  const { children, value } = props;
  return (
    <QuestContext.Provider value={value}>{children}</QuestContext.Provider>
  );
};

export default QuestProvider;