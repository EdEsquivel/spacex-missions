import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Spacer,
  Tag,
  Spinner,
  Icon,
  Button,
  Image,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { BsWikipedia, BsYoutube, BsBook } from "react-icons/bs";
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
            <Box position="relative" padding="5">
              <Divider />
              <AbsoluteCenter px="5">
                <Text as="b" fontSize="xl">
                  Details
                </Text>
              </AbsoluteCenter>
            </Box>
            <Text>{launch?.details}</Text>
          </Box>
          <Box mt={5}>
            <Flex>
              <a
                target="_blank"
                rel="noreferrer"
                href={launch?.links?.article_link}
              >
                <Button>
                  <Icon boxSize={8} as={BsBook} />
                  <Text ml={1}>Learn more</Text>
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={launch?.links?.wikipedia}
              >
                <Button>
                  <Icon boxSize={8} as={BsWikipedia} />
                  <Text ml={1}>Wikipedia</Text>
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={launch?.links?.video_link}
              >
                <Button>
                  <Icon ml={3} boxSize={8} color="red.600" as={BsYoutube} />
                  <Text ml={1}>Youtube</Text>
                </Button>
              </a>
            </Flex>
          </Box>
        </>
      )}
    </Box>
  );
}
