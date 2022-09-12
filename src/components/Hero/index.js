import React, { useState } from 'react';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './styles';
import { Button } from '../Button';
import dataVideo from '../../assets/video/dataVideo.mp4';

function Hero() {
  const [hover, setHover] = useState(false);

  function handleHover() {
    setHover(!hover);
  }

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={dataVideo}
          type="video/mp4"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new accoun today and receive $250 in
          credit towards your
          next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            primary="true"
            dark="true"
            smooth
            duration={500}
            spy
            exact="true"
            offset={0}
          >
            Get Started { hover ? <ArrowForward /> : <ArrowRight /> }
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
