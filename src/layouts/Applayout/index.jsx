import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router';
import Main from './Main';

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

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />

      <Header />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}
