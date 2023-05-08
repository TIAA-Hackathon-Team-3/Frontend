import { useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import MuiFormControlLabel from '@mui/material/FormControlLabel'


import themeConfig from 'src/configs/themeConfig'

import BlankLayout from 'src/@core/layouts/BlankLayout'

import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustration'

import { Toaster, toast } from "react-hot-toast";
import axios from 'axios'
import { useSelector } from 'react-redux'

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

const ResetOtpPage = () => {
  // ** State


  const [otp, setOTP] = useState(['', '', '', '', '', '']); 
  const refs = useRef([]);

  const handleOTPChange = (e, index) => {
    const value = e.target.value;
    setOTP((prev) => {
      const newOTP = [...prev];
      newOTP[index] = value;
      return newOTP;
    });
    if (value.length === 1 && index < refs.current.length - 1) {
        refs.current[index + 1].focus();
      }
  };

  // ** Hook
  const theme = useTheme()
  const router = useRouter()

  const userDetails = useSelector((state)=>state.auth);
  console.log(userDetails.registerAuth.data);
  const Id = userDetails.registerAuth?.data?.id;

  const handleResendOTP = async(e) =>{

    e.preventDefault();
    try {
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/reSendOTP/${Id}`
      )
      if(result.data.success)
      {
        toast.success(result.data.message,{duration:5000})
      }
    } catch (error) {
      toast.error(error.response?.data?.message ?? "An error occurred",{duration:5000})
    }
  }
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    const code = otp.join(''); 
    console.log('Entered OTP:', code);
  
    try {
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/verifyUser/${Id}`,
         {code}
      )
      if(result.data.success)
      {
        toast.success(result.data.message,{duration:5000})
        router.push('/pages/resetpassword');
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
            <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.5, alignSelf :'center' }}>
              OTP
            </Typography>
            <Typography variant='body2'>Please enter OTP sent on Email to Forgot Password.</Typography>
          </Box>
          <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4 , alignItems:'center' }}>
                {otp?.map((digit, index) => (
                    <TextField
                        key={index}
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', maxLength: 1 }}
                        value={digit}
                        onChange={(e) => handleOTPChange(e, index)}
                        sx={{ marginX: 1, width: 50 }}
                        ref={(el) => (refs.current[index] = el)}
                        required
                    />
                ))}
            </Box>
            <Button
              fullWidth
              size='large'
              variant='contained'
              sx={{ marginBottom: 7 }}
              onClick={handleSubmit}
            >
              Verify
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography onClick={handleResendOTP} variant='body2' sx={{ marginRight: 2, cursor: 'pointer' }}>
                Resent OTP
              </Typography>
            </Box>
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
ResetOtpPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default ResetOtpPage