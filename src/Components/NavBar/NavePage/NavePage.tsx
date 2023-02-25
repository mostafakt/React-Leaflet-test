import { SvgIconProps } from "@material-ui/core";
import { Box } from "@mui/material";
import { ReactElement } from "react";
import { ButtomLine, Container } from "./NavePage.Style";
interface INavPage {
  pageName: string;
  active: boolean;
  icon: ReactElement;
  onClick: () => void;
}
const NavePage = ({ active, icon, pageName, onClick }: INavPage) => {
  return (
    <>
      <Box
        onClick={onClick}
        sx={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <Container active={active}>
          <Box
            sx={{
              p: "3.33px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {icon}
          </Box>

          <span>{pageName}</span>
        </Container>
        {active && <ButtomLine></ButtomLine>}
      </Box>
    </>
  );
};

export default NavePage;
