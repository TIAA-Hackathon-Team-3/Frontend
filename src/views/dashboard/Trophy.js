
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import { Stack } from '@mui/material'


const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})


const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute'
})

const Trophy = () => {

  const theme = useTheme()
  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

  const SidebarContainer = styled('div')({
    width: '300px', /* adjust the width as needed */
    position: 'fixed',
    top: 80,
    right: 80,
    bottom: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  })

  return (
    <SidebarContainer>
      <Card sx={{ position: 'relative' }}>
        <CardContent>
          <Stack direction="column" spacing={4}>
            <Typography variant='h6' textAlign='center'>Categories</Typography>
            <Button size='small' variant='contained'>
              Technology
            </Button>
            <Button size='small' variant='contained'>
              Food
            </Button>
            <Button size='small' variant='contained'>
              Science
            </Button>
            <Button size='small' variant='contained'>
              Web
            </Button>
          </Stack>
          <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
        </CardContent>
      </Card>
      <Card sx={{ position: 'relative' }}>
        <CardContent>
          <Stack direction="column" spacing={4}>
            <Typography variant='h6' textAlign='center'>People you follow</Typography>
            <Typography size='small' variant='contained'>
              Makarand 
            </Typography>
            
          </Stack>
          <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
        </CardContent>
      </Card>
    </SidebarContainer>
    
    
  )
}

export default Trophy
