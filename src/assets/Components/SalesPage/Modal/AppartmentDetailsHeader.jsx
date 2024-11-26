import { Box, Button, Heading, HStack, Text } from "@chakra-ui/react";

const AppartmentDetailsHeader = ({
  name,
  onClose,
  setIsEditing,
  isEditing,
  isAdmin,
}) => {
  return (
    <Box w="full" p={4} borderRadius="lg">
      <Button
        onClick={onClose}
        borderRadius="full"
        width="40px"
        height="40px"
        bg="#ae8957"
        color="white"
        fontSize="2xl"
        _hover={{ bg: "#8d6e4f" }}
        boxShadow="md"
        aria-label="Close"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        ✕
      </Button>

      <HStack
        justify="space-between"
        align={"center"}
        spacing={4}
        mt={4}
        w="full"
      >
        <HStack
          spacing={2}
          justify="center"
          align="center"
          textAlign={{ base: "center", md: "left" }}
          wrap="wrap"
        >
          <Heading
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="bold"
            color="#ae8957"
          >
            {name}
          </Heading>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color={isEditing ? "red.600" : "black"}
            fontStyle="italic"
          >
            {isEditing ? "N'oubliez pas de sauvegarder" : "Lire Seulement"}
          </Text>
        </HStack>

        {!isEditing && isAdmin && (
          <Button
            onClick={() => setIsEditing(true)}
            bg="#ae8957"
            color="white"
            fontSize={{ base: "sm", md: "md" }}
            px={6}
            py={4}
            _hover={{ bg: "#8d6e4f" }}
          >
            Modifier
          </Button>
        )}
      </HStack>
    </Box>
  );
};

export default AppartmentDetailsHeader;
