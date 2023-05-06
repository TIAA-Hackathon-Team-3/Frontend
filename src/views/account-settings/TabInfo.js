// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel'
import InputLabel from '@mui/material/InputLabel'
import RadioGroup from '@mui/material/RadioGroup'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label='Birth Date' fullWidth {...props} />
})

const TabInfo = () => {
  // ** State
  const [date, setDate] = useState(null)

  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>

        <Grid item xs={12}>
            <TextField
              fullWidth
              label='Title'
              placeholder='Your title Is here'
            />
          </Grid>

          {/* sx={{ marginTop: 4.8 }} */}
          <Grid item xs={12}> 
            <TextField
              fullWidth
              multiline
              label='Description'
              minRows={9}
              placeholder='Your content Is here'
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select label='Category' defaultValue='Sports'>
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
            />
          </Grid>

          <Grid item xs={15}>
            <Button variant='contained' sx={{ marginRight: 3.5 }}>
              Create Post
            </Button>
            <Button type='reset' variant='outlined' color='secondary' onClick={() => setDate(null)}>
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabInfo
