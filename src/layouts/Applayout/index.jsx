import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';

const StyledAppLayout = styled.div`
  --sidebar-width: 300px;
  --gap-size: 10px;
  --header-height: 80px;
  --bg-section: rgba(244, 244, 244, 1);

  height: 100dvh;
  display: grid;
  grid-template-columns: var(--sidebar-width) 1fr;
  grid-template-rows: var(--header-height) 1fr;
  gap: var(--gap-size);

  > * {
    background-color: var(--bg-section);
  }
`;

const Main = styled.main`
  grid-column: 2 / -1;
  grid-row: 2 / -1;
  height: calc(100dvh - var(--header-height) - var(--gap-size));
  overflow-y: auto;
  padding: max(2rem, 2vw);
`;

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />

      <Header />
      <Main>MAIN</Main>
    </StyledAppLayout>
  );
}
