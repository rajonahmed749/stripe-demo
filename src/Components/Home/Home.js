import React from 'react';
import Menubar from '../Menubar/Menubar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Info from './Info';

const Home = () => {
    return (
        <main>
            <Menubar />
            <div className="row justify-content-center mt-3 ">
                <div className="col-md-5 p-2">
                    <h4>Pay with stripe</h4>
                    <ProcessPayment />
                </div>
                <div className="col-md-3 text-center mt-5">
                    <Info />
                </div>
            </div>
        </main>
    );
};

export default Home;