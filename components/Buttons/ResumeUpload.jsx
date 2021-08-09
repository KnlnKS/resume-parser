import { Button } from '@chakra-ui/react';

const ResumeUpload = ({ parseStatus, handleFileInput }) => (
  <Button
    isLoading={parseStatus === 'uploading' ? true : false}
    loadingText="Loading"
    colorScheme="black"
    variant="outline"
    spinnerPlacement="end"
    mr="5"
  >
    <span>
      Upload resume (docx or pdf)
      <input
        name="resume"
        tabIndex="-1"
        type="file"
        onChange={handleFileInput}
      />
    </span>
  </Button>
);

export default ResumeUpload;
