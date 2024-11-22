import {
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Box,
  Heading,
} from "@chakra-ui/react";
import AddPayment from "./AddPayment";

const Payments = ({ payments, handleAddPayment, handleDeletePayment }) => {
  return (
    <>
      <Heading
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={5}
      >
        Paiments
      </Heading>
      <Box overflowX="auto" w="100%" mt={5}>
        <Table variant="simple" w="full" minWidth="600px">
          <Thead bg="#ae8957">
            <Tr>
              <Th color="white" fontWeight="bold" minW="180px">
                Nom
              </Th>
              <Th color="white" fontWeight="bold" minW="180px">
                Date
              </Th>
              <Th color="white" fontWeight="bold" minW="180px">
                Montant
              </Th>
              <Th color="white" fontWeight="bold" minW="180px">
                Type
              </Th>
              <Th color="white" fontWeight="bold" minW="180px">
                Status
              </Th>
              <Th color="white" fontWeight="bold" minW="180px">
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {payments.map((payment, index) => (
              <Tr
                key={index}
                bg={payment.status === "payed" ? "#4cad49" : "#bcbc51"} // Green for paid, Yellow for pending
              >
                <Td>{payment.name}</Td>
                <Td>{payment.date}</Td>
                <Td>{payment.amount}</Td>
                <Td>{payment["payment-type"]}</Td>
                <Td>{payment.status}</Td>
                <Td>
                  <Button
                    onClick={() => handleDeletePayment(index)}
                    colorScheme="red"
                    variant="outline"
                    size="sm"
                    borderColor="red.500"
                    color="red.500"
                    _hover={{
                      bg: "red.500",
                      color: "white",
                      borderColor: "red.500",
                    }}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
            <AddPayment handleAddPayment={handleAddPayment} />
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default Payments;
