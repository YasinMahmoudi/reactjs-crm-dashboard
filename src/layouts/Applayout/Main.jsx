import styled from "styled-components";

const Main = styled.main`
  grid-column: 2 / -1;
  grid-row: 2 / -1;
  height: calc(100dvh - var(--header-height) - var(--gap-size));
  overflow-y: auto;
  padding: max(2rem, 2vw);
`;

export default Main;
