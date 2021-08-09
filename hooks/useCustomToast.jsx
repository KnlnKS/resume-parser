import { useToast } from "@chakra-ui/react";
import { MAX_FILE_SIZE, TOAST_DURATION } from "../constants";

const useCustomToast = () => {
  const toast = useToast();

  const successToast = () =>
    toast({
      title: "Resume successfully parsed!",
      status: "success",
      duration: TOAST_DURATION,
      isClosable: true,
    });
  const errorToast = (err) =>
    toast({
      title: "Resume parsing failed!",
      description: JSON.stringify(err.message),
      status: "error",
      duration: TOAST_DURATION,
      isClosable: true,
    });
  const fileSizeErrorToast = () =>
    toast({
      title: "Resume upload error!",
      description: `File too big. Maximum size of ${
        MAX_FILE_SIZE / 1000000
      }MB.`,
      status: "error",
      duration: TOAST_DURATION,
      isClosable: true,
    });

  return [successToast, errorToast, fileSizeErrorToast];
};

export default useCustomToast;
