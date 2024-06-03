const Comments = require('../models/Comments.js');

exports.checker = async (req, res) => {
  try {
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const postId = queryParams.get(`postId`);
    const limit = queryParams.get(`_limit`);
    const orderby = new URLSearchParams(req.url.split('?')[2]).get(`_orderby`);
    const columnby = new URLSearchParams(req.url.split('?')[3]).get(`_columnby`);
    console.log('PostId: ',postId,'Column By: ',columnby,' Order By: ',orderby,' Limit: ',limit)

    if (postId) {
      const comments = await getCommentByPostId(postId,orderby,columnby);
      res.send(comments);
    } else {
      const comments = await getAllComments(limit,orderby,columnby);
      res.send(comments);
    }
  } catch (error) {
    console.error(error);
    res.send({message: 'Server Error' });
  }
};

async function getCommentByPostId(postId,orderby,columnby) {
  try {
    // Use postId to find comments
    if(orderby!=null &&columnby!=null){
    const comments = await Comments.findAll({ where: { postId: postId },order:[[columnby,orderby]]});
    if (!comments) {
      throw new Error('Comments not found');
    }
    return comments;
    }else {
      const comments = await Comments.findAll({ where: { postId: postId }});
      if (!comments) {
        throw new Error('Comments not found');
      }
      return comments; 
    }

  } catch (error) {
    console.error(error);
    throw new Error('Server Error while getting comment By ID');
  }
};

async function getAllComments(limit,orderby,columnby) {
  try {
    // Use postId to find comments
    if(orderby!=null &&columnby!=null){
    const comments = await Comments.findAll({limit:parseInt(limit),order:[[columnby,orderby]] });
    console.log('Column By: ',columnby,' Order By: ',orderby,' Limit: ',limit);
    if (!comments) {
      throw new Error('Comments not found');
    }
    return comments;
    }else {
      const comments = await Comments.findAll({limit:parseInt(limit) });
      console.log(' Limit: ',limit);
      if (!comments) {
        throw new Error('Comments not found');
      }
      return comments;
    }
    
    

  } catch (error) {
    console.error(error);
    console.log('Column By: ',columnby,' Order By: ',orderby,' Limit: ',limit);
    throw new Error('Server Error while getting comment By ID');
    
  }
};

async function createComment(req, res) {
  try {
    // Get the URL query parameters
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    // Get the postId parameter value
    const postId = queryParams.get('postId');

    // Get other comment data from the request body
    const { name, email, body } = req.body;
// Find all comments
      const comments = await Comments.findAll({
        order: [['id', 'DESC']],
      });

      let lastCommentId;
      if (comments.length > 0) {
        lastCommentId = comments[0].id; // Latest comment ID
      } else {
        // If no comments exist, start from 1
        lastCommentId = 0;
      }

    // Increment the last comment id
    const newCommentId = lastCommentId + 1;

    // Now you have the postId and newCommentId, you can create the comment
    const comment = await Comments.create({ postId, id: newCommentId, name, email, body });
    
    // Send the response
    res.send(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
  };
 
// exports.updateComment = async (req, res) => {
//   try {
//     const id = req.url.split('/').pop();
//     const { name, email, body } = req.body;
//     const comments = await Comments.findByPk(id);
//     if (!comments) {
//       return sendResponse(res, 404, { message: 'Comment not found' });
//     }
//     comments.name = name;
//     comments.email = email;
//     comments.body = body;
//     await comments.save();
//     res.send(comments);
//   } catch (error) {
//     console.error(error);
//     sendResponse(res, 500, { message: 'Server Error' });
//   }
// };

// exports.deleteComment = async (req, res) => {
//   try {
//     const id = req.url.split('/').pop();
//     const comments = await Comments.findByPk(id);
//     if (!comments) {
//       return sendResponse(res, 404, { message: 'Comment not found' });
//     }
//     await comments.destroy();
//     sendResponse(res, 200, { message: 'Comment deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     sendResponse(res, 500, { message: 'Server Error' });
//   }
// };

//function sendResponse(res, statusCode, data) {
//  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
//  res.end(JSON.stringify(data));
//}

module.exports.createComment = createComment;