# User Registration API using TypeORM and Express.js

This project implements a simple API using TypeORM and Express.js to handle user registration. Users can register by providing a username and password.

## Getting Started

1. Clone the repository and navigate to the project directory.
2. Install the required packages using `npm install`.

## Usage

1. Set up your MySQL database and update the connection configuration.
2. Define the `User` entity using TypeORM decorators.
3. Test the registration endpoint using Postman or an API testing tool.

## Registration Endpoint

- **URL:** POST http://localhost:3000/register
- **Request Body:** JSON object with `username` and `password` and `email `fields.

### Example Request

```json
POST http://localhost:3000/register

{
  "username": "exampleuser",
  "password": "secretpassword",
  "email"   :"example@domain.com"
}
```
## DELETE BY ID Endpoint 
- **URL:** POST http://localhost:3000/delete/:id
### Example Request
DELETE http://localhost:3000/delete/12312
