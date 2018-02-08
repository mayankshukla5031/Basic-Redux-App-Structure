import React from 'react';
import ReactDOM from 'react-dom';

/*--------------------React Router and Redux Part-------------------*/
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
// import {Switch} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

/*----Needed for theme and onTouchTap on material ui components-------*/
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {indigoA200} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

/*--------------------Custom Components--------------------*/
import App from './containers/app.js';
import Reducers from './reducers';
import Login from './containers/login';
import Register from './containers/register';
import ResetPassword from './containers/resetPassword';

import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: indigoA200,
    	primary2Color: indigoA200,
	},
});

var store = createStore(Reducers, applyMiddleware(thunk));
injectTapEventPlugin();

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
				<Route component={Login} />
				<Switch>
					<Route exact path="/" component={App}/>
					<Route path="/login" component={Login}/>
					<Route path="/register" component={Register}/>
					<Route path="/resetpassword" component={ResetPassword}/>
				</Switch>
				</div>
			</MuiThemeProvider> 
		</Router> 
  	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
