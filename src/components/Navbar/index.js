import React, { useEffect, useState } from 'react';
import { animateScroll } from 'react-scroll';
import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './styles';

function Navbar({ onToggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  function handleChangeNav() {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  function handleToggleHome() {
    animateScroll.scrollToTop();
  }

  useEffect(() => {
    window.addEventListener('scroll', handleChangeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={handleToggleHome}>dolla.</NavLogo>
          <MobileIcon onClick={onToggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth
                duration={500}
                spy
                exact="true"
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="discover"
                smooth
                duration={500}
                spy
                exact="true"
              >
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth
                duration={500}
                spy
                exact="true"
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="signup"
                smooth
                duration={500}
                spy
                exact="true"
              >
                SignUp
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

Navbar.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default Navbar;
