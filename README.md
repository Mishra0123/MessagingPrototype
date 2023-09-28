# ChitChatr
#### Messaging Service Prototype  
**Ritik Kumar Mishra**  
***IIT Indore***  
Civil Engineering  

# Introduction

This repo consists of a Chat Application built with the MERN stack
(MongoDB, Express.js, Node.js,React.js and Socket.IO).

This is a full-stack chat application that can be up and running with just a few steps. Its frontend is built with [Material UI](https://mui.com/material-ui/) running on top of [React](https://react.dev/). The backend is built with [Express.js](https://expressjs.com/) and [Node.js](https://nodejs.org/en). Real-time message broadcasting is developed using [Socket.IO](https://socket.io/).

# Features

This application provides users with the following features:

- **Authentication** using [Google Oauth].
- A **Private Chat** functionality where users can chat with other users privately.
- **Real-time updates** to the user list, conversation list, and conversation
  messages.


# How to use

You can have this application up and running with just a few steps because it has both the frontend and the backend in a single repository. Follow the steps below to do so:

1. Clone this repo   ``` https://github.com/Mishra0123/MessagingPrototype.git ```
2. Once you have the repo, you need to install its dependencies. So using a terminal, move into the project (`` cd ChitChatr/server ``), to install its dependencies wright command (`` npm install ``). Then to start server wright command (```nodemon index.js```).
3. Once You started the backend, move into the frontend directory of the project (``` cd ChitChatr/client ```) and execute (``` npm install ```) to install the dependencies of the frontend and then wright command (`` npm start ``).
4. We have used the MongoDB for database and for connection with mongoos, we have used MongoDB cloud to store the data instead of using MongoDB Atlas. 
5. After following the above step our application will start at the (`` http:// localhost:3000 ``).
6. After opening the application, Our Application will ask for account authentication then after verification You can see active users and can chat from those users.


# Things to note

* The frontend is created using [create-react-app](https://create-react-app.dev/).
* Database connections in the backend are handled using the [Mongoose ORM](https://mongoosejs.com/).


