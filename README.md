# Collaborative App

This is a collaborative application built using React, Express, Socket.IO, and other modern technologies.

## Prerequisites

Before running the project locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or above)
- [Yarn](https://yarnpkg.com/) (Package Manager)

## Getting Started

Follow the steps below to set up and run the application on your local machine.

### 1. Clone the Repository

```bash
git clone <repository-url>
cd collaborative-app
```

### 2. Install Dependencies

Run the following command to install the required dependencies:

```bash
yarn install
```

### 3. Run the Application

#### Development Mode

To start the server and client in development mode with hot-reloading:

1. Start the server:

   ```bash
   yarn server:dev
   ```

2. Start the React development server:

   ```bash
   yarn start
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

#### Production Mode

To run the application in production mode:

1. Build the React application:

   ```bash
   yarn build
   ```

2. Start the server:

   ```bash
   yarn server:prod
   ```

3. Access the application in your browser at [http://localhost:3000](http://localhost:3000).

## Project Structure

- `server.js`: Entry point for the Express server.
- `src/`: Contains React components, pages, and other frontend files.
- `public/`: Public assets such as images and static files.

## Scripts

- `yarn start`: Runs the React development server.
- `yarn build`: Builds the React application for production.
- `yarn test`: Runs the test suite.
- `yarn server:dev`: Starts the server with hot-reloading.
- `yarn server:prod`: Starts the server in production mode.

## Dependencies

- React: Frontend library.
- Express: Backend framework.
- Socket.IO: Real-time communication.
- Nodemon: Development tool for monitoring server changes.
- Codemirror: Code editor component.
