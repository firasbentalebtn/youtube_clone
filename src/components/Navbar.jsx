import React from 'react'
import { Stack,Typography } from '@mui/material'
import {Link} from 'react-router-dom';
import {logo} from '../utils/constants'
import SearchBar from './SearchBar';
const Navbar = () =>  (
    <Stack direction="row" alignItems="center" p={2} 
    sx={{position:'sticky',background:'#101010',top:0,justifyContent:'space-between'}}>
      
      <Link to="/" style={{display:'flex',alignItems:'center'}}> 
 
           <img src={logo} alt="logo" height={45} />
           <Typography marginLeft="1rem" variant="h4" fontWeight="bold" color="#FFF">
        Youtube React-App   
        </Typography>    
      </Link>
      <SearchBar/>
    </Stack>
  )


export default Navbar