import { Button, Input, Select, Td, Tr } from "@chakra-ui/react";
import { useState } from "react";

export default function AddPayment({ handleAddPayment }) {
  const [newPayment, setNewPayment] = useState({
    name: "",
    date: "",
    amount: "",
    "payment-type": "",
    status: "",
  });

  function handleChange(input, value) {
    setNewPayment({ ...newPayment, [input]: value });
  }

  return (
    <Tr>
      <Td>
        <Select
          name="payment-name"
          value={newPayment.name}
          onChange={(e) => handleChange("name", e.target.value)}
          bg="white"
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
      </Td>
      <Td>
        <Input
          name="payment-date"
          value={newPayment.date}
          type="date"
          onChange={(e) => handleChange("date", e.target.value)}
          placeholder="Date"
          bg="white"
          borderColor="gray.300"
          borderRadius="8px"
          size="sm"
          p={3}
          _focus={{
            borderColor: "#ae8957",
            boxShadow: "0 0 5px rgba(174, 137, 87, 0.5)",
          }}
        />
      </Td>
      <Td>
        <Input
          name="payment-amount"
          value={newPayment.amount}
          onChange={(e) => handleChange("amount", e.target.value)}
          placeholder="Montant"
          bg="white"
          borderColor="gray.300"
          borderRadius="8px"
          size="sm"
          p={3}
          _focus={{
            borderColor: "#ae8957",
            boxShadow: "0 0 5px rgba(174, 137, 87, 0.5)",
          }}
        />
      </Td>
      <Td>
        <Select
          name="payment-type"
          value={newPayment["payment-type"]}
          onChange={(e) => handleChange("payment-type", e.target.value)}
          bg="white"
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
      </Td>
      <Td>
        <Select
          name="payment-status"
          value={newPayment.status}
          onChange={(e) => handleChange("status", e.target.value)}
          bg="white"
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
      </Td>
      <Td>
        <Button
          onClick={() => handleAddPayment(newPayment)}
          colorScheme="custom"
          variant="outline"
          size="sm"
          borderColor="#ae8957"
          color="#ae8957"
          _hover={{
            bg: "#ae8957",
            color: "white",
            borderColor: "#ae8957",
          }}
        >
          Ajouter
        </Button>
      </Td>
    </Tr>
  );
}
