import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 270px;
  width: 100%;
  margin-top: 40px;
  background-color: #ffffff;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: row;
  flex-grow: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 600px;
  }
`;

export default function SectionContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container>{children}</Container>;
}
