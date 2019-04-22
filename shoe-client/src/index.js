import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui/dist/semantic.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddShoe from './components/AddShoe.js';
import DisplayShoe from './components/DisplayShoe.js';
import EditShoe from './components/EditShoe.js';

const routing = (
	<Router>
		<div>
			<Route exact path="/" component={App} />
			<Route path="/display-shoe/:id" component={DisplayShoe} />
			<Route path="/add-shoe" component={AddShoe} />
			<Route path="/edit-shoe/:id" component={EditShoe} />
		</div>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
