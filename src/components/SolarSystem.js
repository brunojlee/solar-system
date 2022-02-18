import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <article className="card-group row">
          {
            planets.map((planeta) => (<PlanetCard
              planetName={ planeta.name }
              planetImage={ planeta.image }
              key={ planeta.name }
            />))
          }
        </article>
      </div>
    );
  }
}

export default SolarSystem;
