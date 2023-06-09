// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const ImgStyled = styled('img')(({ theme }) => ({
    width: 120,
    height: 120,
    marginRight: theme.spacing(6.25),
    borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        textAlign: 'center'
    }
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
    marginLeft: theme.spacing(4.5),
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginLeft: 0,
        textAlign: 'center',
        marginTop: theme.spacing(4)
    }
}))

const TabProfile = () => {
    const [userData, setUserData] = useState({
        id:"",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: "",
        email: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
        birthDate: "",
        profilePic: "",
        aboutMe: ""
    })
    const {loginAuth} = useSelector((state) => state.auth);
    useEffect(() => {
        if(loginAuth.data === undefined){
            router.push('/pages/login')
          }
      getUserData()
    }, [])
    const router = useRouter()
  
    console.log("Akash",loginAuth?.data?.token)
    const getUserData = async()=>{
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/getUserProfile/${loginAuth?.data?.id}`, {
            headers: {
                'authorization': `${loginAuth.data.token}`
            }
        })
        const userDetails = res.data.data;
        setUserData({...userData ,
        id:userDetails.id,
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        phoneNumber: userDetails.phoneNumber,
        address: userData.address,
        email: userDetails.email,
        city: userData.city,
        state: userDetails.state,
        country: userDetails.country,
        zipCode: userDetails.zipCode,
        birthDate: userDetails.birthDate,
        profilePic: userDetails.profilePic,
        aboutMe: userDetails.aboutMe
    })
    }
    console.log(userData)
    

    const onChange = file => {
        const reader = new FileReader()
        const { files } = file.target
        if (files && files.length !== 0) {
            reader.onload = () => setImgSrc(reader.result)
            reader.readAsDataURL(files[0])
        }
    }
    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

    }
    const handleUpdateProfile = async () => {

        const updateProfile = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/userProfileUpdate/${loginAuth.data.id}`, userData, {
            headers: {
                'authorization': `${loginAuth.data.token}`
            }
        })
        console.log(updateProfile)
    }

    return (
        <CardContent>
            <form>
                <Grid container spacing={7}>
                    <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <ImgStyled src={userData.profilePic || '/images/avatars/1.png'} alt='Profile Pic' />
                            <Box>
                                <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                                    Upload New Photo
                                    <input
                                        hidden
                                        type='file'
                                        onChange={onChange}
                                        accept='image/png, image/jpeg'
                                        id='account-settings-upload-image'
                                    />
                                </ButtonStyled>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label='firstName' name='firstName'  value={userData.firstName} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label='lastName' name='lastName' value={userData.lastName} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            type='email'
                            name='email'
                            // label='Email'
                            value={userData.email}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            name='phoneNumber'
                            // label='PhoneNumber'
                            value={userData.phoneNumber}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            name='birthDate'
                            // label='Birth Date'
                            value={userData.birthDate}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            name='aboutMe'
                            // label='Title'
                            value={userData.aboutMe}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Typography variant='body2' sx={{ marginTop: 5, marginLeft: 10 }}>
                            Location
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            // label='Address'
                            name='address'
                            value={userData.address}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            // label='City'
                            name='city'
                            value={userData.city}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            // label='State'
                            name='state'
                            value={userData.state}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            // label='Country'
                            name='country'
                            value={userData.country}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            // label='Zip code'
                            name='zipCode'
                            value={userData.zipCode}
                            onChange={handleChange}
                        />
                    </Grid>


                    <Grid item xs={12}>
                        <Button variant='contained' sx={{ marginRight: 3.5 }} onClick={handleUpdateProfile}>
                            Save Changes
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </CardContent>
    )
}

export default TabProfile
