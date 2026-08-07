import React, { useMemo, useState } from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import { auth } from '../../firebase';
import data from '../../assets/MOCK_DATA (1).json';
import { useSearch } from '../../context/searchContext';

const Header = () => {
    const [{ basket, user }] = useStateValue();
    const { setSearch } = useSearch();

    const handleAuthentication = () => {
        if (user) auth.signOut();
    };

    const debounce = (fn, delay) => {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                fn.apply(this, args);
            }, delay);
        };
    };

    const debouncedSearch = useMemo(
        () =>
            debounce((value) => {
                setSearch(value);

                const filteredProducts = data.filter((product) =>
                    product.title.toLowerCase().includes(value.toLowerCase())
                );

                console.log("Filtered Products:", filteredProducts);
            }, 500),
        []
    );

    const handleSearchChange = (event) => {
        debouncedSearch(event.target.value);
    };

    return (
        <div className='header'>
            <Link to="/">
                <img
                    className='header_logo'
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    alt="logo"
                />
            </Link>

            <div className="header_search">
                <input
                    className='header_searchIn'
                    type='text'
                    onChange={handleSearchChange}
                />
                <SearchIcon className='header_searchIcon' />
            </div>

            <div className="header_nav">
                <Link to={!user && "/login"}>
                    <div className="header_option" onClick={handleAuthentication}>
                        <span className='header_option1'>Hello</span>
                        <span className='header_option2'>
                            {user ? 'Sign-Out' : 'Sign-In'}
                        </span>
                    </div>
                </Link>

                <div className="header_option">
                    <span className='header_option1'>Returns</span>
                    <span className='header_option2'>& Orders</span>
                </div>

                <Link to="/checkout">
                    <div className="headerbasket_option">
                        <ShoppingCartIcon />
                        <span className='header_option2 header_basketcount'>
                            {basket.reduce((total, item) => total + item.quantity, 0)}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;