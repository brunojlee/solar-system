import PropTypes from 'prop-types';
import React from 'react';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div
        className="card-body text-center w-25 border border-5"
        data-testid="mission-card"
      >
        <div>
          <h3
            className="card card-title border border-2"
            data-testid="mission-name"
          >
            {name}
          </h3>
        </div>
        <div>
          <h4 className="card-text" data-testid="mission-year">{year}</h4>
          <h4 className="card-text" data-testid="mission-country">{country}</h4>
          <h4 className="card-text" data-testid="mission-destination">{destination}</h4>
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
