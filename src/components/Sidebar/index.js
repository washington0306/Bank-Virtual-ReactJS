import React from 'react';
import PropTypes from 'prop-types';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarBtnWrap,
  SidebarLink,
  SidebarRoute,
  SidebarMenu,
} from './styles';

function Sidebar({ onToggle, isOpen }) {
  return (
    <SidebarContainer
      isOpen={isOpen}
      onClick={onToggle}
    >
      <Icon onClick={onToggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={onToggle}>About</SidebarLink>
          <SidebarLink to="discover" onClick={onToggle}>Discover</SidebarLink>
          <SidebarLink to="services" onClick={onToggle}>Services</SidebarLink>
          <SidebarLink to="signup" onClick={onToggle}>Sign Up</SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

Sidebar.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Sidebar;
