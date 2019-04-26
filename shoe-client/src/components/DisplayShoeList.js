import React, { Component } from 'react';
import DisplayShoe from './DisplayShoe';
import axios from 'axios';

const URL = 'http://localhost:5000/api' || 'production';

class DisplayShoeList extends Component {
	state = {
		shoeList: []
	};

	componentDidMount() {
		axios
			.get(`${URL}/shoes`)
			.then(res => {
				this.setState({
					shoeList: res.data.shoes
				});
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		console.log('log render', this.state.shoeList);
		return (
			<div>
				<DisplayShoe allShoes={this.state.shoeList} />
			</div>
		);
	}
}

export default DisplayShoeList;
