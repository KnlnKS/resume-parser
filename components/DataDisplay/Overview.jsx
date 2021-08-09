import React from 'react';

import { Table, Tbody, Tr, Td, Heading, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { timestampToDate } from "../../functions";

const Overview = ({ data }) => {
  return (
    <>
      <Heading as="h2" size="lg" mb={2}>
        Overview
      </Heading>
      <Table size="sm" variant="simple" mb={8}>
        <Tbody>
          {/* <!-- Summary --> */}
          <Tr>
            <Td className="category">Name(s)</Td>
            <Td colSpan="3">{data?.names?.join(', ') || 'none'}</Td>
          </Tr>
          <Tr>
            <Td className="category">Executive Summary</Td>
            <Td colSpan="3">{data?.summary?.executiveSummary || 'none'}</Td>
          </Tr>
          <Tr>
            <Td className="category">Skills</Td>
            <Td colSpan="3">{data?.summary?.skills || 'none'}</Td>
          </Tr>
          {/* <!-- Overview --> */}
          <Tr>
            <Td className="category">Created At</Td>
            <Td>{timestampToDate(data?.createdAt)}</Td>
            <Td className="category">Last Story At</Td>
            <Td>{timestampToDate(data?.lastStoryAt)}</Td>
          </Tr>
          <Tr>
            <Td className="category">Emails</Td>
            <Td>
              {data?.emails?.map(email => email.value)?.join(', ') || 'none'}
            </Td>
            <Td className="category">Phones</Td>
            <Td>
              {data?.phones?.map(phone => phone.value)?.join(', ') || 'none'}
            </Td>
          </Tr>
          <Tr>
            <Td className="category">Links</Td>
            <Td colSpan="3">
              {data?.links?.map((link, i) => (
                <span key={i}>
                  {i > 0 && ',  '}
                  <Link href={link.url} isExternal>
                    {link.url} <ExternalLinkIcon mx="2px" />
                  </Link>
                </span>
              )) || 'none'}
            </Td>
          </Tr>
          <Tr>
            <Td className="category">Location</Td>
            <Td colSpan="3">{data?.location?.name}</Td>
          </Tr>
          <Tr>
            <Td className="category">Work Time</Td>
            <Td colSpan="3">
              {data?.summary?.workTime?.years} Years or
              {data?.summary?.workTime?.months} months
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  );
};
export default Overview;
