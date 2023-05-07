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
    <Card sx={{ border: 0, boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.25)', color: '', backgroundColor: '#C6A7FE' }}>
      <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
        <Typography
          variant='h6'
          sx={{ display: 'flex', marginBottom: 2.75, alignItems: 'center', color: 'common.white' }} >
        </Typography>
        <Box sx={{ pb: 2, mr: 2, display: 'flex', alignItems: 'center' }}>
          <Avatar alt='Mary Vaughn' src='/images/avatars/4.png' sx={{ width: 34, height: 34, marginRight: 2.75 }} />
          <Box sx={{ mr: 2, display: 'flex', alignItems: 'left', flexDirection: 'column' }}>
            <Typography variant='body2' sx={{ color: 'Purple', fontWeight: 'bold' }}>
              Aarya
            </Typography>
            <Typography variant='body2' sx={{ color: 'Purple', fontWeight: 'bold' }} >
              Content Developer
            </Typography>
          </Box>
        </Box>
        <Box sx={{ pb: '1rem' }}>
          <img src='/images/avatars/10.png' alt='Technology' style={{
            display: 'block',
            margin: '0 auto',
            width: '550px',
            height: '300px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            borderRadius: '10px'
          }} />

        </Box>
        <Box>
          <Typography variant='h5' sx={{ fontWeight: 'bold', marginBottom: 3, color: 'common.white' }}>
            Technology is Great
          </Typography>
          <Typography variant='body2' sx={{ marginBottom: 3, color: 'common.white' }}>
            Technology has greatly transformed and improved our lives in many ways. It has revolutionized how we communicate, work, learn, entertain, and even how we think. With the help of technology, we can access information and connect with people from all over the world instantly. It has also enabled us to solve complex problems, automate processes, and create new opportunities for growth and development. However, it is important to use technology responsibly and ethically, and to ensure that its benefits are accessible to everyone.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 3.5 }}>
              <IconButton color='inherit'>
                <ArrowUpwardOutlined sx={{ marginRight: 1.25 }} />
              </IconButton>
              <Typography variant='body2' sx={{ color: 'common.white' }}>
                1.2k
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 3.5 }}>
              <IconButton color='inherit'>
                <ArrowDownwardOutlined sx={{ marginRight: 1.25 }} />
              </IconButton>
              <Typography variant='body2' sx={{ color: 'common.white' }}>
                0.1k
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
