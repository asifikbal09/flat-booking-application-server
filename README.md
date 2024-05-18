# Flat Sharing Backend Server

Welcome to the Flat Sharing Backend Server! This project serves as the backbone for a comprehensive flat-sharing application designed to streamline the process of finding and managing shared accommodations. Built with a modern and robust tech stack, this server ensures secure and efficient handling of user data and flat listings.

Key features of this server include user authentication, flat listing management, and booking functionalities. Utilizing Express.js for the server framework, TypeScript for type safety, Prisma as the ORM, and JWT for authentication, this server is designed to be scalable, secure, and easy to maintain.

Whether you're a developer looking to understand how to implement a backend for a similar application or a user eager to see how the server powers the flat-sharing experience, this documentation will guide you through the setup, configuration, and usage of the backend server.

Let's dive into the details and get your server up and running!


### Flats-sharing-application-live-link : https://flat-sharing-aplication-server-site.vercel.app/

## Technology Stack

This project leverages a variety of modern technologies to ensure a robust, scalable, and secure backend server. Here's a breakdown of the key components and their purposes:

- **Express.js**: A fast, and minimalist web framework for Node.js, used to build the server and manage routing.

- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript, providing type safety and enhancing code quality and maintainability.

- **Prisma**: An open-source ORM (Object-Relational Mapping) tool that simplifies database access and schema management. Prisma allows for easy database migrations and provides a type-safe query builder.

- **JWT (JSON Web Tokens)**: A compact, URL-safe means of representing claims to be transferred between two parties. Used for securely transmitting information and authenticating users.

- **Zod**: A TypeScript-first schema declaration and validation library. Zod is used to validate request data and ensure that it conforms to expected formats and types.

- **Http-status codes**: A library that provides a comprehensive list of HTTP status codes and their descriptions, facilitating clear and consistent API responses.

- **dotenv**: A zero-dependency module that loads environment variables from a `.env` file into `process.env`. This allows for easy configuration management and keeps sensitive data secure.

- **ts-node-dev**: A development tool that compiles TypeScript code on the fly and restarts the server upon file changes, improving development efficiency and workflow.

- **bcrypt**: A password-hashing function designed to secure user passwords by hashing and salting them, making it difficult for attackers to retrieve the original passwords from the database.

These technologies collectively ensure that the backend server is efficient, secure, and easy to develop and maintain. Each tool and library was chosen for its specific strengths and contributions to the overall functionality of the server.


## Routes

The Flat Sharing Backend Server provides several API endpoints to manage user authentication, flat listings, and booking processes. Below is an overview of the main routes available in the application:

### User Routes

- **Register User**
  - **Endpoint**: `POST /api/register`
  - **Description**: Registers a new user.
  - **Request Body**:
    - `name` (string): The name of the user.
    - `email` (string): The email address of the user.
    - `password` (string): The password for the user account.
    - `bio` (string): A brief biography of the user.
    - `profession` (string): The user's profession.
    - `address` (string): The address of the user.
  - **Response**: JSON object with user details.

- **Login User**
  - **Endpoint**: `POST /api/login`
  - **Description**: Authenticates a user and returns a JWT token.
  - **Request Body**:
    - `email` (string): The email address of the user.
    - `password` (string): The password for the user account.
  - **Response**: JSON object with JWT token.

- **Get User Profile**
 - **Endpoint**: `GET /api/profile`
 - **Description**: This endpoint retrieves the profile information of a specific user.
 - **Request Headers**:
    - `Authorization` (string): Bearer token.
 - **Response:**
    A JSON object containing the user's profile details or an error message.

- **Update User Profile**
- **Endpoint**: `PUT /api/profile`
- **Description**: This endpoint updates the profile information of a specific user.
  - **Request Headers**:
    - `Authorization` (string): Bearer token.
- **Request Body**:
`bio` (string, optional): The updated biography of the user.
`profession` (string, optional): The updated profession of the user.
`address` (string, optional): The updated address of the user.
- **Response**:
A JSON object containing the updated user details or an error message.

### Flat Routes

- **Create Flat**
  - **Endpoint**: `POST /api/flats`
  - **Description**: Creates a new flat entry.
  - **Request Headers**:
    - `Authorization` (string): Bearer token.
  - **Request Body**:
    - `squareFeet` (number): The total square feet area of the flat.
    - `totalBedrooms` (number): The total number of bedrooms in the flat.
    - `totalRooms` (number): The total number of rooms in the flat.
    - `utilitiesDescription` (string): Description of the utilities available in the flat.
    - `location` (string): The location of the flat.
    - `description` (string): Description of the flat.
    - `rent` (number): The rent amount for the flat.
    - `advanceAmount` (number): The advance amount for the flat.
  - **Response**: JSON object with flat details.

- **Get All Flats**
  - **Endpoint**: `GET /api/flats`
  - **Description**: Retrieves a list of all flats.
  - **Request Headers**:
    - `Authorization` (string): Bearer token.
  - **Response**: JSON array of flat objects.

- **Update Flat Information**
  - **Endpoint**: `PUT /api/flats/:flatId`
  - **Description**: Updates the information of an existing flat.
  - **Request Headers**:
    - `Authorization` (string): Bearer token.
  - **Request Body**:
  you can update a single value or multiple value at once.
    - `location` (string): The new location of the flat.
  - **Response**: JSON object with updated flat details.

### Booking Routes

- **Create Booking**
  - **Endpoint**: `POST /api/booking-applications`
  - **Description**: Creates a new booking application for a flat.
  - **Request Headers**:
    - `Authorization` (string): Bearer token.
  - **Request Body**:
    - `flatId` (string): The ID of the flat to be booked.
  - **Response**: JSON object with booking details.

- **Update Booking Status**
  - **Endpoint**: `PUT /api/booking-requests/:id`
  - **Description**: Updates the status of a booking request.
  - **Request Headers**:
    - `Authorization` (string): Bearer token.
  - **Request Body**:
    - `status` (string): The new status of the booking (e.g., BOOKED, REJECTED).
  - **Response**: JSON object with updated booking status.

These routes provide the essential functionalities for user management, flat listing management, and booking processes in the Flat Sharing Application.


## How to Run This Project Locally

To run the Flat Sharing Backend Server locally, follow these steps:

### Prerequisites

Make sure you have the following software installed on your machine:
- [Node.js](https://nodejs.org/en/download/) (v14 or higher)
- [yarn](https://classic.yarnpkg.com/en/docs/install) (v1.22 or higher)
- [PostgreSQL](https://www.postgresql.org/download/) or another supported database

### Installation

1. **Clone the repository**

    ```sh
    git clone https://github.com/yourusername/flat-sharing.git
    cd flat-sharing
    ```

2. **Install dependencies**

    ```sh
    yarn install
    ```

3. **Set up Prisma**

    Initialize Prisma:

    ```sh
    npx prisma init
    ```

    Edit the `prisma/schema.prisma` file to define your database schema. Then run:

    ```sh
    npx prisma migrate dev --name init
    npx prisma generate
    ```

### Configuration

Create a `.env` file in the root directory and add the following environment variables:

```env
NODE_ENV=development
DATABASE_URL=your_database_url
DIRECT_URL=your_direct_database_url
PORT=5000
SALT_ROUND=10
ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRE_IN=1h

```


- **`NODE_ENV`**: The environment in which the server is running (e.g., development, production).
- **`DATABASE_URL`**: The connection string for your PostgreSQL database.
- **`DIRECT_URL`**: The direct connection string for your PostgreSQL database.
- **`PORT`**: The port on which the server will run (default is 5000).
- **`SALT_ROUND`**: The number of salt rounds for bcrypt (default is 10).
- **`ACCESS_TOKEN_SECRET`**: A secret key for signing JWT tokens.
- **`ACCESS_TOKEN_EXPIRE_IN`**: The expiration time for JWT tokens (e.g., 1h for one hour).

## Running the Server
To start the server in development mode, use:

```sh
yarn dev

```
This command will use **`ts-node-dev`** to watch for file changes and automatically restart the server.

## Testing the Endpoints
You can test the API endpoints using tools like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/). Import the provided Postman collection (`flat-sharing.postman_collection.json`) to get started quickly.

## Building for Production
To build the project for production, use:
```sh
yarn build

```
This command will compile the TypeScript code to JavaScript and output it to the dist directory. You can then start the server with:

```sh
yarn prod
```
## Additional Scripts
**Linting**: To run ESLint and check for code issues, use:

```sh
yarn lint
```
**Prisma Studio**: To open Prisma Studio and manage your database visually, use:

```sh
npx prisma studio
```

## Conclusion
Thank you for using the Flat Sharing Backend Server! This server provides a solid foundation for a flat-sharing application, offering essential features for user authentication, profile management, and flat listing functionalities. We hope this documentation has been helpful in setting up and understanding the backend server. If you have any questions or need further assistance, feel free to reach out.