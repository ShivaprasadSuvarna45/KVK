import React from 'react';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Inventory from './components/Inventory/Inventory';
import Events from './components/Dashboard/Dashboard';
import Sidebar from './components/Other/Sidebar';
import Header from './components/Other/Header';
import Footer from './components/Other/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default class App extends React.Component {
  render() {
    return (
    	<Router>
    		<Switch>
    		<Route exact path='/login' component={Login}/>
        <Route component={DefaultContainer}/>
    		</Switch>
    	</Router>
     )
  }
}


const DefaultContainer = () =>(
  <div className="container appcontainer">
    <Header/>
    <Sidebar/>
    <Footer/>
  </div>
)