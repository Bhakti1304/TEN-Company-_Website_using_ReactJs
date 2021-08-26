import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import SigninPage from './components/Signin';
import MyCart from './components/my cart';
//import Sidebar from './components/Sidebar';
//import Navbar from './components/Navbar';
import Services from './components/Services';
import ContactUs from './components/contactUs';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/sign-in" component={SigninPage} exact />
        <Route path="/mycart" component={MyCart} exact />
        <Route path="/services" component={Services} exact />
        <Route path="/contactUs" component={ContactUs} exact />
      </Switch>
    </Router>
  );
}

export default App;
