import styled from "styled-components";
import { Box } from "@mui/material";
const Container = styled(Box)`
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 0px;
  top: 241px;
  gap: 8px;
`;
const GoldBox = styled(Box)`
  width: 72px;
  height: 56px;
  background: #fb9a0b;
  border-radius: 10px 0px 0px 10px;
  display: flex;
  justify-content: center;
`;
const BoxImage = styled.img``;
const RedBox = styled(Box)`
  width: 72px;
  height: 138px;

  background: #ed9d99;
  border-radius: 10px 0px 0px 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 24px;
`;
const Line = styled.div`
  width: 56px;
  height: 1px;
  background: rgba(255, 255, 255, 0.25);
`;
const BlueBox = styled(Box)`
  width: 72px;
  height: 56px;
  background: #3b7ec5;
  border-radius: 10px 0px 0px 10px;
  display: flex;
  justify-content: center;
`;
export { BlueBox, Line, BoxImage, Box, Container, GoldBox, RedBox };
