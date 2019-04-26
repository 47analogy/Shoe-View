import React, { Component } from 'react';
import AddShoeForm from './AddShoeForm';
import DisplayShoe from './DisplayShoe';
import axios from 'axios';

const URL = 'http://localhost:5000/api' || 'production';

class DisplayShoeList extends Component {
	state = {
		shoeList: [],
		shoeName: '',
		designer: '',
		price: '',
		success: false
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

	//combine all 3 handlers
	onChangeShoeName = e => {
		this.setState({
			shoeName: e.target.value
		});
	};

	onChangeDesigner = e => {
		this.setState({
			designer: e.target.value
		});
	};

	onchangePrice = e => {
		this.setState({
			price: e.target.value
		});
	};

	handleButtonSubmit = e => {
		e.preventDefault();
		// TODO: MESSAGE
		this.setState({
			success: true
		});
		const newShoe = {
			shoeName: this.state.shoeName,
			designer: this.state.designer,
			price: this.state.price
		};
		console.log('submit', newShoe);
		axios
			.post(`${URL}/shoes`, newShoe)
			.then(res => {
				console.log('res.data', res.data);
			})
			.catch(err => {
				console.log(err);
			});

		this.setState({
			shoeName: '',
			designer: '',
			price: '',
			success: false
		});
	};

	render() {
		console.log('log render', this.state.shoeList);
		return (
			<div>
				<AddShoeForm
					shoeName={this.state.shoeName}
					designer={this.state.designer}
					price={this.state.price}
					sucess={this.state.succes}
					onChangeShoeName={this.onChangeShoeName}
					onChangeDesigner={this.onChangeDesigner}
					onchangePrice={this.onchangePrice}
					handleButtonSubmit={this.handleButtonSubmit}
				/>
				<DisplayShoe allShoes={this.state.shoeList} />
			</div>
		);
	}
}

export default DisplayShoeList;
