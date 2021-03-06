import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";
import JeepImg from "../../../assets/images/jeep.png";

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <CardContainer>
        <img src={JeepImg} alt="" />
      </CardContainer>
      <InfoContainer>
        <Title>Feel The Best Experience With Our Car Rental Deals</Title>
        <InfoText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quia quo
          dolore ipsa, laudantium perspiciatis a dolores mollitia officia illo
          tenetur minima consectetur distinctio, tempore at! Possimus quibusdam
          expedita nemo corrupti inventore est at, rem aperiam quis a. Quos
          mollitia veniam exercitationem tempore magni deserunt officia porro
          quisquam sint adipisci?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repudiandae pariatur enim corporis explicabo non fugit, dignissimos voluptas aspernatur voluptatibus.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
};

export default AboutUs;

const AboutUsContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-center
        pt-4
        pb-4
        pr-7
        pl-7
        md:pr-0
        md:pl-0
        bg-white
    `}
`;
const CardContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
       md:w-1/2
       flex
       flex-col
       md:ml-6
       2xl:ml-16 
    `}
`;
const Title = styled.h1`
  ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `}
`;
const InfoText = styled.p`
  ${tw`
        md:max-w-2xl
        md:text-base
        text-sm
        text-gray-500
        font-normal
        mt-4           
    `}
`;
