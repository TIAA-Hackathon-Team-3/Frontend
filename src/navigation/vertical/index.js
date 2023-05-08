// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import edit from 'mdi-material-ui/AccountEdit'
import {Category, GroupRounded } from '@material-ui/icons'
import { useSelector } from 'react-redux'

const Navigation = () => {
  const { loginAuth } = useSelector(state => state.auth);
  return loginAuth.data.Role==="USER" ? [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      title: 'Create Post',
      icon: edit,
      path: '/create-post'
    },
    {
      title: 'Spaces',
      icon: GroupRounded,
      path: '/spaces/spaces'
    },
    {
      title: 'Categories',
      icon: Category,
      path: '/category/category'
    },
    
  ] : [
    {
      title: 'Admin',
      icon: AccountCogOutline,
      path: '/Admin/StatisticsCard'
    },
    {
      title: 'Demo',
      icon: AccountCogOutline,
      path: '/Admin/HomePage'
    }
  ];
}

export default Navigation
