
import Grid from '@mui/material/Grid'

import FormLayoutsSeparator from 'src/views/question_form/index'

import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

import FollowingPage from 'src/views/dashboard/FollowingPage'

import CardTwitter from 'src/views/cards/CardTwitter'

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={7}>
          <FormLayoutsSeparator/>
          <CardTwitter />
        </Grid>
        <Grid item sx={{ position: 'fixed', right:'6em' }} xs={12} md={6} lg={4}>
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
