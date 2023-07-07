import { BsCalendarDate } from "react-icons/bs";
import { Box, Flex, Text, Spacer, Tag, Button } from "@chakra-ui/react";

export function LaunchItem(launch) {
  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg">
      <Flex>
        <Text fontSize="2xl">
          Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
        </Text>
        <Spacer />
        <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
          {launch.launch_success ? "success" : "failure"}
        </Tag>
      </Flex>
      <Flex align="center">
        <BsCalendarDate />
        <Text fontSize="sm" ml={1} p={1} color="gray.600">
          {launch.launch_date_local.split("T")[0]}
        </Text>
      </Flex>
      <Button m={2} colorScheme="blue">
        More Details
      </Button>
    </Box>
  );
}
