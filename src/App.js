import React from 'react';
import AppBar from './components/AppBar';
import Switch from './components/Switch';

import './App.css';

function App() {
  const [state, setState] = React.useState({
    theme: true,
  });

  const theme = (el) => {
    setState({theme: el})
  }

  return (
  <div className={state.theme ? "App" : "App_Light"}>
      <AppBar />

      <div className={state.theme ? "container" : "container_ligth"}>
        <h1>DeFi the Odds</h1>
        <h5>Crypto Decentralised ETFs</h5>
        <h6>coming soon</h6>
      </div>
      <Switch theme={theme}/>
    </div>
  );
}

export default App;
