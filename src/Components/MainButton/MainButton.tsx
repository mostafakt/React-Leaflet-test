import { ButtonProps } from "@mui/material";
import React from "react";
import { ButtonStyle } from "./MainButton.Style";
const MainButton = (props: ButtonProps) => {
  return (
    <>
      <ButtonStyle {...props}></ButtonStyle>
    </>
  );
};

export default MainButton;
