import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { useApartmentContext } from "../context/ApartmentContext";
import { useEffect, useState } from "react";
import AppartmentDetailsHeader from "./AppartmentDetailsHeader";
import ApartmentDetailsModalEditing from "./ApartmentDetailsModalEditing";
import ApartmentDetailsModalRead from "./ApartmentDetailsModalRead";
import ApartmentDetailsModalFooter from "./ApartmentDetailsModalFooter";
import Payments from "./Payments";

export default function ApartmentDetailsModal() {
  const {
    isOpen,
    ModalClose,
    apartment,
    setApartment,
    isEditing,
    setIsEditing,
    payed,
    apartmentPrice,
    rest,
    admin,
  } = useApartmentContext();
  const [apartmentInfo, setApartmentInfo] = useState(apartment);
  const canSubmit = JSON.stringify(apartmentInfo) !== JSON.stringify(apartment);
  const isAdmin = admin === localStorage.getItem("user");

  useEffect(() => {
    setApartmentInfo(JSON.parse(JSON.stringify(apartment)));
  }, [apartment, isOpen]);

  function handleInputChange(input, value, index, field) {
    setApartmentInfo((prev) => {
      const updated = JSON.parse(JSON.stringify(prev));
      if (field) updated[input][index][field] = value;
      else updated[input] = value;
      return updated;
    });
  }

  function handleAddPayment(payment) {
    setApartmentInfo({
      ...apartmentInfo,
      payments: [...apartmentInfo.payments, payment],
    });
  }

  function handleDeletePayment(index) {
    setApartmentInfo((prev) => {
      const updated = JSON.parse(JSON.stringify(prev));
      updated.payments.splice(index, 1);
      return updated;
    });
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={ModalClose}
      motionPreset="slideInBottom"
      size="full"
      isCentered
    >
      <ModalOverlay />
      <ModalContent height="100vh" width="100vw" bg="#f4f1eb">
        <ModalBody
          paddingY={{ base: 10, md: 0 }}
          height="100%"
          width="100%"
          overflowY="auto"
        >
          <AppartmentDetailsHeader
            isEditing={isEditing}
            name={apartmentInfo.name}
            onClose={ModalClose}
            setIsEditing={setIsEditing}
            isAdmin={isAdmin}
          />
          {isEditing ? (
            <ApartmentDetailsModalEditing
              apartmentInfo={apartmentInfo}
              handleInputChange={handleInputChange}
            />
          ) : (
            <ApartmentDetailsModalRead apartmentInfo={apartmentInfo} />
          )}
          <Payments
            handleAddPayment={handleAddPayment}
            payments={apartmentInfo.payments}
            handleDeletePayment={handleDeletePayment}
            isEditing={isEditing}
            handleInputChange={handleInputChange}
          />
          <ApartmentDetailsModalFooter
            apartmentInfo={apartmentInfo}
            payed={payed}
            rest={rest}
            apartmentPrice={apartmentPrice}
            isEditing={isEditing}
            canSubmit={canSubmit}
            setApartment={setApartment}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
