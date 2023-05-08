import React from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Demo from 'src/Pages/Demo/Demo'
const CardQuestion = (props) => {
    
 const {key,authorName,question,date} = props;

  return (
    <>
    <Card style={{marginBottom: '25px'}}>
      <CardHeader title={`Question from ${authorName} `} titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={e => e.preventDefault()}>
        <CardContent  >
          <Grid container spacing={12}>
            <Grid item xs={12}>
                {question}
                <Demo question={question} />
            </Grid>
            <Grid>
            </Grid>
           </Grid>
        </CardContent>
      </form>
    </Card>
    </>
  )
}

export default CardQuestion
