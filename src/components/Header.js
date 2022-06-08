import React from 'react';
import SolarSystem from './SolarSystem';
import Title from './Title';

class Header extends React.Component {
  render() {
    return (
      <header className="text-center headerTitle">
        <h1>Sistema Solar</h1>
        <Title headline="Planetas" />
        <SolarSystem />
      </header>
    );
  }
}

export default Header;
