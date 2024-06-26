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
            <Text mt={2}>Julian Broudy is a Senior Software Engineer with over 10 years of experience specializing in modern JavaScript frameworks and scalable web architectures. He is passionate about building clean, user-friendly applications. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          </Box>
          <Box as="section" id="projects">
            <Heading as="h2" size="md">
              Projects
            </Heading>
            <VStack align="start" mt={2}>
              <Link href="https://github.com" isExternal>
                <Text fontWeight="bold">Project One</Text>
                <Text>A complex data visualization tool built with React and D3.js. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              </Link>
              <Link href="https://github.com" isExternal>
                <Text fontWeight="bold">Project Two</Text>
                <Text>An e-commerce platform optimized for mobile devices, using React Native. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              </Link>
              <Link href="https://github.com" isExternal>
                <Text fontWeight="bold">Project Three</Text>
                <Text>A real-time chat application using WebSocket and React. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              </Link>
              <Link href="https://github.com" isExternal>
                <Text fontWeight="bold">Project Four</Text>
                <Text>A task management tool with drag-and-drop features, built with React and Redux. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              </Link>
            </VStack>
          </Box>
          <Box as="section" id="skills">
            <Heading as="h2" size="md">
              Skills
            </Heading>
            <Text mt={2}>JavaScript, React, Node.js, Python, Docker. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            <Text mt={2}>Advanced proficiency in TypeScript and GraphQL. Extensive experience in building and maintaining APIs and web services.</Text>
            <Text mt={2}>Skilled in CI/CD practices, automated testing, and cloud infrastructure management using AWS and Azure.</Text>
          </Box>
          <Box as="section" id="blog">
            <Heading as="h2" size="md">
              Blog
            </Heading>
            <Link href="https://blog.julianbroudy.com" isExternal mt={2}>
              <Text>Visit my blog for more insights and tutorials. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              <Text>Explore detailed articles on the latest trends in software development, including AI and machine learning integrations in web applications.</Text>
              <Text>Read case studies on successful project implementations, highlighting the challenges faced and solutions adopted.</Text>
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
