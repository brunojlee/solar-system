import PropTypes from 'prop-types';
import React from 'react';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div
        className="card text-center"
        data-testid="planet-card"
      >
        <div className="card-body planetCard">
          <img
            src={ planetImage }
            className="card-img-top"
            alt={ `Planeta ${planetName}` }
          />
          <h5 className="card-title" data-testid="planet-name">{planetName}</h5>
        </div>
      </div>
    );
  }
}

export default PlanetCard;

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
