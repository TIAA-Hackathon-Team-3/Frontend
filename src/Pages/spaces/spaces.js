const { default: CardUser } = require("src/views/cards/CardUser");
import Grid from '@mui/material/Grid'
import CardAppleWatch from 'src/views/cards/CardAppleWatch';
import CardFacebook from 'src/views/cards/CardFacebook';
import CardImgTop from 'src/views/cards/CardImgTop';

const spaces = () => {
    
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
  
  export default spaces