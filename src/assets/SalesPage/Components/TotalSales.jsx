import { Box, VStack } from "@chakra-ui/react";
import BuildingSales from "./BuildingSales";

const array = ["A", "B", "C"];

const TotalSales = () => {
  return (
    <Box justifyContent="center" alignItems="center">
      <VStack>
        {array.map((item) => (
          <BuildingSales key={item} buildingName={item} />
        ))}
      </VStack>
    </Box>
  );
};

export default TotalSales;
