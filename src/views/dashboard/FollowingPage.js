// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
 

const followingPage = () => {
  return (
    <Card style={{width: '150%'}}>
      <CardHeader
        title='Following'        
        titleTypographyProps={{ sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' } }}
      />
      <CardContent >
        <Grid item xb={5}>
          <Card>
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
