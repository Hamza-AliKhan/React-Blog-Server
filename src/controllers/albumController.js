const Albums = require('../models/Albums.js');

exports.getAllAlbums = async (req, res) => {
  try {
    // Get the URL query parameters
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    // Get the albumId parameter value
    const limit = queryParams.get(`_limit`);

    // checking limit
    if(parseInt(limit)>0){
    const album = await Albums.findAll({limit:parseInt(limit)});
    res.send(album);
    }else{
        const album = await Albums.findAll();
        res.send(album);
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, { message: 'Server Error while getting album' });
  }
};

exports.getAlbumById = async (req, res) => {
  try {
    // Split the URL by '/' to get the parts
    const parts = req.url.split('/');
    // Get the last part which should be the id
    const id = parts[parts.length - 1];

    // Use postId to find the post
    const album = await Albums.findByPk(id);
    
    if (!album) {
      return sendResponse(res, 404, { message: 'Albums not found' });
    }
    res.send(album);
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, { message: 'Server Error while getting Albums By ID' });
  }
};

function sendResponse(res, statusCode, data) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}
