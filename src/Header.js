import React from 'react';
import './Header.scss';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

function Header(){
    return(
        <div className='Header'>
            <div className="header__left">
                <img className="header__icon" alt="airbnb logo" src="https://miro.medium.com/max/2000/1*BsKbDTA9ZUVroeJ7asId4Q.png" />  
            </div>
            <div className='header__center'>
                <input type="text" />
                <SearchIcon />
            </div>
            <div className="header__right">
                <a className="header__host-link">Become a host</a>
                <div>
                    <LanguageIcon />
                    <ExpandMoreIcon />
                </div>
                <div>
                    <MenuIcon />
                    <AccountCircleIcon />
                </div>
            </div>
        </div>
    )
}

export default Header;