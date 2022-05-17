import { Button } from "@chakra-ui/react";

const ResumeUpload = ({ parseStatus, handleFileInput }) => (
  <Button
    isLoading={parseStatus === "uploading" ? true : false}
    loadingText={"Loading"}
    colorScheme="black"
    variant="outline"
    spinnerPlacement="end"
    mr="5"
  >
    <label>
      Upload resume (docx or pdf)
      <input
        name="resume"
        tabIndex="-1"
        type="file"
        onChange={handleFileInput}
      />
    </label>
  </Button>
);

export default ResumeUpload;
