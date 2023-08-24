import { ReactNode } from 'react';
import { ThemeProvider } from './theme-provider';

type AppProviderProps = {
  children: ReactNode;
};
export function AppProvider({ children }: AppProviderProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
