const Users = require('../models/Users.js');

exports.getAllUsers = async (req, res) => {
  try {
    // Get the URL query parameters
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    // Get the albumId parameter value
    const limit = queryParams.get(`_limit`);
    
    // checking limit
    if(parseInt(limit)>0){
    const users = await Users.findAll({limit:parseInt(limit)});
    res.send(users);
    }else{
    const users = await Users.findAll();
    res.send(users);
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, { message: 'Server Error while getting users' });
  }
};

exports.getUserById = async (req, res) => {
  try {
    // Split the URL by '/' to get the parts
    const parts = req.url.split('/');
    // Get the last part which should be the id
    const id = parts[parts.length - 1];

    // Use postId to find the post
    const users = await Users.findByPk(id);
    
    if (!users) {
      return sendResponse(res, 404, { message: 'User not found' });
    }
    res.send(users);
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, { message: 'Server Error while getting user By ID' });
  }
};

function sendResponse(res, statusCode, data) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}
