import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

/* This is a higer order component. This is used to get the state */
import { connect } from 'react-redux';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
    <div className = 'header'>
        <Link to = "/" className = 'logo-container'>
            <Logo className = 'logo'/>
        </Link>
        <div className = 'options'>
            <Link to = "/shop" className = 'option'>SHOP</Link>
            <Link to = "/shop" className = 'option'>CONTACT</Link>
            {
                currentUser ?
                <div className = 'option' onClick = { () => auth.signOut() }>SIGN OUT</div>
                :
                <Link to = '/signin' className = 'option'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        { hidden ? null : <CartDropDown /> }

    </div>
);

/* When we load the application for the first time, we need hidden value to show or hide the cart dropdown, so the following lines will call the cart.reducer and the default state is returned, since we are requesting for state as props and we are not passing any action(action will be passed only when we dispatch) */
const mapStateToProps = state => {
   console.log('hidden ', state.cart.hidden);
   return {
       currentUser: state.user.currentUser,
       hidden: state.cart.hidden
   };
}

// 

export default connect(mapStateToProps)(Header);