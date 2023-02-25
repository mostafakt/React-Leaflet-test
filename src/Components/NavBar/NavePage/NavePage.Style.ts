import Box from "@mui/material/Box";
import styled from "styled-components";

const Container = styled(Box)<{ active: boolean }>`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 2px;

  span {
    color: ${(prop) => (prop.active ? "black" : "#828282")};
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
`;
const ButtomLine = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 2px;
  background: rgba(237, 157, 153, 0.5);
  border-radius: 5px;
`;
const SvgStyle = styled.path`
  color: linear-gradient(225deg, #ed9d99 0%, #d14dcd 100%); ;
`;
export { Container, ButtomLine, SvgStyle };
