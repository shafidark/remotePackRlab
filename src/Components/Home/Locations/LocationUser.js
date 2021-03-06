import React, { useEffect, useState } from 'react';
import DevicesForm from './DevicesForm';
import logo1 from '../../../Resorces/logo1.png';
import logo2 from '../../../Resorces/logo2.png';
import logo3 from '../../../Resorces/logo3.png';
import './LocationStyle.css';
import '../../../responsive.css';
import {Link} from 'react-router-dom'

const LocationUser = (props) => {
    
    const {LocationID, addDevices, key} = props.data
    return (
        <div className="energy-meter-card-container col-md-4 text-center">
            
            <div className="card-main-container mb-1 me-2">
                <Link className="location-user-text" to={`/locations/${key}`}><div className="mb-3">
                    <div class="card card-container" >
                        
                        <div class="card-body">
                        <h6 className="card-text-h6 mb-2">{addDevices}</h6>
                        <p className="card-text-p mb-1">{LocationID}</p>
                        </div>
                    </div>
                    </div>
                </Link>
                        
                    
                        
            </div>
        </div>
        
    );
};

export default LocationUser;