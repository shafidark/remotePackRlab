import React from 'react';
import template from '../../../Resorces/3-progettazione-elettronica.jpg';
import './Home.css';

const Welcome = () => {
    return (
        <div>
            <section className="welcome-section text-center pt-4">
                <div className="welcome-container">
                    <h1 className="homePage-title">Welcome to the RLAB</h1>
                    <h3 className="full-name">Ulises Ramos Lab</h3>
                    <p className="homePage-p">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                    <div className="welcome-img mt-5">
                        <img src={template} alt="" />
                    </div>
                
                
            </section>
            
        </div>
    );
};

export default Welcome;