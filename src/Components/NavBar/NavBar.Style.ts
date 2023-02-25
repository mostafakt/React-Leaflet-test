import { Box } from "@material-ui/core";
import styled from "styled-components";

const Container = styled(Box)`
  background-color: #f6f9fd;
  border-bottom: 1px solid #fb9a0b;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 48px 24px 24px 96px;
  flex-wrap: wrap;
`;
const LeftContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 48px;
`;
const RightContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  gap: 32px;
`;
const LogoImage = styled.img``;
const PagesList = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
  flex-wrap: wrap;
`;
const Contuct = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 8px;
  span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #333333;
  }
`;

export {
  Container,
  LeftContainer,
  LogoImage,
  PagesList,
  RightContainer,
  Contuct,
};
