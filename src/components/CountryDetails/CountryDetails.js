import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./CountryDetails.css";

const CountryDetails = () => {
    const {countryName}=useParams()
    const[country,setCountry]=useState({})
// Load Api Data for country name
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res=>res.json())
        .then(data => setCountry(data[0]))
        .catch(Error=>console.log(Error))
    },[])
    return (
        <div className="country-details">

            <h2>Details For: {countryName}</h2>

            <img src={country.flag} alt=""/>
            {/* Data  */}
            <h4>Capital Name: {country.capital}</h4>
           <h5>Native Name: {country.nativeName}</h5>
           <h5>Total Population: {country.population}</h5>
           <h5>Languages: {country.languages && country.languages[0].name}</h5>
           <h5>Region: {country.region}</h5>
           <h5>Sub-region: {country.subregion}</h5>
           <h5>Total Area: {country.area}</h5>
           <h5>Around Border: {" "+country.borders}</h5>
           <h5>Alpha Code: {country.alpha2Code}</h5>
           <h5>Time Zone:  {country.timezones}</h5>
           <h5>Numeric Code: {country.numericCode}</h5>
           <h5>Currencies: {country.currencies && country.currencies[0].name}</h5>
           <h5>Currencies symbols: {country.currencies && country.currencies[0].symbol}</h5>
           <h5>Calling Code:  +{country.callingCodes}</h5>
           <h5>Top Level Domain:  {country.topLevelDomain}</h5>
          
        </div>
    );
};

export default CountryDetails;