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
		image: null,
		success: false,
	};

	componentDidMount() {
		axios
			.get(`${URL}/shoes`)
			.then(res => {
				this.setState({
					shoeList: res.data.shoes,
				});
			})
			.catch(err => {
				console.log(err);
			});
	}

	// combine all 3 handlers
	onChangeShoeName = e => {
		this.setState({
			shoeName: e.target.value,
		});
	};

	onChangeDesigner = e => {
		this.setState({
			designer: e.target.value,
		});
	};

	onchangePrice = e => {
		this.setState({
			price: e.target.value,
		});
	};

	addShoe = e => {
		e.preventDefault();
		this.setState({
			image: e.target.files[0],
		});
	};

	handleButtonSubmit = e => {
		e.preventDefault();
		// TODO: MESSAGE
		// this.setState({
		// 	success: true
		// });

		let newShoe = new FormData();

		let shoeData = {
			shoeName: this.state.shoeName,
			designer: this.state.designer,
			price: this.state.price,
			image: this.state.image,
		};

		console.log('shoe-data', shoeData);

		newShoe.append('shoeName', this.state.shoeName);
		newShoe.append('designer', this.state.designer);
		newShoe.append('price', this.state.price);
		newShoe.append('image', this.state.image);

		for (let value of newShoe.values()) {
			console.log('value: ', value); //  --> shows file info
		}

		const config = {
			headers: {
				// 'Content-Type': 'multipart/form-data',
				'Content-Type': 'application/json',
				enctype: 'multipart/form-data',
			},
		};

		console.log('ns', newShoe);
		//console.log("config", config)
		console.log('WTFFFF', this.state.image);
		axios
			.post(`${URL}/shoes`, newShoe, config)
			.then(res => {
				console.log('resdata', res.data);
				this.setState(prevState => ({
					success: true,
					shoeList: [newShoe, ...prevState.shoeList],
				}));
				console.log('sucess');
			})
			.catch(err => {
				console.log('error with posting', err);
			});

		this.setState({
			shoeName: '',
			designer: '',
			price: '',
			image: null,
			success: false,
		});
	};

	render() {
		return (
			<div>
				<AddShoeForm
					shoeName={this.state.shoeName}
					designer={this.state.designer}
					price={this.state.price}
					image={this.state.image}
					success={this.state.succes}
					addShoe={this.addShoe}
					uploadShoe={this.uploadShoe}
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
