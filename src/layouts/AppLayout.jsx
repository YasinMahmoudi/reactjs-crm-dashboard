import styled from 'styled-components';

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

const Sidebar = styled.aside`
  grid-column: 1 / 2;
  grid-row: 1/ -1;
`;

const Header = styled.header`
  grid-column: 2 / -1;
  grid-row: 1 / 2;
`;

const Main = styled.main`
  grid-column: 2 / -1;
  grid-row: 2 / -1;
  height: calc(100dvh - var(--header-height) - var(--gap-size));
  overflow-y: auto;
`;

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar>SIDEBAR</Sidebar>
      <Header>HEADER</Header>
      <Main>MAIN</Main>
    </StyledAppLayout>
  );
}
