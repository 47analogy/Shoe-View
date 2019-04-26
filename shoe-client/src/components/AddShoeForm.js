import React, { Component } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';

const AddShoeForm = props => {
	const {
		shoeName,
		designer,
		price,
		success,
		onChangeShoeName,
		onChangeDesigner,
		onchangePrice,
		handleButtonSubmit
	} = props;

	return (
		<div className="shoe-form">
			<h1>Add a Shoe</h1>
			<Form success error stackable="true" onSubmit={handleButtonSubmit}>
				<Form.Group widths="equal">
					<Form.Input
						fluid
						type="text"
						label="Shoe Name"
						placeholder="Enter the shoe name"
						value={shoeName}
						onChange={onChangeShoeName}
					/>
					<Form.Input
						fluid
						type="text"
						label="Designer"
						placeholder="Enter the designer"
						value={designer}
						onChange={onChangeDesigner}
					/>
					<Form.Input
						fluid
						type="text"
						label="Price"
						placeholder="Enter the shoe price"
						value={price}
						onChange={onchangePrice}
					/>
				</Form.Group>
				{success ? (
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
};

export default AddShoeForm;
