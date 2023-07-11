import { useState, useEffect } from "react";
import { Heading, Spinner, Flex } from "@chakra-ui/react";
import { LaunchItem } from "./LaunchItem";
import * as API from "../services/launches";

export function LaunchList() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches()
      .then(setLaunches)
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <Heading as="h1" size="lg" m={4}>
        SpaceX Launches
      </Heading>
      {launches.length === 0 ? (
        <>
          <Flex>
            <Spinner
              ml={3}
              mr={1}
              thickness="4px"
              speed="0.8s"
              emptyColor="gray.200"
              color="blue.500"
              size="md"
            />
            <div>Loading...</div>
          </Flex>
        </>
      ) : (
        <section>
          {launches.map((launch) => (
            <LaunchItem key={launch.flight_number} {...launch} />
          ))}
        </section>
      )}
    </>
  );
}
