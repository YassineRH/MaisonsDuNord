import React from "react";
import BuildingDetailsTable from "../Components/SalesPage/BuildingDetailsTable";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import ApartmentDetailsModal from "../Components/SalesPage/Modal/ApartmentDetailsModal";
import { ApartmentProvider } from "../Components/SalesPage/context/ApartmentContext";
import BuildingSales from "../Components/SalesPage/BuildingSales";
import BuildingName from "../utilities/BuildingName";

const BuildingDetailsPage = () => {
  const { buildingId } = useParams();
  const data = JSON.parse(localStorage.getItem("data")).filter(
    (app) => app.building === buildingId
  );

  const navigate = useNavigate();

  return (
    <Box h="100vh">
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        w="100%"
        mb={6}
      >
        <Button
          onClick={() => navigate("/ventes")}
          bg="#ae8957"
          color="white"
          variant="solid"
          position="relative"
          left={4}
          mt={4}
          _hover={{ bg: "#594535" }}
        >
          Retour
        </Button>
        <Heading
          textAlign="center"
          flex="1"
          fontSize={{ base: "2xl", md: "5xl" }}
          color="#ae8957"
          mt={4}
        >
          {BuildingName(buildingId)}
        </Heading>
      </Flex>
      <ApartmentProvider>
        <ApartmentDetailsModal />
        <BuildingDetailsTable data={data} />
        <BuildingSales building={buildingId} />
      </ApartmentProvider>
    </Box>
  );
};

export async function action({ request }) {
  const formData = await request.formData();
  const apartment = JSON.parse(formData.get("apartment"));

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const response = await fetch(`${backendUrl}/${apartment.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(apartment),
  });

  return response;
}

export default BuildingDetailsPage;
