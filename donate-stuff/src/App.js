import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import SignOut from './components/SignOut/SignOut';
import DonateStuff from './components/DonateStuff/DonateStuff';
import AuthProvider from './components/Auth/Auth';
import PrivateRoute from './components/Auth/PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/signout' component={SignOut} />
          <PrivateRoute path='/donate-stuff' component={DonateStuff} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
