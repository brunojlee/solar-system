import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
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
