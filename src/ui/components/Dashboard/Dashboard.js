import React,{ Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class Dashboard extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div><NavLink to='/'>Login</NavLink>
			<NavLink to='/inventory'>Inventory</NavLink>
			<NavLink to='/events'>Events</NavLink></div>)
	}
}