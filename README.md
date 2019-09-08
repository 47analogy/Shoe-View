# Shoe-View

## Table of contents

- [General info](#general-info)
- [Demo](#demo)
- [Setup](#setup)
- [Built with](#built-with)

## General info

This project allows a user to view shoes and upload favorite shoes to
database. Motivation is to demonstrate a CRUD app using the MERN stack.
Images are uploaded using Multer and stored on Cloudinary.

## Demo

Live demo: https://shoe-view.herokuapp.com

<div>
    <img src="./img/shoe view.png" width="300" height="230" />
</div>

## Setup

To run this project locally, install both the server and<br/>
client (must have a local instance of Mongo running):

```
$ yarn install
$ yarn start
```

## Built with

Project created with:

- React
- Node / Express
- Mongo / Mongoose
- Semantic UI React

## API Routes

### Shoes

| Method | Endpoint       | Description                           |
| ------ | -------------- | ------------------------------------- |
| GET    | /api/shoes     | Display all shoes                     |
| POST   | /api/shoes     | Create a new shoe                     |
| GET    | /api/shoes/:id | Display one shoe based on the shoe ID |
| PUT    | /api/shoes/:id | Update a shoe based on the shoe ID    |
| DELETE | /api/shoes/:id | Delete a shoe based on the shoe ID    |

### Post Schema

Posts in the database conform to the following structure:

```js
{
  shoe: "The post name", // String, required
  designer: "The shoe brand / designer" // String, required
  price: "The shoe price" // Number, required
  image: "The shoe image file path" // String, required

}
```
