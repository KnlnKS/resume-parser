import React, { useState } from "react";

import { API_URL, MAX_FILE_SIZE } from "../../constants";
import { useToast } from "../../hooks";

import Positions from "./Positions";
import Education from "./Education";

import Overview from "./Overview";
import { ResumeUploadButton, DownloadJSONButton } from "../Buttons";
import { Box, Center } from "@chakra-ui/react";

const DataDisplay = () => {
  const [parsedData, setParsedData] = useState();
  /**
   * Acceptable statuses:
   * - none:
   * - uploading:
   * - success:
   * - error:
   */
  const [parseStatus, setParseStatus] = useState("none");
  const [successToast, errorToast, fileSizeErrorToast] = useToast();

  const handleErrors = (response) => {
    if (!response.ok) {
      return response.text().then((text) => {
        throw new Error(`Error ${response.status} - ${text}`);
      });
    }
    return response;
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];

    // don't break the app if they cancel on the file selection page
    if (!file) {
      return;
    } else if (file.size > MAX_FILE_SIZE) {
      fileSizeErrorToast();
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    setParseStatus("uploading");
    fetch(API_URL, {
      method: "POST",
      body: formData,
    })
      .then(handleErrors)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setParsedData({ file: file.name, ...data });
      })
      .then(() => {
        setParseStatus("success");
        successToast();
      })
      .catch((err) => {
        console.error("error", err);
        setParseStatus("error");
        errorToast(err);
      });
  };

  return (
    <>
      <Box ml="20" mr="20" mb="10">
        <ResumeUploadButton {...{ parseStatus, handleFileInput }} />
        <DownloadJSONButton {...{ parseStatus, parsedData }} />
      </Box>
      <hr />
      {parsedData ? (
        <Center bg="whitesmoke" w="90vw" p="4" m="auto" mt="10" mb="10">
          <Box>
            <Overview data={parsedData} />
            <Education data={parsedData?.schools} />
            <Positions data={parsedData?.positions} />
          </Box>
        </Center>
      ) : (
        ""
      )}
    </>
  );
};
export default DataDisplay;
