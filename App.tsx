import React from 'react';
import { Provider } from 'react-redux';
import store from '@/slices/store';
import { MainNavigation } from '@/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
