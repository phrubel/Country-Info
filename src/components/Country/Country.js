import React from 'react';
// // Import React Hook
import { useHistory } from 'react-router';
import  "./Country.css";
const Country = (props) => {
    const {flag,name,capital}=props.country
    const history=useHistory()

     //Button Event Handler
    const handleShowBtn=(countryName)=>{
        history.push(`/country/${countryName}`)
    }


    return (
        <div className="country-body">
            <img src={flag} alt=""/>
            <p> {name}</p>
            <p>Capital: {capital}</p>
            <button className="show-btn" onClick={()=>handleShowBtn(name)} >Show Details</button>
        </div>
    );
};

export default Country;