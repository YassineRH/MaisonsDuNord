import { useDisclosure } from "@chakra-ui/react";
import { createContext, useContext, useState } from "react";

const ApartmentContext = createContext();

export const ApartmentProvider = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [apartment, setApartment] = useState({
    buyer: "",
    price: "",
    payments: [],
    floor: "",
    building: "",
    name: "",
    parking: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const payed = apartment.payments.reduce(
    (acc, payment) => acc + Number(payment.amount),
    0
  );
  const apartmentPrice =
    Number(apartment.price) * Number(apartment.surface) +
    Number(apartment.parking);

  const rest = Number(apartmentPrice) - Number(payed);

  const admin = "46il9KcEGdZzkn74aYxYgx23vpK2";

  function ModalClose() {
    onClose();
    setIsEditing(false);
  }

  return (
    <ApartmentContext.Provider
      value={{
        apartment,
        setApartment,
        isOpen,
        ModalClose,
        onOpen,
        isEditing,
        setIsEditing,
        payed,
        apartmentPrice,
        rest,
        admin,
      }}
    >
      {children}
    </ApartmentContext.Provider>
  );
};

export const useApartmentContext = () => {
  const context = useContext(ApartmentContext);
  if (!context) {
    throw new Error(
      "useApartmentContext must be used within an ApartmentProvider"
    );
  }
  return context;
};
