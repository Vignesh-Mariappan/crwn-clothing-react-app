import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import ShopPage from './pages/shop/shop-page.component';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount = () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      /* if userAuth exists
         call createUserProfileDocument method and pass userAuth
         will get userRef as a return
         call the onSnapshot method and get the data and id in the database and set it 
         to the current user.
         else set the current user to null
      */

      if(userAuth) {
        let userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          console.log('snapshot ', snapshot.data().displayName);
          this.setState({
            currentUser: {
              id: snapshot.id,
              displayName: snapshot.data().displayName,
              email: snapshot.data().email,
              createdAt: snapshot.data().createdAt
              // instead of above three lines, also can use ...snapshot.data()
            }
          }, () => console.log('User saved in the state ', this.state));
        })
      } else {
        this.setState({ currentUser: null });
      }

    })
  }

  componentWillUnmount = () => {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser = { this.state.currentUser }/>
        <Route  path = '/shop' component = { ShopPage } />
        <Route exact={true} path = '/' component = { HomePage } />
        <Route path = '/signin' component = { SignInAndSignUp } />
      </div>
    );
  }
  
}

export default App;
