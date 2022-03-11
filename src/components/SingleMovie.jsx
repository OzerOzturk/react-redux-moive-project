import {
  Avatar,
  Badge,
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import { fetchMovie } from "../features/singleMovie";
import { fetchMovieCredits } from "../features/singleMovie";
import { useParams } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

function SingleMovie() {
  const params = useParams();
  const dispatch = useDispatch();
  const states = useSelector((state) => state.singleMovie);
  useEffect(() => {
      console.log('sdfsd')
    dispatch(fetchMovieCredits(params.id));
    dispatch(fetchMovie(params.id));
  }, []);

  return (
    <Container maxW={"5xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"image"}
            src={`https://image.tmdb.org/t/p/w500/${states.movie.poster_path}`}
            fit={"cover"}
            align={"center"}
            h={{ base: "100%", sm: "100%", lg: "600px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {states.movie.original_title}
            </Heading>
            {/* <Tag
              mr={1}
              mb={2}
              borderRadius="full"
              variant="solid"
              colorScheme="gray"
            >
              Matt Reeves
            </Tag> */}

            <Badge mr={1} colorScheme="red">
              {states.movie.genres[0].name}
            </Badge>
            <Text color={"gray.900"} fontWeight={600} fontSize={"2xl"}>
              IMDB: {states.movie.vote_average}
            </Text>
            <Link href={states.movie.homepage} isExternal>
              <Flex>
                {" "}
                Trailer <FiExternalLink />{" "}
              </Flex>
            </Link>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={<StackDivider borderColor={"gray.200"} />}
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text color={"gray.500"} fontSize={"2xl"} fontWeight={"300"}>
                {states.movie.overview}
              </Text>
            </VStack>

            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={"red.300"}
                fontWeight={"600"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Actors
              </Text>
              <SimpleGrid columns={2} spacing={3}>
                <Flex>
                  <Avatar
                    src={`https://image.tmdb.org/t/p/w500/${states.credits.cast[0].profile_path}`}
                  />
                  <Box m="2">
                    <Text fontWeight="bold">{states.credits.cast[0].name}</Text>
                    <Badge ml="1" colorScheme="green">
                      {states.credits.cast[0].character}
                    </Badge>
                  </Box>
                </Flex>

                <Flex>
                  <Avatar
                    src={`https://image.tmdb.org/t/p/w500/${states.credits.cast[1].profile_path}`}
                  />
                  <Box m="2">
                    <Text fontWeight="bold">{states.credits.cast[1].name}</Text>
                    <Badge ml="1" colorScheme="green">
                      {states.credits.cast[1].character}
                    </Badge>
                  </Box>
                </Flex>

                <Flex>
                  <Avatar
                    src={`https://image.tmdb.org/t/p/w500/${states.credits.cast[2].profile_path}`}
                  />
                  <Box m="2">
                    <Text fontWeight="bold">{states.credits.cast[2].name}</Text>
                    <Badge ml="1" colorScheme="green">
                      {states.credits.cast[2].character}
                    </Badge>
                  </Box>
                </Flex>

                <Flex>
                  <Avatar
                    src={`https://image.tmdb.org/t/p/w500/${states.credits.cast[3].profile_path}`}
                  />
                  <Box m="2">
                    <Text fontWeight="bold">{states.credits.cast[3].name}</Text>
                    <Badge ml="1" colorScheme="green">
                      {states.credits.cast[3].character}
                    </Badge>
                  </Box>
                </Flex>

                <Flex>
                  <Avatar
                    src={`https://image.tmdb.org/t/p/w500/${states.credits.cast[4].profile_path}`}
                  />
                  <Box m="2">
                    <Text fontWeight="bold">{states.credits.cast[4].name}</Text>
                    <Badge ml="1" colorScheme="green">
                      {states.credits.cast[4].character}
                    </Badge>
                  </Box>
                </Flex>
              </SimpleGrid>
            </Box>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

export default SingleMovie;
