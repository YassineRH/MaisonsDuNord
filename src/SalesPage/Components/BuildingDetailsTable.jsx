import { Table, Thead, Tbody, Tr, Th, Box } from "@chakra-ui/react";
import TableRow from "./TableRow";

const BuildingDetailsTable = ({ data }) => {
  return (
    <Box
      w="100%"
      overflowX="auto"
      border="1px solid #d1c2a9"
      borderRadius={{ base: 0, md: "10px" }}
    >
      <Table
        variant="unstyled"
        sx={{ borderCollapse: "collapse" }}
        w="100%"
        minW={{ base: "600px", md: "1000px" }}
        fontSize={{ base: "sm", md: "md" }}
      >
        <Thead bg="#ae8957">
          <Tr>
            <Th
              color="white"
              fontWeight="bold"
              p={{ base: 2, md: 4 }}
              width={{ base: "100px", md: "150px" }}
            >
              Etage
            </Th>
            <Th
              color="white"
              fontWeight="bold"
              p={{ base: 2, md: 4 }}
              width={{ base: "150px", md: "200px" }}
            >
              Nom/Num
            </Th>
            <Th
              color="white"
              fontWeight="bold"
              p={{ base: 2, md: 4 }}
              width={{ base: "150px", md: "200px" }}
            >
              Acheteur
            </Th>
            <Th
              color="white"
              fontWeight="bold"
              p={{ base: 2, md: 4 }}
              width={{ base: "100px", md: "150px" }}
            >
              Surface
            </Th>
            <Th
              color="white"
              fontWeight="bold"
              p={{ base: 2, md: 4 }}
              width={{ base: "150px", md: "200px" }}
            >
              Total Avance
            </Th>
            <Th
              color="white"
              fontWeight="bold"
              p={{ base: 2, md: 4 }}
              width={{ base: "150px", md: "200px" }}
            >
              Prix Total
            </Th>
            <Th
              color="white"
              fontWeight="bold"
              p={{ base: 2, md: 4 }}
              width={{ base: "100px", md: "150px" }}
            >
              Reste
            </Th>
            <Th
              color="white"
              fontWeight="bold"
              p={{ base: 2, md: 4 }}
              width={{ base: "100px", md: "150px" }}
            >
              Parking
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((appartment) => (
            <TableRow key={appartment.name} appartment={appartment} />
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default BuildingDetailsTable;
