// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
import InputAdornment from '@mui/material/InputAdornment'

import Menu from 'mdi-material-ui/Menu'
import Magnify from 'mdi-material-ui/Magnify'

import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import NotificationDropdown from 'src/@core/layouts/components/shared-components/NotificationDropdown'
import { useSelector } from 'react-redux'

const AppBarContent = props => {
  const { hidden, settings, saveSettings, toggleNavVisibility } = props

  const hiddenSm = useMediaQuery(theme => theme.breakpoints.down('sm'))
  const { loginAuth } = useSelector(state => state.auth);
  console.log("navbar",loginAuth)

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'  }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        {hidden ? (
          <IconButton
            color='inherit'
            onClick={toggleNavVisibility}
            sx={{ ml: -2.75, ...(hiddenSm ? {} : { mr: 3.5 }) }}
          >
            <Menu />
          </IconButton>
        ) : null}
        <TextField
          size='small'
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Magnify fontSize='small' />
              </InputAdornment>
            )
          }}
        />
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center', right:'6em'  }}  >
        {hiddenSm ? null : (
          <Box
            component='a'
            target='_blank'
            rel='noreferrer'
            sx={{ mr: 4, display: 'flex' }}
            href=''
          >
          </Box>
        )}
        <ModeToggler settings={settings} saveSettings={saveSettings} />
        <NotificationDropdown />
        {
          loginAuth?.data?.token===undefined ? (<>
          <Button variant="" href="/pages/login/" sx={{margin:2}}> Login</Button>
        <Button variant="contained" href="/pages/register/" sx={{margin:1}}> Register</Button>
          </>):(
            <UserDropdown/>
          ) 
        }
        
        
      </Box>
    </Box>
  )
}

export default AppBarContent
