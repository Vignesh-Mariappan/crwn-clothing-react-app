import styled, { css } from 'styled-components';

const customButtonStyles = css
`
background-color: black;
color: white;
border: none;

&:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
}
`

const googleSignInButtonStyles = css
`
    color: white;
    background-color: #4285f4;
    border:none;

    &:hover {
        filter: brightness(95%);
    }
`;

const invertedButtonStyles = css
`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
    }
`

const getButtonStyles = props => {
    if(props.isGoogleSignIn) {
        return googleSignInButtonStyles;
    }
       
    return props.inverted ? invertedButtonStyles : customButtonStyles;
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: 100%;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${ getButtonStyles }
`;