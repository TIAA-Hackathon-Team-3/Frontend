import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Reply = ({ name, avatar, reply }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', ml: 4, mb: 1 }}>
      <Avatar alt={name} src={avatar} sx={{ width: 24, height: 24, mr: 1.5 }} />
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant='subtitle2' sx={{ mb: 0.5 }}>
          {name}
        </Typography>
        <Typography variant='body2' sx={{ mb: 1 }}>
          {reply}
        </Typography>
      </Box>
    </Box>
  )
}

const Comment = ({ name, avatar, comment }) => {
  const [replies, setReplies] = useState([]);
  const [newReply, setNewReply] = useState('');
  const [showReplies, setShowReplies] = useState(false);

  const handleReplyChange = (event) => {
    setNewReply(event.target.value);
  };

  const handleReplySubmit = () => {
    if (newReply.trim() !== '') {
      const newReplyObj = {
        name: 'Sid',
        avatar: '/images/avatars/1.png',
        reply: newReply.trim(),
      };
      if (replies.length < 2) {
        setReplies([...replies, newReplyObj]);
      }
      setNewReply('');
    }
  };

  const handleViewAllReplies = () => {
    setShowReplies(true);
  };

  const handleHideReplies = () => {
    setShowReplies(false);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', mt: 2 }}>
      <Avatar alt={name} src={avatar} sx={{ width: 32, height: 32, mr: 2 }} />
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
          {name}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          {comment}
        </Typography>
        {replies.length < 2 && (
          <>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Reply:
            </Typography>
            {replies.map((reply, index) => (
              <Reply key={index} name={reply.name} avatar={reply.avatar} reply={reply.reply} />
            ))}
            <TextField
              label="Reply"
              variant="outlined"
              size="small"
              value={newReply}
              onChange={handleReplyChange}
              sx={{ mb: 1 }}
            />
            <Button variant="contained" color="primary" onClick={handleReplySubmit}>
              Reply
            </Button>
          </>
        )}
        {replies.length >= 2 && !showReplies && (
          <Button variant="contained" color="primary" onClick={handleViewAllReplies}>
            View All Replies
          </Button>
        )}
        {replies.length >= 2 && showReplies && (
          <>
            <Button variant="contained" color="primary" onClick={handleHideReplies}>
              Hide Replies
            </Button>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Replies:
            </Typography>
            {replies.map((reply, index) => (
              <Reply key={index} name={reply.name} avatar={reply.avatar} reply={reply.reply} />
            ))}
          </>
        )}
      </Box>
    </Box>
  );
};




const CommentSection = () => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')

  const handleCommentChange = (event) => {
    setNewComment(event.target.value)
  }

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      const newCommentObj = {
        name: 'Sid',
        avatar: '/images/avatars/1.png',
        comment: newComment.trim()
      }
      setComments([...comments, newCommentObj])
      setNewComment('')
    }
  }

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant='h6' sx={{ mb: 2 ,color: 'inherit'}} >
        Comments
      </Typography>
      {comments.map((comment, index) => (
        <Comment key={index} name={comment.name} avatar={comment.avatar} comment={comment.comment} />
      ))}
      <Box sx={{ display: 'flex', mt: 3 }}>
        <Avatar alt='Sid' src='/images/avatars/1.png' sx={{ width: 34, height: 34, mr: 1.5 }} />
        <TextField
          variant='outlined'
          fullWidth
          value={newComment}
          onChange={handleCommentChange}
          placeholder='Add a comment'
        />
        <Button variant='contained' color='primary'  onClick={handleCommentSubmit}>
          Comment
        </Button>
      </Box>
    </Box>
  )
}

export default CommentSection
