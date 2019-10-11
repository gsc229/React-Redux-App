import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Brewery from './Brewery';
// action creator: (goes in connect function at bottom)
import { fetchBreweries } from '../actions';

const Breweries = props => {
  console.log('Breweries.js ', props);

  useEffect(() => {
    props.fetchBreweries();
  }, []);

  if (props.isFetching) {
    //could do a spinner (checkout-react-loader-spinner on npm)
    return <h2>Loading Breweries...</h2>;
  }

  return (
    <div>
      {props.error && <p>{props.error}</p>}
      {props.breweries.map(brewery => (
        <Brewery key={brewery.id} brewery={brewery} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    breweries: state.breweries,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchBreweries }
)(Breweries);
