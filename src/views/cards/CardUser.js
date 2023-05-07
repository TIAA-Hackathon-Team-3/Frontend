// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import AvatarGroup from '@mui/material/AvatarGroup'

const CardUser = () => {
  return (
    <Card sx={{ position: 'relative'}}>
      <CardMedia sx={{ height: '10.625rem'}} image='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTVdy2vT9xJPH-dF5G7tiAFKLBpPz5_8_34p346QkGoi8xc7fe-' />
      <Avatar
        alt='Robert Meyer'
        src='https://t1.gstatic.com/images?q=tbn:ANd9GcQzdArvNz8r_Pm3WEhC68YL9UZ07Lsavic-swSaHUExNoaAKCmh'
        sx={{
          width: 75,
          height: 75,
          left: '9.313rem',
          top: '8.28125rem',
          position: 'absolute',
          border: theme => `0.25rem solid ${theme.palette.common.white}`
        }}
      />
      <CardContent>
        <Box
          sx={{
            mt: 5.75,
            mb: 8.75,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
        This Space for Instagram Releted Contents and Share Your Insta ID & Stories
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardUser