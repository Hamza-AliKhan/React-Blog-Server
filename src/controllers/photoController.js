const Photos = require('../models/Photos.js');

exports.checker = async (req, res) => {
  try {
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const albumId = queryParams.get(`albumId`);
    const limit = queryParams.get(`_limit`);

    if (albumId) {
      const photos = await getPhotoById(albumId);
      res.send(photos);
    } else {
      const photos = await getAllPhotos(limit);
      res.send(photos);
    }
  } catch (error) {
    console.error(error);
    res.send({message: 'Server Error' });
  }
};

async function getAllPhotos (limit)  {
  try {
    // checking limit
    if(parseInt(limit)>0){
    const photo = await Photos.findAll({limit:parseInt(limit)});
    return photo;
      }else{
        const photo = await Photos.findAll();
        return photo;
    }
  } catch (error) {
    console.error(error);
    throw new Error('Server Error while getting all photos');
  }
};

async function getPhotoById (albumId) {
  try {
    // Use albumId to find the albums
    const photo = await Photos.findAll({ where: { albumId: albumId } });
    
    if (!photo) {
      return new Error('Error:404 Photos not found');
    }
    return photo;
  } catch (error) {
    console.error(error);
    throw new Error('Server Error while getting photos By albumId');
}
};


// exports.createPhoto = async (req, res) => {
//   try {
//     const { id, albumId, url, thumbnailUrl } = req.body;
//     const photo = await photo.create({ id, albumId, url, thumbnailUrl });
//     await photo.save();
//     sendResponse(res, 201, photo);
//   } catch (error) {
//     console.error(error);
//     sendResponse(res, 500, { message: 'Server Error' });
//   }
// };

// exports.updatePhoto = async (req, res) => {
//   try {
//     const id = req.url.split('/').pop();
//     const { url, thumbnailUrl } = req.body;
//     const photo = await Photo.findByPk(id);
//     if (!photo) {
//       return sendResponse(res, 404, { message: 'Photo not found' });
//     }
//     photo.url = url;
//     photo.thumbnailUrl = thumbnailUrl;
//     await photo.save();
//     sendResponse(res, 200, photo);
//   } catch (error) {
//     console.error(error);
//     sendResponse(res, 500, { message: 'Server Error' });
//   }
// };

// exports.deletePhoto = async (req, res) => {
//   try {
//     const id = req.url.split('/').pop();
//     const photo = await Photo.findByPk(id);
//     if (!photo) {
//       return sendResponse(res, 404, { message: 'Photo not found' });
//     }
//     await photo.destroy();
//     sendResponse(res, 200, { message: 'Photo deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     sendResponse(res, 500, { message: 'Server Error' });
//   }
// };
