import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router';
import Main from './Main';
import { useState } from 'react';
import MobileSidebar from '../../components/MobileSidebar';
import MainNav from '../../components/MainNav';
import MenuToggleButton from '../../components/MenuToggleButton';
import HeaderMenu from '../../components/HeaderMenu';

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
      <Header>
        <MenuToggleButton toggleSidebar={toggleSidebar} />
        <HeaderMenu />
      </Header>

      <Sidebar>
        <MainNav />

        <MobileSidebar
          toggleSidebar={toggleSidebar}
          open={open}>
          <MainNav />
        </MobileSidebar>
      </Sidebar>

      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}
