import React, { Component } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';

class AddShoe extends Component {
	state = {
		shoeName: '',
		designer: '',
		price: '',
		success: false
	};

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
		this.setState({
			shoeName: '',
			designer: '',
			price: '',
			success: true //TODO
		});
		console.log(this.state);
	};

	render() {
		return (
			<div className="shoe-form">
				<h1>Add a Shoe</h1>
				<Form success error stackable="true" onSubmit={this.handleButtonSubmit}>
					<Form.Group widths="equal">
						<Form.Input
							fluid
							type="text"
							label="Shoe Name"
							placeholder="Enter the shoe name"
							value={this.state.shoeName}
							onChange={this.onChangeShoeName}
						/>
						<Form.Input
							fluid
							type="text"
							label="Designer"
							placeholder="Enter the designer"
							value={this.state.designer}
							onChange={this.onChangeDesigner}
						/>
						<Form.Input
							fluid
							type="text"
							label="Price"
							placeholder="Enter the shoe price"
							value={this.state.price}
							onChange={this.onchangePrice}
						/>
					</Form.Group>
					{this.state.success ? (
						<Message
							success
							header="Done!!"
							content="Your shoe was added successfully"
						/>
					) : (
						console.log('message not sent')
						//     <Message
						//     error
						//     header="Whoops!!"
						//     content="There is a problem with the form, try again"
						// />
					)}
					<Button type="submit">Submit</Button>
				</Form>
			</div>
		);
	}
}

export default AddShoe;
