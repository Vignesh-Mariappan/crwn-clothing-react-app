import styled, { css }  from 'styled-components';

import { Link } from 'react-router-dom';

/* Similar to SCSS mixins, write the common css code using css`` and use it wherever it's required 
*/
/* const OptionContainerStyles = css`
    padding: 10px 15px;
    font-size: 2rem;
    cursor: pointer;
`; */

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

/* For React's JSX element, it should be passed as an argument to the styled. styled will act as a higher order component for React elements, for HTML elements like div, styled.div`` can be used, refer the above case */
export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

/* css code is reused. String interpolate the  OptionContainerStyles*/
/* export const OptionLink = styled(Link)`
    ${ OptionContainerStyles }
`;

export const OptionDiv = styled.div`
    ${ OptionContainerStyles }
`; */

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    font-size: 2rem;
    cursor: pointer;
`;
