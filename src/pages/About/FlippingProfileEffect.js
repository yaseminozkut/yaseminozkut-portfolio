import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Replace these imports with your actual image paths
import realPhoto from '../../img/Image.png';
import emojiPhoto from '../../img/profile.JPG';

const ProfileFlipContainer = styled.div`
  perspective: 1000px;
  width: 130px;
  height: 130px;
  margin: -8% auto 0 auto;
  @media (max-width: 900px){
    width: 80px;
    height: 80px;
  }
`;

const FlipInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.7s cubic-bezier(0.55, 0, 0.1, 1);
  transform-style: preserve-3d;
  ${(props) => props.flipped && 'transform: rotateY(180deg);'}
`;

const FlipFace = styled.img`
  position: absolute;
  width: 130px;
  height: 130px;
  object-fit: cover;
  border-radius: 50%;
  backface-visibility: hidden;
  border: 2px black;
  @media (max-width: 900px){
    width: 80px;
    height: 80px;
  }
  /* Layered shadow for strong, realistic 3D effect: */
  box-shadow:
    0 6px 14px 0 rgba(44, 62, 80, 0.23),   /* main shadow */
    0 1.5px 6px 0 rgba(20, 20, 40, 0.14),  /* tight shadow */
    0 0 0 4px rgba(80, 80, 120, 0.06);     /* subtle halo */
`;

const FlipFaceBack = styled(FlipFace)`
  transform: rotateY(180deg);
`;

const FlippingProfile = () => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setFlipped(f => !f), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <ProfileFlipContainer>
      <FlipInner flipped={flipped}>
        <FlipFace src={emojiPhoto} alt="Profile Emoji" />
        <FlipFaceBack src={realPhoto} alt="Profile Real" />
      </FlipInner>
    </ProfileFlipContainer>
  );
};

export default FlippingProfile;
