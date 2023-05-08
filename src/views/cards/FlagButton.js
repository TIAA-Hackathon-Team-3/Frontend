import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ReactComponent as FlagIcon } from './path/to/flag-icon.svg';

const FlagButton = () => {
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
  
    return (
      <Box>
        <Button onClick={handlePopoverOpen}>
          <FlagIcon />
        </Button>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography sx={{ p: 2 }}>Select language:</Typography>
          <Button sx={{ m: 1 }} onClick={handlePopoverClose}>English</Button>
          <Button sx={{ m: 1 }} onClick={handlePopoverClose}>Español</Button>
          <Button sx={{ m: 1 }} onClick={handlePopoverClose}>Français</Button>
        </Popover>
      </Box>
    );
  };
  