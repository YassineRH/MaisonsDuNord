import { HStack, Text, VStack } from "@chakra-ui/react";

const list = [
  { label: "Prix par m² en DH", name: "price" },
  { label: "Acheteur", name: "buyer" },
  { label: "Parking", name: "parking" },
];

const ApartmentDetailsModalRead = ({ apartmentInfo }) => {
  return (
    <>
      <VStack spacing={6} align="center" w="full">
        {list.map((item, index) => (
          <HStack
            key={index}
            bg="#f8f5f1"
            px={6}
            py={4}
            borderRadius="15px"
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
            w={{ base: "90%", md: "75%", lg: "60%" }}
            spacing={{ base: 4, md: 8 }}
            justify="space-between"
          >
            <Text
              color="#ae8957"
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="medium"
              flexShrink={0}
              w={{ base: "120px", md: "180px" }}
            >
              {item.label}
            </Text>
            <Text
              color="gray.700"
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="normal"
              maxW="300px"
              h="auto"
            >
              {item.name === "parking"
                ? apartmentInfo[item.name] || "Non"
                : apartmentInfo[item.name]}
            </Text>
          </HStack>
        ))}
      </VStack>
    </>
  );
};

export default ApartmentDetailsModalRead;
