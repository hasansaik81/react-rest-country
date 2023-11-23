import React from 'react';
import './Country.css'

const Country = (props) => {
const {area,name,region,flags}=props.country
  return (
    <div className='country bg-warnign' >
      <h1>Name:{name.common} </h1>
      <img src={flags.png}  alt="" />
      <p>Area:{area} </p>
      <p><small>Region:{region} </small></p>
      {/* <h2>Country name:{props.name} </h2>
      <h3>population:{props.population} </h3>
      <small>Area:{props.area} </small>
      <small>Region:{props.region} </small> */}
    </div>
  );
};

export default Country;