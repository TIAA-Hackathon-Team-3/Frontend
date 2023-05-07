// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'

const CardInfluencer = () => {
  return (
    <Card>
      <CardHeader title='Influencing The Influencer' />
      <CardActions className='card-action-dense'>
        <Button>Explore</Button>
      </CardActions>
    </Card>
  )
}

export default CardInfluencer
