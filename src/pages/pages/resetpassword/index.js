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
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'

import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustration'

import { Toaster, toast } from "react-hot-toast";
import axios from 'axios'
import { useSelector } from 'react-redux'

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

const ResetPage = () => {
 

  const [values, setValues] = useState({
    showPassword: false
  })

  const [values1, setValues1] = useState({
    showPassword1: false
  })

  const [data, setdata] = useState({
    newPassword: "",
    rePassword: ""
  });

  // ** Hook
  const theme = useTheme()
  const router = useRouter()

  const {newPassword,rePassword } = data;

  const dataChange = (event) => {
    const newData = { ...data, [event.target.name]: event.target.value };
    setdata(newData);
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleClickShowPassword1 = () => {
    setValues1({ ...values1, showPassword1: !values1.showPassword1 })
  }


  const handleMouseDownPassword = event => {
    event.preventDefault()
  }
  
  const validateForm = () => {
    
    const newErrors = {
      newPassword: "",
      rePassword: ""
    };

    let formIsValid = true;

    if (!newPassword) {
      newErrors.newPassword = "Password is required";
      toast.error(newErrors.newPassword)
      formIsValid = false;
    } else if (newPassword.length < 6) {
      newErrors.newPassword = "Password should be at least 6 characters long";
      toast.error(newErrors.newPassword)
      formIsValid = false;
    }
    if(!rePassword){
      newErrors.rePassword = "Confirm Password is required";
      toast.error(newErrors.rePassword)
      formIsValid = false;
    }
    if(newPassword!==rePassword){
      newErrors.rePassword = "Password and Confirm Passsword do not Match";
      toast.error(newErrors.rePassword)
      formIsValid = false;
    }

    return formIsValid;
  };

  const userDetails = useSelector((state)=>state.auth);
  const Id = userDetails.registerAuth?.data?.id;

  const handleSubmit = async(e) => {
    e.preventDefault();
   console.log(userDetails);
    const formIsValid = validateForm();
    if (!formIsValid) {
      return;
    }
    try {
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/forgotPassword/${Id}`,
        data
      )
      console.log(result);
      if(result.data.success)
      {
        toast.success(result.data.message,{duration:5000});
        router.push('/pages/login')
      }
    } catch (error) {
      console.log(error.response)
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
               Reset Password
            </Typography>
            <Typography variant='body2'>Enter Password to Reset</Typography>
          </Box>
          <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
            <FormControl fullWidth>
              <InputLabel htmlFor='auth-register-password'>New Password</InputLabel>
              <OutlinedInput
                label='New Password'
                name='newPassword'
                value={data.newPassword}
                id='newPassword'
                onChange={dataChange}
                sx={{ marginBottom: 4 }}
                required
                type={values.showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      aria-label='toggle password visibility'
                    >
                      {values.showPassword ? <EyeOutline fontSize='small' /> : <EyeOffOutline fontSize='small' />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor='auth-register-password'>Confirm Password</InputLabel>
              <OutlinedInput
                label='Confirm Password'
                name='rePassword'
                sx={{ marginBottom: 4 }}
                value={data.rePassword}
                id='rePassword'
                onChange={dataChange}
                required
                type={values1.showPassword1 ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleClickShowPassword1}
                      onMouseDown={handleMouseDownPassword}
                      aria-label='toggle password visibility'
                    >
                      {values1.showPassword1 ? <EyeOutline fontSize='small' /> : <EyeOffOutline fontSize='small' />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button
              fullWidth
              size='large'
              variant='contained'
              sx={{ marginBottom: 7 }}
              onClick={handleSubmit}
            >
              Reset
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
ResetPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default ResetPage