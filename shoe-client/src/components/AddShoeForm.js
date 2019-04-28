import React from 'react';
import './AddShoeForm.css';
import { Form, Button, Message, Container } from 'semantic-ui-react';

const AddShoeForm = props => {
	const {
		shoeName,
		designer,
		price,
		image,
		success,
		onChangeShoeName,
		onChangeDesigner,
		onchangePrice,
		addShoe,
		uploadShoe,
		handleButtonSubmit
	} = props;

	return (
		<div className="shoe-form">
			<Container>
				{/* <h1>Add a Shoe</h1> */}
				<div className="add-image">
					<input type="file" onChange={addShoe} />
					<button onClick={uploadShoe}>Upload</button>
				</div>
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
						// TODO: MESSAGE
						//     <Message
						//     error
						//     header="Whoops!!"
						//     content="There is a problem with the form, try again"
						// />
					)}
					<Button type="submit">Add Shoe</Button>
				</Form>
			</Container>
		</div>
	);
};

export default AddShoeForm;
