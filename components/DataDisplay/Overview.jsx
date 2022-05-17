import React from "react";

import { Table, Tbody, Tr, Td, Heading, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Overview = ({ data }) => (
  <>
    <Heading as="h2" size="lg" mb={2}>
      Overview
    </Heading>
    <Table size="sm" variant="simple" mb={8}>
      <Tbody>
        {/* <!-- Summary --> */}
        <Tr>
          <Td className="category">Name(s)</Td>
          <Td colSpan="3">{data?.name || "none"}</Td>
        </Tr>
        <Tr>
          <Td className="category">Last Position</Td>
          <Td colSpan="3">{data?.position || "none"}</Td>
        </Tr>
        {/* <!-- Overview --> */}
        <Tr>
          <Td className="category">Email</Td>
          <Td>{data?.email || "none"}</Td>
          <Td className="category">Phone</Td>
          <Td>{data?.phone || "none"}</Td>
        </Tr>
        <Tr>
          <Td className="category">Links</Td>
          <Td colSpan="3">
            {data?.links?.map((link, i) => (
              <span key={i}>
                {i > 0 && ",  "}
                <Link href={link.url} isExternal>
                  {link.url} <ExternalLinkIcon mx="2px" />
                </Link>
              </span>
            )) || "none"}
          </Td>
        </Tr>
      </Tbody>
    </Table>
  </>
);

export default Overview;
