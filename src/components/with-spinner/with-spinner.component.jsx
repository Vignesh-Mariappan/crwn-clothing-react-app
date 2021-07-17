import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styled-component';

/* Higher order component
   Will receive one component (WrappedComponent) as its parameter
   WithSpinner will receive ({ isLoading, ...otherProps }) as props
   if the isLoading is true, 
        return the spinner
   else
        return the WrappedComponent and pass the otherProps
    return the loaded component from the WithSpinner HOC
    Example
        const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
        <CollectionsOverviewWithSpinner isLoading = {true} {...props} />
*/
const WithSpinner = WrappedComponent => {
    const spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ?
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay> :
        <WrappedComponent { ...otherProps } />
    }

    return spinner;
}

export default WithSpinner;