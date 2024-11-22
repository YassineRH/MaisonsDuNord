import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

const data = [
  { label: "Réservation", color: "#f57c00" },
  { label: "Gros Oeuvres", color: "#2196f3" },
  { label: "Finition", color: "#9c27b0" },
  { label: "Livraison", color: "#4caf50" },
];

const Legend = () => {
  return (
    <Flex justify="center" align="center" gap={4} mt={4} flexWrap="wrap">
      {data.map((item) => (
        <Flex key={item.label} align="center">
          <Box
            width="20px"
            height="20px"
            bg={item.color}
            mr={2}
            borderRadius="md"
          />
          <Text>{item.label}</Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default Legend;
