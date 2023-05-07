// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import {GroupAddRounded } from '@material-ui/icons'
import { PenPlus } from 'mdi-material-ui'
import Demo from 'src/Pages/Demo/Demo'

const Answer = () => {
  return (
    <Card style={{marginBottom: '25px'}}>
      <CardHeader title='Question from {...user}' titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={12}>
            <Grid item xs={12}>
              <p>Your actual question is gonna here and you can answer them using the belowed button named as answer</p>
                <Demo/>
            </Grid>
            <Grid>
            </Grid>
           </Grid>
        </CardContent>
      </form>
    </Card>
  )
}

export default Answer