import React, { Component } from 'react';
import { RootStore } from './RootStore';


export default function storeProviderHOC(
  WrappedComponent: React.ComponentType,
  Provider: React.ComponentType,
  store: RootStore,
): React.ReactNode {
  return class extends Component {
    render() {
      return (
        <Provider {...store}>
          <WrappedComponent {...this.props} />
        </Provider>
      );
    }
  };
}
