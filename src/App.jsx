import { useState, useEffect } from "react";
import { Heading, Box, Image, Flex, Text, Spacer, Tag } from "@chakra-ui/react";
import * as API from "./services/launches";
import logo from "./assets/logo-spacex.png";

export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <Image m={1} src={logo} width={300} />
      <Heading as="h1" size="lg" m={4}>
        SpaceX Launches
      </Heading>
      <section>
        {launches.map((launch) => (
          <Box
            key={launch.flight_number}
            bg="gray.100"
            p={4}
            m={4}
            borderRadius="lg"
          >
            <Flex>
              <Text fontSize="2xl">
                Mission <strong>{launch.mission_name}</strong> (
                {launch.launch_year})
              </Text>
              <Spacer />
              <Tag p={4} colorScheme={launch.launch_success ? "green" : "red"}>
                {launch.launch_success ? "success" : "failure"}
              </Tag>
            </Flex>
            {launch.mission_name} ({launch.launch_year})
          </Box>
        ))}
      </section>
    </>
  );
}
