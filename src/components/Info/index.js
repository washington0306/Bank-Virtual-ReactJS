/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Column1,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  Img,
} from './styles';
import { Button } from '../Button';

function Info({
  lightBg, id, imgStart, topLine, lightText, headLine, img,
  darkText, description, buttonLabel, alt, primary, dark, dark2,
}) {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth
                    duration={500}
                    spy
                    exact="true"
                    offset={0}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}

Info.propTypes = {
  id: PropTypes.string.isRequired,
  lightBg: PropTypes.bool.isRequired,
  lightText: PropTypes.bool.isRequired,
  darkText: PropTypes.bool.isRequired,
  imgStart: PropTypes.bool.isRequired,
  primary: PropTypes.bool.isRequired,
  dark: PropTypes.bool.isRequired,
  dark2: PropTypes.bool.isRequired,
  topLine: PropTypes.string.isRequired,
  headLine: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Info;
