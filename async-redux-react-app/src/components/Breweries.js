import React from 'react';
import { connect } from 'react-redux';

const Breweries = props => {
  console.log('Breweries.js ', props);
  return (
    <div className='breweries-container'>
      <h1>Breweries</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    breweries: state.breweries
  };
};

export default connect(
  mapStateToProps,
  {}
)(Breweries);
