const express = require('express');
//const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const postsRouter = require('./src/routes/postRouter.js');
const commentsRouter = require('./src/routes/commentRouter.js');
const albumsRouter = require('./src/routes/albumRouter.js');
const photosRouter = require('./src/routes/photoRouter.js');
const usersRouter = require('./src/routes/userRouter.js');



const app = express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// Serve static files from the React build directory
// const reactBuildPath = path.join(__dirname, './build');
// app.use(express.static(reactBuildPath));

// Route requests based on method and URL
app.use('/api/posts', postsRouter);
app.use('/api/comments', commentsRouter);
app.use('/api/albums', albumsRouter);
app.use('/api/photos', photosRouter);
app.use('/api/users', usersRouter);

// Handle unknown routes
app.use((err, req, res, next) => {
  console.error(err);
  res.status(404).json({ message: 'Route not found' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
