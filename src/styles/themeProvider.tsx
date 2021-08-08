import React, { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import { AppContext } from '../AppContext';
import { GenericType } from '../interfaces';
import theme from './lightTheme';

// default theme with COLORS & SIZES
const DefaultTheme = {
  COLORS: theme.COLORS,
};

export default DefaultTheme;

export function withTheme<T = GenericType>(
  Component: React.ComponentType<T>,
  styles: Function = () => null,
): ForwardRefExoticComponent<PropsWithoutRef<T> & RefAttributes<T>> {
  const forwardRef: React.FC<T> = (props, ref) => {
    return (
      <AppContext.Consumer>
        {(appContext) => (
          <Component
            {...props}
            ref={ref}
            theme={{ ...DefaultTheme, ...appContext.theme }}
            styles={styles && styles({ ...DefaultTheme, ...appContext.theme })}
            appContext={appContext}
          />
        )}
      </AppContext.Consumer>
    );
  };
  return React.forwardRef(forwardRef);
}
