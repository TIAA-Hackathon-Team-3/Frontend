// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
 
// ** Icons Imports
const data = [
  {
    progress: 75,
    imgHeight: 20,
    title: 'Zipcar',
    color: 'primary',
    amount: '$24,895.65',
    subtitle: 'Vuejs, React & HTML',
    imgSrc: '/images/cards/logo-zipcar.png'
  },
  {
    progress: 50,
    color: 'info',
    imgHeight: 27,
    title: 'Bitbank',
    amount: '$8,650.20',
    subtitle: 'Sketch, Figma & XD',
    imgSrc: '/images/cards/logo-bitbank.png'
  },
  {
    progress: 20,
    imgHeight: 20,
    title: 'Aviato',
    color: 'secondary',
    amount: '$1,245.80',
    subtitle: 'HTML & Angular',
    imgSrc: '/images/cards/logo-aviato.png'
  }
]

const followingPage = () => {
  return (
    <Card >
      <CardHeader
        title='Following'
        
        titleTypographyProps={{ sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' } }}
      />
      <CardContent >
        <Grid item xb={5}>
          <Card margin=''>
            <Box display='flex' alignItems='center' padding='1.5rem' border={1} marginBottom={3} boxShadow={3}>
            <Avatar alt='Mary Vaughn' src='/images/avatars/4.png' sx={{ width: 34, height: 34, marginRight: 2.75 }} />
              <Typography>
              Shreya
              </Typography>
            </Box>
          </Card>
          <Card >
            <Box display='flex' alignItems='center'padding='1.5rem' border={1} marginBottom={3} boxShadow={3}>
            <Avatar alt='Mary Vaughn' src='/images/avatars/2.png' sx={{ width: 34, height: 34, marginRight: 2.75 }} />
              <Typography >
              Akash
              </Typography>
            </Box>
          </Card>
          <Card>
            <Box display='flex' alignItems='center'padding='1.5rem' border={1} marginBottom={3} boxShadow={3}>
            <Avatar alt='Mary Vaughn' src='/images/avatars/3.png' sx={{ width: 34, height: 34, marginRight: 2.75 }} />
              <Typography>Makarand</Typography>
            </Box>
          </Card>
          <Card>
            <Box display='flex' alignItems='center'padding='1.5rem' border={1} boxShadow={3}>
            <Avatar alt='Mary Vaughn' src='/images/avatars/4.png' sx={{ width: 34, height: 34, marginRight: 2.75 }} />
              <Typography>Harsh</Typography>
            </Box>
          </Card>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default followingPage
