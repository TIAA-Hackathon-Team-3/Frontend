// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import Facebook from 'mdi-material-ui/Facebook'
import { Button } from '@mui/material'
import { CompassCalibration, Group, GroupAddRounded } from '@material-ui/icons'
import { Compass } from 'mdi-material-ui'

const CardFacebook = () => {
  return (
    <Card sx={{ border: 0, boxShadow: 0, color: 'common.white', backgroundColor: 'primary.main' }}>
      <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
        <Typography
          variant='h6'
          sx={{ display: 'flex', marginBottom: 2.75, alignItems: 'center', color: 'common.white' }}
        >
          <Group sx={{ marginRight: 2.5 }} />&nbsp;
           Welcome to Spaces!
        </Typography>
        <Typography variant='body2' sx={{ marginBottom: 3, color: 'common.white' }}>
        Follow Spaces to explore your interests on Quora.
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}>
        <Button sx={{ border: 0, color: 'black', margin:2, backgroundColor: 'white',"&:hover": {backgroundColor: "white" }}} variant="contained" startIcon={<GroupAddRounded/>}>Create a space</Button>
        <Button sx={{ border: 0, color: 'black', margin:2, backgroundColor: 'white',"&:hover": {backgroundColor: "white" }}} variant="contained" startIcon={<Compass/>}>Discover More</Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardFacebook
