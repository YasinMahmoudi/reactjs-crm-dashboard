import { Typography } from "@mui/material";
import MainButton from "../../components/MainButton";
import MoveBackButton from "../../components/MoveBackButton";
import RefreshButton from "../../components/RefreshButton";
import { Row } from "../../components/Row";
import TaxSearch from "./TaxSearch";


const mainRowStyle = { flexDirection: { xs: 'column', sm: 'row' } };
const actionRowStyle = { gap: '10px', flexWrap: 'wrap' };

export default function TaxToolbar() {
  return (
    <Row sx={mainRowStyle}>
      <MoveBackButton />

      <Row sx={actionRowStyle}>
        <TaxSearch />

        <RefreshButton />

        <MainButton to="create">
          <Typography>Add New Tax</Typography>
        </MainButton>
      </Row>
    </Row>
  );
}
