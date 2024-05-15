const Posts = require('../models/Posts.js');

exports.getAllPosts = async (req, res) => {
  try {
    // Get the URL query parameters
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    // Get the albumId parameter value
    const limit = queryParams.get(`_limit`);
    
    // checking limit
    if(parseInt(limit)>0){
    const posts = await Posts.findAll({limit:parseInt(limit)});
    res.send(posts);
    }else{
      const posts = await Posts.findAll();
      res.send(posts);
    }
  } catch (error) {
    console.error(error);
    res.send({ message: 'Server Error while getting posts' });
  }
};

exports.getPostById = async (req, res) => {
  try {
    // Split the URL by '/' to get the parts
    const parts = req.url.split('/');
    // Get the last part which should be the id
    const id = parts[parts.length - 1];

    // Use postId to find the post
    const post = await Posts.findByPk(id);
    
    if (!post) {
      return res.send({message: 'Post not found' });
    }
    res.send(post);
  } catch (error) {
    console.error(error);
    res.send({ message: 'Server Error while getting post By ID' });
  }
};


// exports.createPost = async (req, res) => {
//   try {
//     const { id, userId, title, body } = req.body;
//     const posts = await Posts.create({ id, userId, title, body });
//     await posts.save();
//     res.send(posts);
//   } catch (error) {
//     console.error(error);
//     res.send({message: 'Server Error' });
//   }
// };

// exports.updatePost = async (req, res) => {
//   try {
//     const id = req.url.split('/').pop();
//     const { title, body } = req.body;
//     const posts = await Posts.findByPk(id);
//     if (!posts) {
//       return res.send({ message: 'Posts not found' });
//     }
//     posts.title = title;
//     posts.body = body;
//     await posts.save();
//     res.send(posts);
//   } catch (error) {
//     console.error(error);
//     res.send({ message: 'Server Error' });
//   }
// };

// exports.deletePost = async (req, res) => {
//   try {
//     const id = req.url.split('/').pop();
//     const posts = await Posts.findByPk(id);
//     if (!posts) {
//       return res.send({ message: 'Posts not found' });
//     }
//     await posts.destroy();
//     res.send({ message: 'Posts deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.send({ message: 'Server Error' });
//   }
//};
