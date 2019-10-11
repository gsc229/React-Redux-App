import React from 'react';
import Breweries from './Breweries';

const Brewery = ({ brewery }) => {
  const {
    id,
    brewery_type,
    name,
    city,
    postal_code,
    state,
    street,
    latitude,
    longitude,
    phone,
    website_url
  } = brewery;

  return (
    <div className='brewery'>
      <h1>{name}</h1>
      <h3>type: {brewery_type}</h3>
      <div className='brewery-address'>
        <h4>Address</h4>
        <p>{street}</p>
        <p>
          {city}, {state} {postal_code}{' '}
        </p>
      </div>
      <h4>Phone: {phone}</h4>
      <h4>
        <a href={website_url}>{name}'s website</a>{' '}
      </h4>
      <h4>
        <a
          href={`https://www.google.com/maps/place/${name}/@${latitude},${longitude}`}
        >
          Google Maps
        </a>
      </h4>
    </div>
  );
};

export default Brewery;
