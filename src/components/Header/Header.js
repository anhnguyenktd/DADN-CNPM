import React, {useRef} from 'react'
import { Container } from 'reactstrap'
import logo from "../../assets/images/logo.png"
import { NavLink, Link } from "react-router-dom"
import '../../styles/header.css'
import { useSelector, useDispatch } from 'react-redux'

import { cartUiActions } from '../../store/shopping-cart/cartUiSlice'

const nav__links = [
  {
    display: 'TRANG CHỦ',
    path: '/home',  
  },
  {
    display: 'THỰC ĐƠN',
    path: '/foods',  
  },
  {
    display: 'GIỎ HÀNG',
    path: '/cart',  
  },
  {
    display: 'LIÊN HỆ',
    path: '/contact',  
  },
]

const Header = () => {
  const menuRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch()
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  return (
    <header className="header">
      <Container>
        <div className='nav__wrapper d-flex align-items-center justify-content-between'>
          {/* ========== logo ========== */}
          <div className="logo">
            <img src={logo} alt="logo"/>
            <h5>CSE FAST FOOD</h5>
          </div>
            {/* =========== menu =========*/}
            <div className='navigation' ref={menuRef}>
              <div className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                    <NavLink 
                      onClick={toggleMenu}
                      to={item.path} key={index}
                      className={navClass => navClass.isActive ? 'active menu' : ''}
                      >{item.display}
                    </NavLink>
                ))}
              </div>
            </div>

            {/* ========= nav right icons ========*/}
            <div className='nav__right d-flex align-items-center gap-4'>
              <span className='cart__icon' onClick={toggleCart}>
                <i class="ri-shopping-basket-line"></i>
                <span className='cart__badge'>
                  {totalQuantity}
                </span>
              </span>
              <span className='user'>
                <Link to='/login'>
                  <i class="ri-user-line">
                  </i>
                </Link>
              </span>
              <span className='mobile__menu' onClick={toggleMenu}>
                <i class="ri-menu-line"></i>
              </span>
            </div>
        </div>
      </Container>
    </header>
  )
}

export default Header