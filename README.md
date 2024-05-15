## Server For My React Blog App 
working now with its own server and MySQL based database with the help of [Sequelize-v6](https://sequelize.org/docs/v6/) to work on ```localhost```.

# Prerequisites
* [Node.Js](https://nodejs.org/en/download/current)
* Install Project Dependencies ``` npm install ```
* Install MySQL
* Setup database by creaing ```react-blog-database``` , then import ```.sql``` files from react-database folder to MySQL
* Start server ```node server.js```
* Download and Setup React-Blog from my [Github](https://github.com/Hamza-AliKhan/React-Blog) 
* Navigate to ```src/components/ResponseInterceptor.js```
* Change  ```baseURL: 'http://localhost:5000/api'``` from  ```baseURL: 'https://jsonplaceholder.typicode.com/'``` to use server
* Start client (From React-Blog folder)  ``` npm start ```
