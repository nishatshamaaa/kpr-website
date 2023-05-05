import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import kprLogo from "../logo/kpr-logo.png";
import styled from "styled-components";
import PoweredBySajida from "./PoweredBySajida";

const LogoContainer = styled.div`
  flex-grow: 1;
`;
const StyledLogoImage = styled.img`
  height: 40px;
  display: inline-block;
`;

const StyledLogoText = styled.div`
  display: inline-block;
  float: right;
  padding-top: 10px;
  color: #565656;
`;
export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          backgroundColor: "#EFEFEF",
          boxShadow: 0,
        }}
        position="fixed"
      >
        <Toolbar>
          <LogoContainer>
            <Box sx={{ width: 200 }}>
              <StyledLogoImage src={kprLogo} />
              <StyledLogoText>KAAN PETE ROI</StyledLogoText>
            </Box>
          </LogoContainer>
          <PoweredBySajida />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
