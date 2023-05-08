import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import edit from 'mdi-material-ui/AccountEdit'
import {Category, GroupRounded } from '@material-ui/icons'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Edit Post',
      icon: edit,
      path: '/create-post'
    },
  ]
}

export default navigation
