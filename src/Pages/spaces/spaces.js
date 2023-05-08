const { default: CardUser } = require("src/views/cards/CardUser");
import Grid from '@mui/material/Grid'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CardAppleWatch from 'src/views/cards/CardAppleWatch';
import CardFacebook from 'src/views/cards/CardFacebook';
import CardImgTop from 'src/views/cards/CardImgTop';

const Spaces = () => {
    const { loginAuth } = useSelector(state => state.auth);
  const router = useRouter()
  useEffect(() => {
    if(loginAuth.data === undefined){
      router.push('/pages/login')
    }
  }, [])
    return (
        <>
        <Grid item xs={12} sm={6} md={4} sx={{ paddingBottom: 8}}>
            {/* <CardImgTop/> */}
            <CardFacebook/>
        </Grid>
        <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={4}>
                <CardUser/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <CardUser/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <CardUser/>
            </Grid>
        </Grid>
        </>
    )
  }
  
  export default Spaces