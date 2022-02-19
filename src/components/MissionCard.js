import PropTypes from 'prop-types';
import React from 'react';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div
        className="card text-center"
        data-testid="mission-card"
      >
        <div className="card-body">
          <h2 className="card-title" data-testid="mission-name">{name}</h2>
          <h3 className="card-title" data-testid="mission-year">{year}</h3>
          <h4 className="card-title" data-testid="mission-country">{country}</h4>
          <p className="card-text" data-testid="mission-destination">{destination}</p>
        </div>
      </div>
    );
  }
}

export default MissionCard;

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
