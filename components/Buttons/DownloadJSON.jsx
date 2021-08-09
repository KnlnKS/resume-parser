import { Button } from '@chakra-ui/react';

const DownloadJSON = ({ parseStatus, parsedData }) => {
  const downloadFile = async () => {
    const { file, ...data } = parsedData;
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = await URL.createObjectURL(blob);
    link.download = `${file}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {parseStatus === 'success' && (
        <Button colorScheme="black" variant="outline" onClick={downloadFile}>
          Download JSON
        </Button>
      )}
    </>
  );
};

export default DownloadJSON;
