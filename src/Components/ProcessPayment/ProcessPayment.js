import React from 'react';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51JHvdXDp2DJbL4lhSOBGscpqExQzDXRgwcRs5nLWyCnOtl3F0xaURQC1CKmfJOoqjrW2WZGDXVoZERGru5uw3Jeu00xRrAWD56');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            {/* <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            /> */}
            <SimpleCardForm />
        </Elements>
    );
};

export default ProcessPayment;