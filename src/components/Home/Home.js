import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countries,setCountry]=useState([])
// Load Api Data
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data=>setCountry(data))
    },[])
    const headingStyle={
        textAlign:"center",
        fontSize:"45px",
        fontWeight:"600"
    }
    return (
        <div>
            <h2 style={headingStyle}>Total country: {countries.length}</h2>
            {
                countries.map(country => <Country country= {country} alpha2Code={country.alpha2Code}></Country>)
            }
        </div>
    );
};

export default Home;