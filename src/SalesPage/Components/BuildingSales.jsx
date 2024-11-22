import React from "react";
import { Box, VStack, Text, HStack } from "@chakra-ui/react";

const BuildingSales = ({ buildingName }) => {
  const { revenue, received, remaining } = JSON.parse(
    localStorage.getItem("sales")
  ).find((item) => item.building === buildingName);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      w="100%"
      mt={10}
    >
      <Box
        bg="#fdfdfd"
        p={6}
        rounded="md"
        boxShadow="md"
        textAlign="center"
        borderRadius={20}
        minWidth={{ base: "200px", md: "600px" }}
      >
        <Text fontSize="2xl" fontWeight="bold" color="#ae8957">
          Bâtiment {buildingName}
        </Text>
        <VStack spacing={4} mt={4} align="stretch">
          <HStack justify="space-between">
            <Text fontSize="lg" fontWeight="medium" color="black">
              {"Chiffre d'affaires:"}
            </Text>
            <Text fontSize="lg" color="#ae8957">
              {revenue.toLocaleString()} MAD
            </Text>
          </HStack>
          <HStack justify="space-between">
            <Text fontSize="lg" fontWeight="medium" color="black">
              Encaissé:
            </Text>
            <Text fontSize="lg" color="#000">
              {received.toLocaleString()} MAD
            </Text>
          </HStack>
          <HStack justify="space-between">
            <Text fontSize="lg" fontWeight="medium" color="black">
              Reste:
            </Text>
            <Text fontSize="lg" color="red.500">
              {remaining.toLocaleString()} MAD
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default BuildingSales;
