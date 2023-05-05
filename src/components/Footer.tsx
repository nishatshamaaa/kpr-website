import styled from "styled-components";
import Typography from "@mui/material/Typography";
import { Grid, Link } from "@mui/material";

import { CLOUDY_GRAY, LIVER } from "../constants/colours";
import PoweredBySajida from "./PoweredBySajida";
import KprLogo from "../logo/kpr-logo-bg.png";

const FooterContainer = styled.div`
  margin-top: 40px;
`;

const FooterElementBorder = styled.div`
  border-left: 1px solid ${CLOUDY_GRAY};
  height: 13px;
  margin: 4px 7px 0 7px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const FooterLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 0px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  justify-content: center;
`;

const KPRLogoContainer = styled.div`
  margin: 0 50px;
`;

export default function Footer() {
  return (
    <Grid container spacing={2}>
      <Grid item sm={2}></Grid>
      <Grid item sm={8} xs={10}>
        <FooterContainer>
          <Typography
            variant="subtitle1"
            paragraph
            align="center"
            sx={{ color: LIVER }}
          >
            Contact Us
          </Typography>
          <FooterLinkContainer>
            <Link
              variant="body2"
              href="https://www.facebook.com/kaan.pete.roi"
              underline="none"
              rel="noopener noreferrer"
              target="_blank"
              sx={{ color: CLOUDY_GRAY, "&:hover": { color: LIVER } }}
              align="center"
            >
              Facebook
            </Link>
            <FooterElementBorder />
            <Link
              variant="body2"
              href="mailto:info@shuni.com"
              underline="none"
              rel="noopener noreferrer"
              target="_blank"
              sx={{ color: CLOUDY_GRAY, "&:hover": { color: LIVER } }}
              align="center"
            >
              E: info@shuni.org
            </Link>
            <FooterElementBorder />

            <Link
              variant="body2"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdh46ZFHDF-vCTT4v4Db9uWUFr3_CGfzdvsGD1R2rLaOi_reA/viewform"
              underline="none"
              rel="noopener noreferrer"
              target="_blank"
              sx={{ color: CLOUDY_GRAY, "&:hover": { color: LIVER } }}
              align="center"
            >
              Volunteer application form
            </Link>
          </FooterLinkContainer>
          <Typography
            variant="body2"
            paragraph
            align="center"
            sx={{ color: "#686767", fontSize: 10, marginTop: 5 }}
          >
            © 2023 | All rights reserved
          </Typography>
          <LogoContainer>
            <KPRLogoContainer>
              <img src={KprLogo} height={45}></img>
            </KPRLogoContainer>
            <PoweredBySajida />
          </LogoContainer>
        </FooterContainer>
      </Grid>
    </Grid>
  );
}
