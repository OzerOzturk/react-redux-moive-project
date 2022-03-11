import { Flex, Text, Heading, Center } from "@chakra-ui/react";
import ActorCard from "../components/ActorCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchActors } from "../features/actors";
import { useEffect } from "react";

const ActorList = () => {
  const detailActors = useSelector((state) => state.actors.value.detailActors);
  const dispatch = useDispatch();
  console.log(detailActors);
  useEffect(() => {
    dispatch(fetchActors());
  }, [dispatch]);

  return (
    <Center p="10" flexDir={"column"} w={"100%"}>
      {/* If there is a list title render it, otherwise render just list without title */}

      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "4xl", lg: "6xl" }}
        p="5px"
        marginBottom={"20px"}
      >
        <Text
          as={"span"}
          position={"relative"}
          _after={{
            content: "''",
            width: "full",
            height: "30%",
            position: "absolute",
            bottom: 1,
            left: 0,
            bg: "red.300",
            zIndex: -1,
          }}
        >
          Actors
        </Text>
        <br />
      </Heading>

      <Flex
        flexWrap={"wrap"}
        rowGap="10px"
        alignItems="center"
        justifyContent={"center"}
        gap="10px"
        alignSelf="center"
      >
        {detailActors?.map((item) => (
          <ActorCard
            profile_path={item?.profile_path}
            key={item?.id}
            name={item?.name}
            popularity={item?.popularity}
          />
        ))}
      </Flex>
    </Center>
  );
};

export default ActorList;
