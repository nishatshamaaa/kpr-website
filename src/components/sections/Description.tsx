import styled from "styled-components";
import Typography from "@mui/material/Typography";

import { MAGENTA } from "../../constants/colours";
import SectionContainer from "../SectionContainer";

import description from "../../resources/description.jpg";

const TextContainer = styled.div`
  padding-top: 30px;
  padding-left: 40px;
  padding-right: 40px;
`;

export default function Description() {
  return (
    <SectionContainer>
      <img src={description} width={window.innerHeight > 800 ? 275 : 330} />

      <TextContainer>
        <Typography
          variant="h5"
          color={MAGENTA}
          gutterBottom
          noWrap={false}
          align="right"
        >
          Why we do it
        </Typography>
        <Typography variant="body2" color={MAGENTA} paragraph align="right">
          We do this to help alleviate feelings of isolation, distress and
          suicidal inclinations.
          <br />
          <br /> We talk about everything but some of the common issues we deaI
          with are: Loneliness, suicidal thoughts, depression, Anxiety,
           frustration, loss, mental Illness, failure, stress, fear
        </Typography>
      </TextContainer>
    </SectionContainer>
  );
}
