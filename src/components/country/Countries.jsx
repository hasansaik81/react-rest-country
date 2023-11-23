import React, { useEffect, useState } from 'react';
import Country from '../SingleContry/Country';
import './Countries.css';

const Countries = () => {
    const [Countries,setcountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setcountries(data));
    } ,[])
    return (
        <div >
            <h2> Hello countries :{Countries.length} </h2>
        <div className="countries-container"> 
            {
              Countries.map(country=> <Country country={country} key= {country.cca3} ></Country> )  
            }
        </div>

           

            {/* {
                Countries.map(country=>console.log(country))
            } */}
  {/* {
                Countries.map(country=> <Country name={country.name.common} population={country.population} area={country.area} region={country.region} ></Country> )
            }
এখানে বড় হাতের লেখা কান্ট্রী  নাম হচ্ছে  কমপোনেন্ট আর ছোট হাতের লেখা হচ্ছে কান্ট্রী এর ডাটা । এখন আমরা ডিস্ট্রাকশন করে  প্রপস আকারে কমপোনেন্ট  এ পাঠাবো */}
        </div>
    );
};

export default Countries;