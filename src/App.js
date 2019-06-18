import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

//import css
import './App.css';

//use material ui or reactstrap
//import { Button } from 'reactstrap';
//import Button  from '@material-ui/core/Button';


//import context 
import { AuthProvider } from './Context/AuthContext'

//import pages
const SignIn = React.lazy(() =>  import('./Views/SignIn'))
const SignUp = React.lazy(() => import('./Views/SignUp'))
const Page404 = React.lazy(() => import('./Views/Page404'))
const ForgotPwd = React.lazy(() => import('./Views/ForgotPwd'))

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;


function App() {
  return (
    <div className="App"> 
      <AuthProvider>    
        <HashRouter>
            <React.Suspense fallback={loading()}>
              <Switch>
                <Route path="/" exact name="Sign-Up" component={SignUp} />
                <Route path="/SignIn" exact name="Sign-In" component={SignIn} />
                <Route path="/ForgotPassword" exact name="Forgot-Password" component={ForgotPwd} />
                <Route path='/404' component={Page404} />
                <Redirect from='*' to='/404' />
              </Switch>
            </React.Suspense>
        </HashRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
