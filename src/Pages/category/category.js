const { default: CardUser } = require("src/views/cards/CardUser");
import Grid from '@mui/material/Grid'
import CardFacebook from 'src/views/cards/CardFacebook';
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import { Sports } from '@material-ui/icons';
import CardInfluencer from 'src/views/cards/CardInfluencer';
import CardHorizontalRatings from 'src/views/cards/CardHorizontalRatings';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


const category = () => {
    const { loginAuth } = useSelector(state => state.auth);
  const router = useRouter()
  useEffect(() => {
    if(loginAuth.data === undefined){
      router.push('/pages/login')
    }
  }, [])
    return (
        <>
        <h1>Categories</h1>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
                <CardHorizontalRatings/>
            </Grid>
            <Grid item xs={6}>
                <CardHorizontalRatings/>
            </Grid>
            <Grid item xs={6}>
                <CardHorizontalRatings/>
            </Grid>
            <Grid item xs={6}>
                <CardHorizontalRatings/>
            </Grid>
          </Grid>
        </Grid>
        </>
    )
  }
  
  export default category


