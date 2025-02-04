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
  Select,
  Input,
} from "@chakra-ui/react";
import AddPayment from "./AddPayment";

const Payments = ({
  payments,
  handleAddPayment,
  handleDeletePayment,
  handleInputChange,
  isEditing,
}) => {
  if (payments.length === 0 && !isEditing)
    return (
      <Heading p={10} textAlign="center">
        {"Aucun paiment n'a été effectué"}
      </Heading>
    );

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
              {isEditing && <Th color="white" fontWeight="bold" minW="180px">
                Action
              </Th>}
            </Tr>
          </Thead>
          <Tbody>
            {payments.map((payment, index) => (
              <Tr
                key={index}
                bg={payment.status === "payed" ? "#4cad49" : "#bcbc51"} // Green for paid, Yellow for pending
              >
                <Td>
                  {!isEditing ? (
                    <p>{payment.name}</p>
                  ) : (
                    <Select
                      name="name"
                      value={payment.name}
                      onChange={(e) =>
                        handleInputChange(
                          "payments",
                          e.target.value,
                          index,
                          "name"
                        )
                      }
                      bg="transparent"
                      borderColor="gray.300"
                      borderRadius="8px"
                      size="sm"
                      p={3}
                      minW="170px"
                      _focus={{
                        borderColor: "#ae8957",
                        boxShadow: "0 0 5px rgba(174, 137, 87, 0.5)",
                      }}
                    >
                      <option value="">Choisir Nom</option>
                      <option value="Réservation">Réservation</option>
                      <option value="Gros Oeuvres">Gros Oeuvres</option>
                      <option value="Finition">Finition</option>
                      <option value="Livraison">Livraison</option>
                    </Select>
                  )}
                </Td>
                <Td>
                  {!isEditing ? (
                    <p>{payment.date}</p>
                  ) : (
                    <Input
                      name="date"
                      value={payment.date}
                      type="date"
                      onChange={(e) =>
                        handleInputChange(
                          "payments",
                          e.target.value,
                          index,
                          "date"
                        )
                      }
                      placeholder="Date"
                      bg="transparent"
                      borderColor="gray.300"
                      borderRadius="8px"
                      size="sm"
                      p={3}
                      _focus={{
                        borderColor: "#ae8957",
                        boxShadow: "0 0 5px rgba(174, 137, 87, 0.5)",
                      }}
                    />
                  )}
                </Td>
                <Td>
                  {!isEditing ? (
                    <p>{payment.amount}</p>
                  ) : (
                    <Input
                      name="amount"
                      value={payment.amount}
                      onChange={(e) =>
                        handleInputChange(
                          "payments",
                          e.target.value,
                          index,
                          "amount"
                        )
                      }
                      placeholder="Montant"
                      bg="transparent"
                      borderColor="gray.300"
                      borderRadius="8px"
                      size="sm"
                      p={3}
                      _focus={{
                        borderColor: "#ae8957",
                        boxShadow: "0 0 5px rgba(174, 137, 87, 0.5)",
                      }}
                    />
                  )}
                </Td>
                <Td>
                  {!isEditing ? (
                    <p>{payment["payment-type"]}</p>
                  ) : (
                    <Select
                      name="type"
                      value={payment["payment-type"]}
                      onChange={(e) =>
                        handleInputChange(
                          "payments",
                          e.target.value,
                          index,
                          "payment-type"
                        )
                      }
                      bg="transparent"
                      borderColor="gray.300"
                      borderRadius="8px"
                      size="sm"
                      p={3}
                      minW="170px"
                      _focus={{
                        borderColor: "#ae8957",
                        boxShadow: "0 0 5px rgba(174, 137, 87, 0.5)",
                      }}
                    >
                      <option value="">Choisir Type</option>
                      <option value="cash">Cash</option>
                      <option value="virement">Virement</option>
                    </Select>
                  )}
                </Td>
                <Td>
                  {!isEditing ? (
                    <p>{payment.status}</p>
                  ) : (
                    <Select
                      name="payment-status"
                      value={payment.status}
                      onChange={(e) =>
                        handleInputChange(
                          "payments",
                          e.target.value,
                          index,
                          "status"
                        )
                      }
                      bg="transparent"
                      borderColor="gray.300"
                      borderRadius="8px"
                      size="sm"
                      p={3}
                      minW="170px"
                      _focus={{
                        borderColor: "#ae8957",
                        boxShadow: "0 0 5px rgba(174, 137, 87, 0.5)",
                      }}
                    >
                      <option value="">Choisir Status</option>
                      <option value="pending">En attente</option>
                      <option value="payed">Payé</option>
                    </Select>
                  )}
                </Td>
                {isEditing && <Td>
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
                </Td>}
              </Tr>
            ))}
            {isEditing && <AddPayment handleAddPayment={handleAddPayment} />}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default Payments;
