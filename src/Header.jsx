import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

const Header = () => {
   const [{basket, user}, dispatch] = useStateValue();
   const handleAuthentication = () => {
    if(user)
        auth.signOut();
   }
     
  return (
    <div className='header'>
        <Link to="/">
        <img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
        </Link>
        <div className="header_search">
            <input className='header_searchIn' type='text' />
            <SearchIcon className='header_searchIcon'/>
        </div>
        <div className="header_nav">
            <Link to={!user &&"/login"}>
            <div className="header_option" onClick={handleAuthentication}>
                <span className='header_option1'>
                    Hello 
                </span>
                <span className='header_option2'>
                    {user? 'Sign-Out' : 'Sign-In'}
                </span>
            </div>
            </Link>
            <div className="header_option">
            <span className='header_option1'>
                    Returns
                </span>
                <span className='header_option2'>
                    & Orders
                </span>
                </div>

                <Link to="/checkout">
                <div className="headerbasket_option">
                    <ShoppingCartIcon/>
                    <span className='header_option2 header_basketcount'>
                    {basket.reduce((total, item) => total + item.quantity, 0)}
                        </span>
                    </div> 
                </Link>
        </div>
      
    </div>
  )
}

export default Header
