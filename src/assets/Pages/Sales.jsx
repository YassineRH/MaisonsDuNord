import { Flex, Box, Heading } from "@chakra-ui/react";
import BuildingButton from "../Components/SalesPage/BuildingButton";
import TotalSales from "../Components/SalesPage/TotalSales";
import Legend from "../Components/SalesPage/Legend";

const array = ["A", "B", "C"];

const SalesPage = () => {
  return (
    <>
      <Heading textAlign="center" mt={{ base: 0, md: 20 }} bg="transparent">
        Suivre les ventes dans chaque bâtiment:
      </Heading>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
        gap={{ base: 2, md: 4 }}
      >
        {array.map((destination) => (
          <Box key={destination} w="200px" h="200px">
            <BuildingButton destination={destination} />
          </Box>
        ))}
      </Flex>
      <Legend />
      <TotalSales />
    </>
  );
};

export async function loader() {
  const token = localStorage.getItem("token");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const response = await fetch(backendUrl, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await response.json();

  const salesData = array.map((building) => {
    const buildingData = data.filter(
      (apartment) => apartment.building === building
    );
    const revenue = buildingData.reduce(
      (accumulator, apartment) =>
        accumulator +
        Number(apartment.parking) +
        Number(apartment.price) * Number(apartment.surface),
      0
    );
    const received = buildingData.reduce((accumulator, apartment) => {
      const apReceived = apartment.payments.reduce(
        (acc, payment) => acc + Number(payment.amount),
        0
      );
      return accumulator + apReceived;
    }, 0);

    const remaining = revenue - received;
    return { building, revenue, received, remaining };
  });

  localStorage.setItem("data", JSON.stringify(data));
  localStorage.setItem("sales", JSON.stringify(salesData));

  return data;
}

export default SalesPage;
