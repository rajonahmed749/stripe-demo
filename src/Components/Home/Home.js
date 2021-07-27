import React from 'react';
import Menubar from '../Menubar/Menubar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Home = () => {
    return (
        <main>
            <Menubar/>            
            <div className="row justify-content-center mt-3">
                <div className="col-md-5">
                <h4>pay with stripe</h4>
                <ProcessPayment/>
                </div>
            </div>            
        </main>
    );
};

export default Home;