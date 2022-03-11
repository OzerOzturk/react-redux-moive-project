import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Flex,
  Spacer,
  Center,
  Text,
  Square,
  Box,
  Link,
  Image,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <div>
      <Flex bg="black" color="white">
        <Box flex="1">
          <Flex
            justify="center"
            align="center"
            direction="column"
            mt="4"
            ml="4"
          >
            <Text mb="1" p="2" fontSize="2xl">
              Your Movie Treasure
            </Text>
            <Text fontSize="md">© 2022</Text>
          </Flex>
        </Box>
        <Spacer />
        <Box flex="1">
          <Flex justify="center" align="start" direction="column" mt="4" ml="4">
            <Text fontWeight="semibold" mb="1" fontSize="lg">
              Sections
            </Text>
            <Link
              mb="0.5"
              href="#"
              _hover={{
                color: "red.500",
              }}
              _focus={{
                outline: "none",
              }}
            >
              Home
            </Link>
            <Link
              mb="0.5"
              href="#"
              _hover={{
                color: "red.500",
              }}
              _focus={{
                outline: "none",
              }}
            >
              Actors
            </Link>
            <Link
              mb="0.5"
              href="#"
              _hover={{
                color: "red.500",
              }}
              _focus={{
                outline: "none",
              }}
            >
              Movies
            </Link>
            <Link
              mb="0.5"
              href="#"
              _hover={{
                color: "red.500",
              }}
              _focus={{
                outline: "none",
              }}
            >
              Signup
            </Link>
            <Link
              mb="0.5"
              href="#"
              _hover={{
                color: "red.500",
              }}
              _focus={{
                outline: "none",
              }}
            >
              Signin
            </Link>
          </Flex>
        </Box>
        <Spacer />
        <Box flex="1">
          <Flex justify="center" align="start" direction="column" mt="4" ml="4">
            <Text fontWeight="semibold" mb="2" fontSize="md">
              About Us
            </Text>
            <Flex>
              <Image
                src="https://avatars.githubusercontent.com/u/57989556?v=4"
                alt="Profile-Image"
                boxSize="20px"
                objectFit="cover"
                borderRadius="50%"
                mr="1"
              />
              <Link
                mb="0.5"
                href="https://github.com/haticecs"
                _hover={{
                  color: "red.500",
                }}
                _focus={{
                  outline: "none",
                }}
              >
                Hatice Demir
              </Link>
            </Flex>
            <Flex>
              <Image
                src="https://avatars.githubusercontent.com/u/62790332?v=4"
                alt="Profile-Image"
                boxSize="20px"
                objectFit="cover"
                borderRadius="50%"
                mr="1"
              />
              <Link
                mb="0.5"
                href="https://github.com/orkunseyman"
                _hover={{
                  color: "red.500",
                }}
                _focus={{
                  outline: "none",
                }}
              >
                Orkun Seyman
              </Link>
            </Flex>
            <Flex>
              <Image
                src="https://avatars.githubusercontent.com/u/60944453?v=4"
                alt="Profile-Image"
                boxSize="20px"
                objectFit="cover"
                borderRadius="50%"
                mr="1"
              />
              <Link
                mb="0.5"
                href="https://github.com/OzerOzturk"
                _hover={{
                  color: "red.500",
                }}
                _focus={{
                  outline: "none",
                }}
              >
                Özer Öztürk
              </Link>
            </Flex>
            <Flex>
              <Image
                src="https://avatars.githubusercontent.com/u/63050857?v=4"
                alt="Profile-Image"
                boxSize="20px"
                objectFit="cover"
                borderRadius="50%"
                mr="1"
              />
              <Link
                mb="0.5"
                href="https://github.com/sebnemgormus"
                _hover={{
                  color: "red.500",
                }}
                _focus={{
                  outline: "none",
                }}
              >
                Şebnem Görmüş
              </Link>
            </Flex>
          </Flex>
        </Box>
        <Spacer />
        <Box flex="1" mt="8" mr="2">
          <Image
            src="https://images.creativemarket.com/0.1.0/ps/7414066/580/387/m2/fpnw/wm1/logo-design-for-movie-production-company-01-.jpg?1575502358&s=01c0e34a7a49aba80eeeee6e9703b8bc"
            alt="Authentic Movie App Logo"
            boxSize="150px"
            objectFit="cover"
            mb="2"
          />
        </Box>
      </Flex>
    </div>
  );
};

export default Footer;
