import styled from "styled-components";
import Typography from "@mui/material/Typography";

import SectionContainer from "../SectionContainer";
import { CYAN_BLUE } from "../../constants/colours";

import phoneLines from "../../resources/phone-lines.jpg";

const TextContainer = styled.div`
  padding-top: 30px;
  padding-left: 40px;
  padding-right: 40px;
`;

export default function PhoneLines() {
  return (
    <SectionContainer>
      <TextContainer>
        <Typography variant="h5" color={CYAN_BLUE} gutterBottom noWrap={false}>
          আমাদের হেল্পলাইন সেবা
        </Typography>
        <Typography variant="body2" color={CYAN_BLUE} paragraph>
          গ্রামীনফোনঃ ০১৭৭৯৫৫৪৩৯১, ০১৭৭৯৫৫৪৩৯২ <br />
          এয়ারটেলঃ ০১৬৮৮৭০৯৯৬৫, ০১৬৮৮৭০৯৯৬৬
          <br /> বাংলালিংকঃ ০১৯৮৫২৭৫২৮৬
          <br />
          রবিঃ ০১৮৫২০৩৫৬৩৪
          <br /> টেলিটকঃ ০১৫১৭৯৬৯১৫০
          <br />
          প্রতিদিন দুপুর ৩ টা থেকে ভোর ৩ টা পর্যন্ত।
        </Typography>
      </TextContainer>
      <img src={phoneLines} width={window.innerHeight > 800 ? 275 : 330} />
    </SectionContainer>
  );
}
