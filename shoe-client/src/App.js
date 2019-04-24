import React, { Component } from 'react';
import './App.css';
import AddShoe from './components/AddShoe';

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* Header/Nav */}
				<AddShoe />
			</div>
		);
	}
}

export default App;
