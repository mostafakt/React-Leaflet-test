import React from "react";
import {
  ContuctUs,
  FirstSection,
  FooterSt,
  FullLine,
  Line,
  LinesContainer,
  LogoContainer,
  MapContainer,
  RightLinesContainer,
  RightSideContainer,
  SecoundSection,
  SideContainer,
} from "./Footer.Style";
const Footer = () => {
  return (
    <FooterSt>
      <FirstSection sx={{ py: "48px" }}>
        <LogoContainer>
          <RightLinesContainer>
            <Line width={48}></Line>
            <Line width={96}></Line>
            <Line width={72}></Line>
          </RightLinesContainer>
          <img src={process.env.PUBLIC_URL + "/assets/Images/Logo.svg"} />
          <LinesContainer>
            <Line width={48}></Line>
            <Line width={96}></Line>
            <Line width={72}></Line>
          </LinesContainer>
        </LogoContainer>
        <MapContainer>
          <SideContainer>
            <ContuctUs>
              <span>Privacy Policy</span>
              <span>Support</span>
              <span>Contact Us</span>
            </ContuctUs>
            <FullLine></FullLine>
          </SideContainer>
          <img src={process.env.PUBLIC_URL + "/assets/Images/Map.svg"} />
          <RightSideContainer>
            <FullLine></FullLine>
            <img
              width="96px"
              height="24px"
              src={process.env.PUBLIC_URL + "/assets/Icons/sotialmedia.svg"}
            />
          </RightSideContainer>
        </MapContainer>
      </FirstSection>
      <SecoundSection sx={{ py: "25px" }}>
        <img src={process.env.PUBLIC_URL + "/assets/Images/Footer Image.svg"} />
      </SecoundSection>
    </FooterSt>
  );
};

export default Footer;
