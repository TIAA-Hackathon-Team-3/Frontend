import Grid from '@mui/material/Grid'

import FormLayoutsSeparator from 'src/views/question_form/index'
import Answer from 'src/views/answer/index'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import FollowingPage from 'src/views/dashboard/FollowingPage'
import CardTwitter from 'src/views/cards/CardTwitter'

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={7}>
          <FormLayoutsSeparator/>
          <Answer/>
          <CardTwitter />
        </Grid>
        <Grid item sx={{right:'2em'}}>
          <Grid >
            <Grid >
              <FollowingPage/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
