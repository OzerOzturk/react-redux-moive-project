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
import { fetchSingleMovie } from "../features/singleMovie";

function SingleMovie() {
  const params = useParams();

    const dispatch = useDispatch();
  
    const singleMovie = useSelector(
      (state) => state.singleMovie.value
    );
    useEffect(() => {
        dispatch(fetchSingleMovie(params.id));
        
      }, [dispatch]);

    console.log(singleMovie.isLoading)
    console.log(singleMovie.singleMovie)
    console.log(params)
if(singleMovie.isLoading){

    return <h1></h1>
}else{

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
            src={`https://image.tmdb.org/t/p/w500/${singleMovie?.singleMovie?.poster_path}`}
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
              {singleMovie?.singleMovie?.original_title}
            </Heading>
            <Badge mr={1} colorScheme="red">
              {singleMovie?.singleMovie?.genres[0].name}
            </Badge>
            <Text color={"gray.900"} fontWeight={600} fontSize={"2xl"}>
              IMDB: {singleMovie?.singleMovie?.vote_average}
            </Text>
            <Link href={singleMovie?.singleMovie?.homepage} isExternal>
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
                {singleMovie?.singleMovie?.overview}
              </Text>
            </VStack>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
}

export default SingleMovie;
