import React from "react";
import BuildingDetailsTable from "../Components/BuildingDetailsTable";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import ApartmentDetailsModal from "../Components/ApartmentDetailsModal";
import { ApartmentProvider } from "../context/ApartmentContext";
import BuildingSales from "../Components/BuildingSales";

const BuildingDetailsPage = () => {
  const { buildingId } = useParams();
  const data = JSON.parse(localStorage.getItem("data")).filter(
    (app) => app.building === buildingId
  );

  return (
    <Box h="100vh">
      <ApartmentProvider>
        <ApartmentDetailsModal />
        <BuildingDetailsTable data={data} />
        <BuildingSales buildingName={buildingId} />
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
