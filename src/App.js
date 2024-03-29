import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

/* The following imports are for redux operations */
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

/* The following are used for reselect operations which is used to get the state in the mapStateToProps method */
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import ShopPage from './pages/shop/shop-page.component';
import HomePage from './pages/homepage/homepage.component';
import CheckoutPage from './pages/checkout/checkout.component.jsx';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount = () => {

    const { settingCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      /* When a new user logs in, unique uid will be created for the user in the firebase and it will be in the userAuth object
      if userAuth exists
        call createUserProfileDocument method and pass userAuth
        will get userRef as a return
        call the onSnapshot method and get the data and id in the database and set it 
        to the current user.
        else set the current user to null
      */

      if(userAuth) {
        let userRef = await createUserProfileDocument(userAuth);

        // Observer style of fetching the data from the firestore
        /* userRef.onSnapshot(snapshot => {
          // Setting the current user by passing the javascript object as an argument. This argument will be the user for setCurrentUser action and it will be dispatched by the dispatch method 
          settingCurrentUser({
              id: snapshot.id,
              displayName: snapshot.data().displayName,
              email: snapshot.data().email,
              createdAt: snapshot.data().createdAt
              // instead of above three lines, also can use ...snapshot.data()
          }, () => console.log('User saved in the state ', this.state));

        }) */

        // Promise way of fetching the data
        userRef.get().then(snapshot => {
          /* Setting the current user by passing the javascript object as an argument. This argument will be the user for setCurrentUser action and it will be dispatched by the dispatch method  */
          settingCurrentUser({
              id: snapshot.id,
              displayName: snapshot.data().displayName,
              email: snapshot.data().email,
              createdAt: snapshot.data().createdAt
              // instead of above three lines, also can use ...snapshot.data()
          }, () => console.log('User saved in the state ', this.state));

        })
      } else settingCurrentUser(null);
    })
  }

  componentWillUnmount = () => {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component= { HomePage  } />
          <Route path='/shop' component={ ShopPage } />
          <Route path = '/checkout' component = { CheckoutPage } />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUp />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

/* 
<Route path = '/shop' component = { ShopPage } />
        <Route exact={ true } path = '/' component = { HomePage } />
        <Route path = '/signin' render = { () => this.props.currentUser ? <Redirect to = '/' /> : < SignInAndSignUp /> } />
*/

/* Get the current user from the state */
/* const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  }
} */

// Using createStructuredSelector to get the state currentUser
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})


/* The object which is returning in this method will be passed as props to the App component, by setting the setCurrentUser in the app component, it will dispath the user-actions and the root reducer will update the store and dom gets updated */
const mapDispatchToProps = dispatch => {
  return {
    settingCurrentUser: user => {
      dispatch(setCurrentUser(user))
    }
  }
}

/* First argument is null because we are not mapping state to props i.e we don't want any state values in this component */
export default connect(mapStateToProps, mapDispatchToProps)(App);
