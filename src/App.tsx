import React from 'react';
import { AppContextInterface, AppContextProvider } from './AppContext';

import { HomeStackScreen } from './routes';
import { lightTheme } from './styles';

const appContextInitialState: AppContextInterface = {
  changeTheme: () => { },
  theme: lightTheme,
  menuColour: lightTheme.COLORS.GREEN,
}
export default function App(): React.ReactNode {
  const [state, setState] = React.useState(appContextInitialState);
  // For navigation tracking...
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();
  const updateState = (newState: Object): void => {
    setState((prevState) => {
      return { ...prevState, ...newState };
    });
  };
  return (
    <AppContextProvider
      value={{
        ...state,
        changeTheme: (menuColour: string) => updateState({ menuColour }),
      }}>  <HomeStackScreen />
    </AppContextProvider>

  );
};


