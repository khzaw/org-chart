import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from './theme';

import { Card } from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: 'flex',
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Card name="Anna Gong" title="Chief Executive Officer" />
      </div>
    </ThemeProvider>
  );
}

export default App;
