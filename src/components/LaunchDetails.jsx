import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Flex, Text, Spacer, Tag, Spinner } from "@chakra-ui/react";
import * as API from "../services/launches";

export function LaunchDetails() {
  const [launch, setLaunch] = useState({});
  let { launchId } = useParams();

  useEffect(() => {
    API.getLaunchByFlightNumber(launchId)
      .then(setLaunch)
      .catch((err) => console.error(err));
  }, [launchId]);
  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg">
      {launch.length === 0 ? (
        <>
          <Spinner />
          <div>Loading...</div>
        </>
      ) : (
        <>
          <Flex>
            <Text fontSize="2xl">
              Mission <strong>{launch.mission_name}</strong> (
              {launch.launch_year})
            </Text>
            <Spacer />
            <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
              {launch.launch_success ? "success" : "failure"}
            </Tag>
          </Flex>
          <Box>
            <Flex>
              <Text as="b">Rocket:</Text>
              <Text ml={1}>{launch?.rocket?.rocket_name} </Text>
            </Flex>
            <Flex>
              <Text as="b">Rocket Type:</Text>
              <Text ml={1}>{launch?.rocket?.rocket_type}</Text>
            </Flex>
          </Box>
          <Box>
            <Text as="b" fontSize="xl" color="blue">
              Details:
            </Text>
            <Text>{launch?.details}</Text>
          </Box>
        </>
      )}
    </Box>
  );
}
