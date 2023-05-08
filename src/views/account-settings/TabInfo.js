import { forwardRef, useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import axios from 'axios'


import { Toaster, toast } from "react-hot-toast";
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label='Birth Date' fullWidth {...props} />
})

const TabInfo = () => {
  const [data, setData] = useState({
    title: "",
    discription: "",
    image: "",
    category: ""
  })
  const { loginAuth } = useSelector(state => state.auth);
  const router = useRouter()
  useEffect(() => {
    if(loginAuth.data === undefined){
      router.push('/pages/login')
    }
  }, [])


  const handleImageChange = async (event) => {

    const data1 = new FormData();
    data1.append("file", event.target.files[0]);
    data1.append("upload_preset", "wqhyebxb");

    const res = await axios.post(`https://api.cloudinary.com/v1_1/dr06eyczk/image/upload`, data1);
    setData({ ...data, image: res.data.url });
  }

  const handaleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }
  const handleOnClick = async () => {
    try {
      const createPost = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/createPost/${loginAuth.id}`,
        data, {
        headers: {
          'x-access-token': `${loginAuth.token}`
        }
      })
      if (createPost.data.success) {
        toast.success(createPost.data.message, { duration: 5000 });
      }
    } catch (error) {
      toast.error(error.response.message, { duration: 5000 });
    }



  }

  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Title'
              name="title"
              placeholder='Your title Is here'
              onChange={handaleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              name="discription"
              label='Description'
              minRows={9}
              onChange={handaleChange}
              placeholder='Your content Is here'
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select label='Category' name='category' >
                <MenuItem value='Sports'>Sports</MenuItem>
                <MenuItem value='Technology'>Technology</MenuItem>
                <MenuItem value='Education'>Education</MenuItem>
                <MenuItem value='Health'>Health</MenuItem>
                <MenuItem value='Finance'>Finance</MenuItem>
                <MenuItem value='Cooking'>Cooking</MenuItem>
                <MenuItem value='Travel'>Travel</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              type="file"
              name='image'
              onChange={handleImageChange}
            />
          </Grid>

          <Grid item xs={15}>
            <Button variant='contained' sx={{ marginRight: 3.5 }} onClick={handleOnClick}>
              Create Post
            </Button>
          </Grid>
        </Grid>
      </form>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </CardContent>
  )

}
export default TabInfo
