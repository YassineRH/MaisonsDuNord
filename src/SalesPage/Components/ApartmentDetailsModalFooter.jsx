import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { useNavigation, useSubmit } from "react-router-dom";
import { useRef } from "react";

const ApartmentDetailsModalFooter = ({
  apartmentInfo,
  setApartment,
  payed,
  apartmentPrice,
  rest,
  isEditing,
  canSubmit,
}) => {
  const navigation = useNavigation();
  const submit = useSubmit();
  const buttonRef = useRef();

  function handleSubmit() {
    setApartment(apartmentInfo);
    const formData = new FormData();
    formData.append("apartment", JSON.stringify(apartmentInfo));
    submit(formData, { method: "POST", action: "" });
  }

  return (
    <VStack spacing={10} p={6} align="flex-start">
      <HStack
        spacing={3}
        w="full"
        justifyContent={{ base: "flex-start", md: "space-between" }}
        alignItems="flex-start"
        flexDirection={{ base: "column", md: "row" }}
      >
        <HStack spacing={1} align="center">
          <Text fontSize="xl" color="black">
            {"Prix de l'appartement:"}
          </Text>
          <Text fontSize="lg" color="#ae8957">
            {apartmentPrice.toLocaleString()} DH
          </Text>
        </HStack>
        <HStack spacing={2} align="center">
          <Text fontSize="xl" color="black">
            Payé:
          </Text>
          <Text fontSize="lg" color="#ae8957">
            {payed.toLocaleString()} DH
          </Text>
        </HStack>
        <HStack spacing={2} align="center">
          <Text fontSize="xl" color="black">
            Reste:
          </Text>
          <Text fontSize="lg" color="red.500">
            {rest.toLocaleString()} DH
          </Text>
        </HStack>
      </HStack>
      {isEditing && (
        <Button
          ref={buttonRef}
          onClick={handleSubmit}
          type="button"
          size="md"
          bg="#ae8957"
          color="white"
          _hover={{
            bg: "#8f7445",
          }}
          disabled={!canSubmit || navigation.state === "submitting"}
          onMouseDown={(e) => e.preventDefault()} // Prevent focus shifting
        >
          {navigation.state === "submitting"
            ? "Sauvegarde en cours"
            : "Sauvegarder"}
        </Button>
      )}
    </VStack>
  );
};

export default ApartmentDetailsModalFooter;
