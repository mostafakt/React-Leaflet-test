import React from "react";
import {
  BlueBox,
  BoxImage,
  Container,
  GoldBox,
  Line,
  RedBox,
} from "./SideList.Style";

const SideList = () => {
  return (
    <Container>
      <GoldBox>
        <BoxImage
          src={process.env.PUBLIC_URL + "/assets/Icons/Leaderboard Icon.svg"}
        />
      </GoldBox>

      <RedBox>
        <BoxImage
          src={process.env.PUBLIC_URL + "/assets/Icons/Facebook Icon.svg"}
        />
        <Line></Line>
        <BoxImage
          src={process.env.PUBLIC_URL + "/assets/Icons/mdi_linkedin.svg"}
        />
        <Line></Line>
        <BoxImage
          src={process.env.PUBLIC_URL + "/assets/Icons/Instagram Icon.svg"}
        />
      </RedBox>
      <BlueBox>
        <BoxImage
          src={process.env.PUBLIC_URL + "/assets/Icons/Support Icon.svg"}
        />
      </BlueBox>
    </Container>
  );
};

export default SideList;
