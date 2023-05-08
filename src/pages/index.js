import Grid from '@mui/material/Grid'

import FormLayoutsSeparator from 'src/views/question_form/index'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import FollowingPage from 'src/views/dashboard/FollowingPage'
import CardTwitter from 'src/views/cards/CardTwitter'
import DashboardTable from 'src/views/dashboard/Table'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      
      <StatisticsCard/>
      
      <DashboardTable/>
      
    </ApexChartWrapper>
  )
}

export default Dashboard
