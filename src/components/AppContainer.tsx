import Grid from "@mui/material/Grid";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin-top: 70px;
`;
export default function AppContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledContainer>
      <Grid container spacing={2}>
        <Grid item sm={3}></Grid>
        <Grid item sm={6} xs={10}>
          {children}
        </Grid>

        <Grid item sm={3}></Grid>
      </Grid>
    </StyledContainer>
  );
}
