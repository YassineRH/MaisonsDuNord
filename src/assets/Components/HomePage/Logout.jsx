import { Box, Button, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Logout = () => {
  return (
    <Box
      maxW="500px"
      minW="350px"
      mx="auto"
      my="auto"
      p={8}
      bg="#ae8957"
      boxShadow="lg"
      borderRadius="lg"
      border="1px solid #8c6d47"
    >
      <VStack spacing={6}>
        <Text fontSize="3xl" fontWeight="bold" color="white">
          You are currently logged in
        </Text>
        <Button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
          colorScheme="teal"
          width="full"
          bg="teal.500"
          _hover={{ bg: "teal.600" }}
          _active={{ bg: "teal.700" }}
          borderRadius="md"
        >
          Logout
        </Button>
      </VStack>
    </Box>
  );
};

export default Logout;
