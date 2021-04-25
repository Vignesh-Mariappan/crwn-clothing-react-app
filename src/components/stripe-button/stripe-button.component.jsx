import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    console.log('Price is ', price);
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IjenrSFLdwwcf1hQMIxHwArXF7QHiQfymtR0bkGrpodpL1Yws6ZUgA3FsZzIt2AcuBPRjtTIQVgphIBHN16DBnA00IP6qETYa';

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    }

    return (<StripeCheckout 
            label = 'Pay Now'
            name = 'CRWN Clothing. Ltd'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description = {`Your total price is $ ${ price }`}
            amount = { priceForStripe }
            panelLabel = 'Pay Now'
            token = { onToken }
            stripeKey = { publishableKey }
        />);
}

export default StripeCheckoutButton;