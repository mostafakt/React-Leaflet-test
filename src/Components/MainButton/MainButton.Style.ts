import styled from "styled-components";
import { Button } from "@mui/material";

const ButtonStyle = styled(Button)`
  height: 48px;
  background-image: linear-gradient(266.27deg, #56ccf2 0%, #3b7ec5 100%);
  padding: 13px 169px 15px 169px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  border: 0px;
  width: 384px;
  span {
    font-family: "Montserrat";
    font-style: normal !important;
    font-weight: 500 !important;
    font-size: 16px !important;
    line-height: 20px !important;
    color: #ffffff !important;
    margin: 0px !important;
  }
  &:hover {
    background-position: right center;
    text-decoration: none;
  }

  color: white;
  border-radius: 10px !important;
  & * {
    margin-left: 12px !important;
    font-family: "Montserrat" !important;
    font-style: normal !important;
    font-weight: 500 !important;
    font-size: 16px !important;
    line-height: 20px !important;

    color: #ffffff !important;
  }
  gap: 12px;
  width: 100% !important;
  padding: 0px !important;
  justify-content: flex-start !important;
  padding-left: 4px;
`;
export { ButtonStyle };
