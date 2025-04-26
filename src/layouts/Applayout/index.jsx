import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router';
import Main from './Main';
import { useState } from 'react';

const StyledAppLayout = styled.div`
  --sidebar-width: 300px;
  --gap-size: 0;
  --header-height: 80px;

  height: 100dvh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: var(--header-height) 1fr;
  gap: var(--gap-size);

  @media screen and (min-width: 900px) {
    grid-template-columns: var(--sidebar-width) 1fr;
  }
`;

export default function AppLayout() {
  const [open, setOpen] = useState(false);

  const toggleSidebar = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <StyledAppLayout>
      <Sidebar
        toggleSidebar={toggleSidebar}
        open={open}
      />

      <Header toggleSidebar={toggleSidebar} />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}
