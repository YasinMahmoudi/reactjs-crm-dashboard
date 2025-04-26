import styled from "styled-components";

const Main = styled.main`

  height: calc(100dvh - var(--header-height) - var(--gap-size));
  overflow-y: auto;
  padding: max(2rem, 2vw);


  @media screen and (min-width: 900px) {
    grid-column: 2 / -1;
    grid-row: 2 / -1;
  }

`;

export default Main;
