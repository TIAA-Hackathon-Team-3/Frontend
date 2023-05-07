import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import ShareVariant from 'mdi-material-ui/ShareVariant';
import ChatOutline from 'mdi-material-ui/ChatOutline';
import { ArrowDownwardOutlined, ArrowUpwardOutlined, Message } from '@material-ui/icons';
import CommentSection from './CommentSection';



const CardTwitter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen)
  }
  return (
    <Card sx={{ border: 0, boxShadow: 0, color: '', backgroundColor: '#C6A7FE' }}>
      <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
        <Typography
          variant='h6'
          sx={{ display: 'flex', marginBottom: 2.75, alignItems: 'center', color: 'common.white' }}
        >
          <Message sx={{ marginRight: 2.5 }} />

        </Typography>
        <Box>
        <img src='/images/avatars/10.png' alt='Technology' style={{ marginRight: '0.5rem' }} />
        </Box>
        <Box>
        <Typography variant='body2' sx={{ marginBottom: 3, color: 'common.white' }}>
          Technology is great
        </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
            <Avatar alt='Mary Vaughn' src='/images/avatars/4.png' sx={{ width: 34, height: 34, marginRight: 2.75 }} />
            <Box sx={{ mr: 2, display: 'flex', alignItems: 'left', flexDirection: 'column' }}>
              <Typography variant='body2' sx={{ color: 'Purple' }}>
                Aarya
              </Typography>
              <Typography variant='body2' sx={{ color: 'Purple' }} >
                Content Developer
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 3.5 }}>
              <IconButton color='inherit'>
                <ArrowUpwardOutlined sx={{ marginRight: 1.25 }} />
                <ArrowDownwardOutlined sx={{ marginRight: 1.25 }} />
              </IconButton>
              <Typography variant='body2' sx={{ color: 'common.white' }}>
                1.2k
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 3.5 }}>
              <IconButton color='inherit'>
                <ChatOutline sx={{ marginRight: 1.25 }} onClick={handleOpenModal} />
              </IconButton>
              <Typography variant='body2' sx={{ color: 'common.white' }}>
                50
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton color='inherit'>
                <ShareVariant sx={{ marginRight: 1.25 }} />
              </IconButton>
              <Typography variant='body2' sx={{ color: 'common.white' }}>
                80
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          
        </Box>
        {
          isModalOpen ? (
            <Box>
              <CommentSection />
            </Box>
          ) : null
        }
      </CardContent>
    </Card>
  )
}

export default CardTwitter
