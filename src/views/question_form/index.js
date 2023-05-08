// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { TextField } from '@mui/material'
import { Toaster, toast } from "react-hot-toast";


const FormLayoutsSeparator = () => {
  // ** States
  const [question, setQuestion] = useState("")
  const { loginAuth } = useSelector(state => state.auth);
  console.log(loginAuth)
  const handleQuestion=async() => {
    try {
      if(question.length === 0) {
        toast.error("please add question", { duration: 5000 });
      }
      const createPost = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/createQuestion/${loginAuth.data.id}`,
        {question}, {
        headers: {
          'x-access-token': `${loginAuth.data.token}`
        }
      })
      setQuestion("")
      if (createPost.data.success) {
        toast.success(createPost.data.message, { duration: 5000 });
      }
    } catch (error) {
      console.log(error)
      toast.error(error?.response?.message, { duration: 5000 });
    }
  }

  return (
    <Card style={{marginBottom: '20px'}}>
      <CardHeader title='Ask a question here ' titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={12}>
            <Grid item xs={12}>
              <TextField fullWidth label='Question' placeholder='What do you want to ask or share?' onChange={(e)=>setQuestion(e.target.value)} />
                <Button 
                    type='submit' 
                    variant='contained' 
                    style={{ marginTop: '20px' }}
                    onClick={handleQuestion}
                    >
                    Ask Question
                </Button>

            </Grid>
            <Grid>
            
            </Grid>
           </Grid>
        </CardContent>
      </form>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </Card>
  )
}

export default FormLayoutsSeparator
