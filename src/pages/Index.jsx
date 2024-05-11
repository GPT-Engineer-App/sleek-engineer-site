import { Box, Button, Container, Flex, Heading, IconButton, Image, Link, Stack, Text, useColorMode, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaBars, FaMoon, FaSun, FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.50");

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" align="center" minHeight="100vh" bg={bgColor} color={textColor}>
        <Flex w="full" py={4} px={8} justify="space-between" align="center">
          <Heading as="h1" size="lg">
            Julian Broudy
          </Heading>
          <IconButton aria-label="Toggle Dark Mode" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} size="lg" />
        </Flex>
        <VStack spacing={8} flex="1" w="full" align="start" px={8}>
          <Box as="section" id="about">
            <Heading as="h2" size="md">
              About
            </Heading>
            <Text mt={2}>Julian Broudy is a Senior Software Engineer with over 10 years of experience specializing in modern JavaScript frameworks and scalable web architectures. He is passionate about building clean, user-friendly applications.</Text>
          </Box>
          <Box as="section" id="projects">
            <Heading as="h2" size="md">
              Projects
            </Heading>
            <VStack align="start" mt={2}>
              <Link href="https://github.com" isExternal>
                <Text fontWeight="bold">Project One</Text>
                <Text>A complex data visualization tool built with React and D3.js.</Text>
              </Link>
              <Link href="https://github.com" isExternal>
                <Text fontWeight="bold">Project Two</Text>
                <Text>An e-commerce platform optimized for mobile devices, using React Native.</Text>
              </Link>
            </VStack>
          </Box>
          <Box as="section" id="skills">
            <Heading as="h2" size="md">
              Skills
            </Heading>
            <Text mt={2}>JavaScript, React, Node.js, Python, Docker</Text>
          </Box>
          <Box as="section" id="blog">
            <Heading as="h2" size="md">
              Blog
            </Heading>
            <Link href="https://blog.julianbroudy.com" isExternal mt={2}>
              <Text>Visit my blog for more insights and tutorials.</Text>
            </Link>
          </Box>
          <Box as="section" id="contact">
            <Heading as="h2" size="md">
              Contact
            </Heading>
            <Stack direction="row" mt={2} spacing={4}>
              <IconButton aria-label="GitHub" icon={<FaGithub />} />
              <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} />
              <Button leftIcon={<FaFileDownload />} colorScheme="teal">
                Download Resume
              </Button>
            </Stack>
          </Box>
        </VStack>
        <Flex py={4} w="full" justify="center" bg={useColorModeValue("gray.200", "gray.900")}>
          <Text>&copy; {new Date().getFullYear()} Julian Broudy. All rights reserved.</Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;
