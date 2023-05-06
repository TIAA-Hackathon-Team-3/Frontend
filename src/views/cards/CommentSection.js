import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Comment = ({ name, avatar, comment }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
      <Avatar alt={name} src={avatar} sx={{ width: 34, height: 34, mr: 1.5 }} />
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant='subtitle2' sx={{ mb: 0.5 }}>
          {name}
        </Typography>
        <Typography variant='body2' sx={{ mb: 1 }}>
          {comment}
        </Typography>
      </Box>
    </Box>
  )
}

const CommentSection = () => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')

  const handleCommentChange = (event) => {
    setNewComment(event.target.value)
  }

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      const newCommentObj = {
        name: 'John Doe',
        avatar: '/images/avatars/1.png',
        comment: newComment.trim()
      }
      setComments([...comments, newCommentObj])
      setNewComment('')
    }
  }

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant='h6' sx={{ mb: 2 ,color: 'common.white'}} >
        Comments
      </Typography>
      {comments.map((comment, index) => (
        <Comment key={index} name={comment.name} avatar={comment.avatar} comment={comment.comment} />
      ))}
      <Box sx={{ display: 'flex', mt: 3 }}>
        <Avatar alt='John Doe' src='/images/avatars/1.png' sx={{ width: 34, height: 34, mr: 1.5 }} />
        <TextField
          variant='outlined'
          fullWidth
          multiline
          rows={1}
          value={newComment}
          onChange={handleCommentChange}
          placeholder='Add a comment'
          sx={{ mr: 1.5 }}
        />
        <Button variant='contained' color='primary'  onClick={handleCommentSubmit}>
          Comment
        </Button>
      </Box>
    </Box>
  )
}

export default CommentSection
