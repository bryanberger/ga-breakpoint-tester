import React from 'react';
import 'assets/scss/App.scss';
import Breakpoint from 'components/Breakpoint';

class App extends React.PureComponent {
  render() {
    return (
      <div className="app">
        <Breakpoint name="xxl">
          <h3>xxl (1600-&#x221e;)</h3>
        </Breakpoint>
        <Breakpoint name="xl">
          <h3>xl (1200-1599px)</h3>
        </Breakpoint>
        <Breakpoint name="lg">
          <h3>lg (992-1199px)</h3>
        </Breakpoint>
        <Breakpoint name="md">
          <h3>md (768-991px)</h3>
        </Breakpoint>
        <Breakpoint name="sm">
          <h3>sm (576-767px)</h3>
        </Breakpoint>
        <Breakpoint name="xs">
          <h3>xs (0-575px)</h3>
        </Breakpoint>
      </div>
    );
  }
}

export default App;
