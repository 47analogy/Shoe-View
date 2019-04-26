import React, { Component } from 'react';
import './App.css';
import DisplayShoeList from './components/DisplayShoeList';

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* Header/Nav */}
				<DisplayShoeList />
			</div>
		);
	}
}

export default App;
