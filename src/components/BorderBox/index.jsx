import { Box } from "@mui/material";
import styled from "styled-components";


const BorderBox = styled(Box)`
  --box-padding: max(1rem, 2vw);
  --border-radius: 10px;

  border: 1px solid #e3e3e3;
  padding: var(--box-padding);
  border-radius: var(--border-radius);
`;

export default BorderBox;