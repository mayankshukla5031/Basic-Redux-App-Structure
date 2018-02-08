import React, {Component} from "react";
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

//import TextField from 'material-ui/TextField';

import Topbar from '../components/topbar';

import "../css/app.css";
import logo from '../images/logo.svg';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {}
	}

	componentDidMount(){
		//fetch userinfo here
		console.log('propsss', this.props);
	}

	render(){
		if(this.props.isLoggedIn)
			return <Redirect to={{ pathname: '/login', state: { from: this.props.location }}}/> 
		return (
			<div>
				<Topbar/>
				<img alt='logo' src={logo}/>
			</div>
		)
	}
}

const mapStateToProps = (store) => {
  	return {
    	isLoggedIn: store.userInfoReducer.isLoggedIn
  	}
}

const mapDispatchToProps = (dispatch) => {
  	return {

  	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);





