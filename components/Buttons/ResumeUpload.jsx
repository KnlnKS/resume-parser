import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { TOKEN_URL } from "../../constants";

const ResumeUpload = ({ parseStatus, handleFileInput }) => {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    fetch(TOKEN_URL, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((respData) => {
        setData(respData);
        setLoaded(true);
      });
  }, []);

  return (
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
          onChange={handleFileInput(data, loaded)}
        />
      </label>
    </Button>
  );
};

export default ResumeUpload;
