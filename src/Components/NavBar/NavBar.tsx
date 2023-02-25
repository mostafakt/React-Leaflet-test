import { AppBar } from "@material-ui/core";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainButton from "../MainButton";
import {
  Container,
  Contuct,
  LeftContainer,
  LogoImage,
  PagesList,
  RightContainer,
} from "./NavBar.Style";
import NavePage from "./NavePage";
import {
  AboutIcon,
  APlusIcon,
  ExploreIcon,
  FeaturesIcon,
  HomeIcon,
  LoginButtonIcon,
  PartnersIcon,
  PhoneIcon,
  ServicesIcon,
} from "./NavePage/Icons";
const NavBar = () => {
  const [actiePage, setActivePage] = useState({
    home: false,
    about: false,
    serices: false,
    features: false,
    partners: false,
    explore: false,
  });
  const navigate = useNavigate();
  return (
    <>
      <AppBar position="static">
        <Container>
          <LeftContainer>
            <LogoImage src={"../assets/images/Logo.svg"} />
            <PagesList>
              <NavePage
                onClick={() => {
                  setActivePage({
                    home: true,
                    about: false,
                    serices: false,
                    features: false,
                    partners: false,
                    explore: false,
                  });
                }}
                active={actiePage.home}
                pageName="Home"
                icon={<HomeIcon active={actiePage.home} />}
              />
              <NavePage
                onClick={() => {
                  setActivePage({
                    home: false,
                    about: true,
                    serices: false,
                    features: false,
                    partners: false,
                    explore: false,
                  });
                }}
                active={actiePage.about}
                pageName="About"
                icon={<AboutIcon active={actiePage.about} />}
              />
              <NavePage
                onClick={() => {
                  setActivePage({
                    home: false,
                    about: false,
                    serices: true,
                    features: false,
                    partners: false,
                    explore: false,
                  });
                }}
                active={actiePage.serices}
                pageName="Services"
                icon={<ServicesIcon active={actiePage.serices} />}
              />
              <NavePage
                onClick={() => {
                  setActivePage({
                    home: false,
                    about: false,
                    serices: false,
                    features: true,
                    partners: false,
                    explore: false,
                  });
                }}
                active={actiePage.features}
                pageName="Features"
                icon={<FeaturesIcon active={actiePage.features} />}
              />
              <NavePage
                onClick={() => {
                  setActivePage({
                    home: false,
                    about: false,
                    serices: false,
                    features: false,
                    partners: true,
                    explore: false,
                  });
                }}
                active={actiePage.partners}
                pageName="Partners"
                icon={<PartnersIcon active={actiePage.partners} />}
              />
              <NavePage
                onClick={() => {
                  setActivePage({
                    home: false,
                    about: false,
                    serices: false,
                    features: false,
                    partners: false,
                    explore: true,
                  });
                }}
                active={actiePage.explore}
                pageName="Explore"
                icon={<ExploreIcon active={actiePage.explore} />}
              />
            </PagesList>
          </LeftContainer>

          <RightContainer>
            <Contuct>
              <PhoneIcon />
              <span>Contact Us</span>
            </Contuct>
            <Box sx={{ width: "188px", mr: "12px" }}>
              <MainButton
                onClick={() => navigate("/login")}
                startIcon={<LoginButtonIcon />}
              >
                <span>Login/Sign Up</span>
              </MainButton>
            </Box>
            <APlusIcon />
          </RightContainer>
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;
