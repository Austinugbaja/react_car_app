import React from "react";
import styled from "styled-components";
import CarLogoImg from "../../../assets/images/car-logo.png";
import CarLogoDarkImg from "../../../assets/images/car-logo-dark.png";
import tw from "twin.macro";

interface ILogoProps {
  color?: "white" | "dark";
  bgColor?: "white" | "dark";
}

const Logo = (props: ILogoProps) => {
  const { color, bgColor } = props;

  return (
    <LogoContainer>
      <Image>
        <img src={bgColor === "dark" ? CarLogoDarkImg : CarLogoImg} alt="" />
      </Image>
      <LogoText color={color || "dark"}>Carplug</LogoText>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  ${tw`
        flex
        items-center
    `}
`;

const LogoText = styled.div`
  ${tw`
        text-xl
        md:text-2xl
        font-bold
        text-black
        m-1
    `}
  ${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-black`)}
`;

const Image = styled.div`
  width: auto;
  ${tw`
        h-6
        md:h-9
    `}

  img {
    width: auto;
    height: 100%;
  }
`;
