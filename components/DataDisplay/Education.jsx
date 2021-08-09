import { Table, Tbody, Tr, Td, Heading } from "@chakra-ui/react";
import React from "react";
import { timestampToDate } from "../../functions";

const Education = ({ data }) => {
  return (
    <>
      <Heading as="h2" size="lg" mb={2}>
        Schools
      </Heading>
      <Table size="sm" variant="simple" mb={8}>
        <Tbody>
          {data && data?.length > 0 && (
            <>
              {data?.map((school, ind) => {
                return (
                  <React.Fragment key={`school-${ind}`}>
                    <Tr key={`school-r1-${ind}`}>
                      <Td className="category">Time Period</Td>
                      <Td>
                        {timestampToDate(school?.start?.timestamp)} to{" "}
                        {timestampToDate(school?.end?.timestamp)}
                      </Td>
                      <Td className="category">Is Current?</Td>
                      <Td>{school?.isCurrent ? "Yes" : "No"}</Td>
                    </Tr>
                    <Tr key={`school-r2-${ind}`}>
                      <Td className="category">Organization</Td>
                      <Td>{school?.org}</Td>
                      <Td className="category">Degree</Td>
                      <Td>{school?.degree}</Td>
                    </Tr>
                    <Tr key={`school-r3-${ind}`}>
                      <Td className="category">GPA</Td>
                      <Td>{school?.gpa || "n/a"}</Td>
                      <Td className="category">Summary</Td>
                      <Td>{school?.summary}</Td>
                    </Tr>
                  </React.Fragment>
                );
              })}
            </>
          )}
        </Tbody>
      </Table>
    </>
  );
};
export default Education;
