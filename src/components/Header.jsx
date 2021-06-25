import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <Link to='/'>
            <img src="img/logoHeader.png" alt="Logo" />
          </Link>
          <span>${totalPrice}</span>
          <Link to='/cart'>
            <img src="img/cartWhiteHeader.png" alt="Cart" />
          </Link>
         <i>{totalCount}</i>
        </div>
      </div>
    </div>
  );
}

export default Header;