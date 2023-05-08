import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import ShareVariant from 'mdi-material-ui/ShareVariant';
import ChatOutline from 'mdi-material-ui/ChatOutline';
import { ArrowDownwardOutlined, ArrowUpwardOutlined} from '@material-ui/icons';
import CommentSection from './CommentSection';



const LikeDislike = () => {
  const [counts, setCounts] = useState({ likeCount: 0, dislikeCount: 0 });

  const handleLike = () => {
    setCounts({ ...counts, likeCount: counts.likeCount + 1 });
  };

  const handleDislike = () => {
    setCounts({ ...counts, dislikeCount: counts.dislikeCount + 1 });
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', mr: 3.5 }}>
        <IconButton color='inherit' onClick={handleLike}>
          <ArrowUpwardOutlined sx={{ marginRight: 1.25 }} />
        </IconButton>
        <Typography variant='body2' sx={{ color: 'inherit' }}>
          {counts.likeCount}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mr: 3.5 }}>
        <IconButton color='inherit' onClick={handleDislike}>
          <ArrowDownwardOutlined sx={{ marginRight: 1.25 }} />
        </IconButton>
        <Typography variant='body2' sx={{ color: 'inherit' }}>
          {counts.dislikeCount}
        </Typography>
      </Box>
    </>
  );
};



const CardTwitter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen)
  }
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  const [taggedUsers, setTaggedUsers] = useState([]);

  const handleTagUser = (user) => {
    setTaggedUsers([...taggedUsers, user]);
  };

  

  return (
    <Card sx={{ border: 0, boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.25)', color: '', backgroundColor: 'inherit' }}>
      <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
        <Typography
          variant='h6'
          sx={{ display: 'flex', marginBottom: 2.75, alignItems: 'center', color: 'common.white' }} >
        </Typography>
        <Box sx={{ pb: 2, mr: 2, display: 'flex', alignItems: 'center' }}>
          <Avatar alt='Mary Vaughn' src='/images/avatars/4.png' sx={{ width: 34, height: 34, marginRight: 2.75 }} />
          <Box sx={{ mr: 2, display: 'flex', alignItems: 'left', flexDirection: 'column' }}>
            <Typography variant='body2' sx={{ color: 'inherit', fontWeight: 'bold' }}>
              Aarya
            </Typography>
            <Typography variant='body2' sx={{ color: 'inherit', fontWeight: 'bold' }} >
              Content Developer
            </Typography>
          </Box>
        </Box>
        <Box sx={{ pb: '2rem', paddingTop: '1rem'}}>
          <img src='/images/cards/paper-boat.png' alt='Technology' style={{
            display: 'block',
            margin: '0 auto',
            width: '97%',
            height: '400px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            borderRadius: '10px'
          }} />

        </Box>
        <Box>
          <Typography variant='h5' sx={{ fontWeight: 'bold', marginBottom: 3, color: 'inherit' }}>
            Technology is Great
          </Typography>
          <Typography variant='body2' sx={{ marginBottom: 3, textAlign: 'justify', color: 'inherit' }}>
            Technology has greatly transformed and improved our lives in many ways. It has revolutionized how we communicate, work, learn, entertain, and even how we think. With the help of technology, we can access information and connect with people from all over the world instantly. It has also enabled us to solve complex problems, automate processes, and create new opportunities for growth and development. However, it is important to use technology responsibly and ethically, and to ensure that its benefits are accessible to everyone.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 3.5 }}>
              {/* ... */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LikeDislike />
        </Box>
              {/* <IconButton color='inherit'>
                <ArrowUpwardOutlined sx={{ marginRight: 1.25 }} />
              </IconButton>
              <Typography variant='body2' sx={{ color: 'common.white' }}>
                1.2k
              </Typography> */}
            </Box>
            {/* <Box sx={{ display: 'flex', alignItems: 'center', mr: 3.5 }}>
              <IconButton color='inherit'>
                <ArrowDownwardOutlined sx={{ marginRight: 1.25 }} />
              </IconButton>
              <Typography variant='body2' sx={{ color: 'common.white' }}>
                0.1k
              </Typography>
            </Box> */}
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 3.5 }}>
              <IconButton color='inherit'>
                <ChatOutline sx={{ marginRight: 1.25 }} onClick={handleOpenModal} />
              </IconButton>
              {/* <Typography variant='body2' sx={{ color: 'common.white' }}>
                50
              </Typography> */}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton color='inherit'>
                <ShareVariant sx={{ marginRight: 1.25 }} />
              </IconButton>
              {/* <Typography variant='body2' sx={{ color: 'common.white' }}>
                80
              </Typography> */}
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
