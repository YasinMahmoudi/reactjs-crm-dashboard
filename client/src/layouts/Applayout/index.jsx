import { useState } from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import HeaderMenu from '../../components/HeaderMenu';
import MainNav from '../../components/MainNav';
import MenuToggleButton from '../../components/MenuToggleButton';
import MobileSidebar from '../../components/MobileSidebar';
import ModeToggle from '../../components/ModeToggle';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import { Row } from '../../components/Row';

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

        <Row ml={'auto'}>
          <ModeToggle />
          <HeaderMenu />
        </Row>
      </Header>

      <Sidebar>
        <MainNav />

        <MobileSidebar
          toggleSidebar={toggleSidebar}
          open={open}>
          <MainNav
            sx={{
              width: 200,
              padding: '10px',
              height: '100%',
              backgroundImage: (theme) =>
                theme.applyStyles(
                  'dark',
                  `linear-gradient(135deg , ${theme.palette.primary.dark}, ${theme.palette.info.light})`
                ),
              backgroundColor: (theme) =>
                theme.applyStyles('dark', theme.palette.background.default),
            }}
          />
        </MobileSidebar>
      </Sidebar>

      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}
