import React from 'react';
import {
  FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin,
} from 'react-icons/fa';
import { animateScroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLiksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRigths,
  SocialIcons,
  SocialIconsLinks,
} from './styles';

function Footer() {
  function handleToggleHome() {
    animateScroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLiksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Suport</FooterLink>
              <FooterLink to="/">Destinations</FooterLink>
              <FooterLink to="/">Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLiksWrapper>
          <FooterLiksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/">Submit Videos</FooterLink>
              <FooterLink to="/">Ambassadors</FooterLink>
              <FooterLink to="/">Agency</FooterLink>
              <FooterLink to="/">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Business</FooterLinkTitle>
              <FooterLink to="/">Investment Fund</FooterLink>
              <FooterLink to="/">Real Estate Funds</FooterLink>
              <FooterLink to="/">Stock Analysis</FooterLink>
              <FooterLink to="/">Trader Area</FooterLink>
            </FooterLinkItems>
          </FooterLiksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={handleToggleHome}>dolla.</SocialLogo>
            <WebsiteRigths>dolla © {new Date().getFullYear()} All rigths reserved</WebsiteRigths>
            <SocialIcons>
              <SocialIconsLinks href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconsLinks>
              <SocialIconsLinks href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconsLinks>
              <SocialIconsLinks href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconsLinks>
              <SocialIconsLinks href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconsLinks>
              <SocialIconsLinks href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconsLinks>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
