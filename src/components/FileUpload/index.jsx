import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

FileUpload.propTypes = {
  onGetFile: PropTypes.func,
};

function FileUpload({ onGetFile }) {
  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      color="secondary"
      size="small">
      Upload file
      <VisuallyHiddenInput
        type="file"
        onChange={(e) => onGetFile(e.target.files[0])}
      />
    </Button>
  );
}

export default FileUpload;
