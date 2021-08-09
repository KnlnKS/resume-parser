import { useToast } from '@chakra-ui/react';

const useCustomToast = () => {
  const toast = useToast();

  const successToast = () =>
    toast({
      title: 'Resume successfully parsed!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  const errorToast = err =>
    toast({
      title: 'Resume parsing failed!',
      description: JSON.stringify(err.message),
      status: 'error',
      duration: 3000,
      isClosable: true,
    });
  const fileSizeErrorToast = () =>
    toast({
      title: 'Resume upload error!',
      description: 'File too big. Maximum size of 9MB.',
      status: 'error',
      duration: 3000,
      isClosable: true,
    });

  return [successToast, errorToast, fileSizeErrorToast];
};

export default useCustomToast;
