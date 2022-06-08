import React from 'react';
import './App.css';
import Header from './components/Header';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <div className="fullContainer">
        <Header />
        <Missions />
      </div>
    );
  }
}

export default App;
