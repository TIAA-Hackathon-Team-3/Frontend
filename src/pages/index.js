
import Grid from '@mui/material/Grid'


import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'


import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'


import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

import Trophy from 'src/views/dashboard/Trophy'
import CardTwitter from 'src/views/cards/CardTwitter'

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={7}>
          <CardTwitter />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={8}>
              <Trophy/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
