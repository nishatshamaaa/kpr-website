import styled from "styled-components";
import Typography from "@mui/material/Typography";

import { MAGENTA } from "../../constants/colours";
import SectionContainer from "../SectionContainer";

import intro from "../../resources/intro.png";

const TextContainer = styled.div`
  padding-top: 30px;
  padding-right: 40px;
`;

export default function Intro() {
  return (
    <SectionContainer>
      <img src={intro} width={window.innerHeight > 800 ? 275 : 330} />

      <TextContainer>
        <Typography
          variant="h5"
          color={MAGENTA}
          gutterBottom
          noWrap={false}
          align="right"
        >
          আমরা কারা
        </Typography>
        <Typography variant="body2" color={MAGENTA} paragraph align="right">
          কান পেতে রই একটি মানসিক সহায়তা এবং আত্মহত্যা প্রতিরোধ হেল্পলাইন।
          <br />
          আমাদের প্রশিক্ষনপ্রাপ্ত স্বেচ্ছাসেবকরা আপনার  গোপনীয়তা নিশ্চিত করে
          সহমর্মিতা এবং খোলা মনে কথা শোনার মাধ্যমে মানসিক সহায়তা প্রদান করে
          থাকে।
        </Typography>
      </TextContainer>
    </SectionContainer>
  );
}
