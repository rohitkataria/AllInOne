import React from 'react';
import { CustomTheme } from './interfaces';
export interface AppContextInterface {
  changeTheme: Function;
  theme: CustomTheme;
  menuColour: string;
}

export const AppContext = React.createContext(null as AppContextInterface | null);

export const AppContextProvider = AppContext.Provider;

export const AppContextConsumer = AppContext.Consumer;
