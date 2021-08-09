import { Table, Thead, Tbody, Tr, Th, Td, Heading } from '@chakra-ui/react';
import React from 'react';
import { timestampToDate } from "../../functions";

const Positions = ({ data }) => {
  return (
    <>
      <Heading as="h2" size="lg" mb={2}>
        Employment
      </Heading>
      <Table size="sm" variant="simple" mb={8}>
        <Thead>
          <Tr>
            <Th>Company</Th>
            <Th>Job Title</Th>
            <Th>Start</Th>
            <Th>End</Th>
            <Th>Is current?</Th>
            <Th>Summary</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data && (
            <>
              {data?.map((position, ind) => {
                return (
                  <Tr key={`position-${ind}`}>
                    <Td>{position?.org}</Td>
                    <Td>{position?.title}</Td>
                    <Td>{timestampToDate(position?.start?.timestamp)}</Td>
                    <Td>{timestampToDate(position?.end?.timestamp)}</Td>
                    <Td>{position?.isCurrent ? 'Yes' : 'No'}</Td>
                    <Td>{position?.summary}</Td>
                  </Tr>
                );
              })}
            </>
          )}
        </Tbody>
      </Table>
    </>
  );
};
export default Positions;
