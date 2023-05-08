const { default: CardUser } = require("src/views/cards/CardUser");
import Grid from '@mui/material/Grid'
import CardHorizontalRatings from 'src/views/cards/CardHorizontalRatings';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


const Category = () => {
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
  
  export default Category


