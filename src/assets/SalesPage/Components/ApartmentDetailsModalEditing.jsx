import { HStack, Input, Text, VStack } from "@chakra-ui/react";
import React from "react";

const list = [
  { label: "Prix par m² en DH", name: "price" },
  { label: "Acheteur", name: "buyer" },
  { label: "Parking", name: "parking" },
];

const ApartmentDetailsModalEditing = ({ handleInputChange, apartmentInfo }) => {
  return (
    <>
      <VStack spacing={6} align="center" w="full">
        <Input
          value={JSON.stringify(apartmentInfo)}
          type="hidden"
          name="apartment"
        />
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
            <Input
              value={apartmentInfo[item.name]}
              onChange={(e) => handleInputChange(item.name, e.target.value)}
              name={item.name}
              bg="white"
              borderRadius="10px"
              px={4}
              py={3}
              fontSize={{ base: "sm", md: "md" }}
              h="auto"
              maxW="300px"
              w="full"
              border="1px solid #d1c2a9"
              transition="border-color 0.2s ease"
              _focus={{
                borderColor: "#ae8957",
                boxShadow: "0 0 8px rgba(174, 137, 87, 0.5)",
              }}
              _hover={{
                borderColor: "#ae8957",
              }}
            />
          </HStack>
        ))}
      </VStack>
    </>
  );
};

export default ApartmentDetailsModalEditing;
