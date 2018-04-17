import React ,{Component} from 'react';
import {BrowserRouter as Router , Link ,Route } from 'react-router-dom'
import Inventory from '../Inventory/Inventory'
import Dashboard from '../Dashboard/Dashboard'
import Events from '../Events/Events'

export default class Sidebar extends Component{
	constructor(props){
		super(props)
	}
	render(){
		const routes = [
		  	{
		    path: "/Dashboard",
		    exact: true,
		    sidebar: () => <div>Dashboard!</div>,
		    main: () => <Dashboard/>
		  },
		  {
		    path: "/Inventory",
		    sidebar: () => <div>Inventory!</div>,
		    main: () => <Inventory/>
		  },
		  {
		    path: "/Events",
		    sidebar: () => <div>Events!</div>,
		    main: () => <Events/>
		  }
		];

		return (
			<Router>
    <div className="inner-container" style={{ display: "flex" }}>
      <div
        style={{
          padding: "10px",
          width: "40%",
          background: "#f0f0f0"
        }}
      >
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/Inventory">Inventory</Link>
          </li>
          <li>
            <Link to="/Events">Events</Link>
          </li>
        </ul>

        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.sidebar}
          />
        ))}
      </div>

      <div style={{ flex: 1, padding: "10px" }}>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </div>
  </Router>
			)
	}
}