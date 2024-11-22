import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const errorMessage = "Test";
  const errorDetails = "another test";
  const handleGoHome = () => {
    navigate("/");
  };

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
          Something Went Wrong!
        </Text>
        <Text color="white" fontSize="lg" textAlign="center">
          {errorMessage}
        </Text>
        <Text color="white" fontSize="md" textAlign="center">
          {errorDetails}
        </Text>
        <Button
          onClick={handleGoHome}
          colorScheme="teal"
          width="full"
          bg="teal.500"
          _hover={{ bg: "teal.600" }}
          _active={{ bg: "teal.700" }}
          borderRadius="md"
        >
          Go to Home
        </Button>
      </VStack>
    </Box>
  );
};

export default ErrorPage;
