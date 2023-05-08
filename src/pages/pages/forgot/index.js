// ** React Imports
import { useState } from 'react'

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustration'

import { Toaster, toast } from "react-hot-toast";
import axios from 'axios'

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const ForgotPage = () => {
 

  const [data, setdata] = useState({
    email: ""
  });

  // ** Hook
  const theme = useTheme()
  const router = useRouter()

  const {email } = data;

  const dataChange = (event) => {
    const newData = { ...data, [event.target.name]: event.target.value };
    setdata(newData);
  }

  
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/forgotPasswordUserVerify`,
        data
      )
      if(result.data.success)
      {
        toast.success(result.data.message,{duration:5000});
        router.push('/pages/resetotp')
      }
    } catch (error) {
      toast.error(error.response?.data?.message ?? "An error occurred",{duration:5000})
    }
  }


  return (
    <Box className='content-center'>
      <Card sx={{ zIndex: 1 }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important` }}>
          <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           
            <Typography
              variant='h6'
              sx={{
                ml: 3,
                lineHeight: 1,
                fontWeight: 600,
                textTransform: 'uppercase',
                fontSize: '1.5rem !important'
              }}
            >
              {themeConfig.templateName}
            </Typography>
          </Box>
          <Box sx={{ mb: 6 }}>
            <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.5 }}>
               Forgot Password
            </Typography>
            <Typography variant='body2'>Please Enter  Email to Forgot Password</Typography>
          </Box>
          <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
            <TextField autoFocus fullWidth 
            id='email' 
            label='Email' 
            sx={{ marginBottom: 4 }}
            name='email'
            value={data.email}
            onChange={dataChange}
            required
            />
            <Button
              fullWidth
              size='large'
              variant='contained'
              sx={{ marginBottom: 7 }}
              onClick={handleSubmit}
            >
              Forgot
            </Button>
          </form>
        </CardContent>
      </Card>
      <FooterIllustrationsV1 />
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </Box>
  )
}
ForgotPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default ForgotPage