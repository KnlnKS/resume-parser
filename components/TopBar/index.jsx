import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Center, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";

const TopBar = () => {
  return (
    <>
      <Center h="100px">
        <Heading as="h1" size="2xl">
          Resume Parser
        </Heading>
      </Center>
      <Box pl="20" pr="20">
        <Text fontSize="md" fontWeight="bold" marginBottom={4}>
          How well does your resume get parsed?
        </Text>
        <Text fontSize="md">
          {`This tool uses Lever's resume parsing API to parse resumes. Use this
          to see how well your resume is read by Application Tracking Systems
          (ATS) when applying to jobs. Companies that use Lever for job apps
          include: Figma, Palantir, Netflix, Twitch, Yelp and several others.`}
        </Text>
      </Box>
      <Box mb="4" mt="4" pl="20" pr="20">
        Made with ❤️ by{" "}
        <Link
          href="https://github.com/KnlnKS"
          bg="yellow.200"
          p={0.5}
          isExternal
        >
          KnlnKS <ExternalLinkIcon mx="2px" />
        </Link>{" "}
        and{" "}
        <Link
          href="https://github.com/kevin51jiang"
          bg="yellow.200"
          p={0.5}
          isExternal
        >
          kevin51jiang <ExternalLinkIcon mx="2px" />
        </Link>
        .
      </Box>
    </>
  );
};
export default TopBar;
