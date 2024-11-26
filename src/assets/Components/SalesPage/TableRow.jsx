import { Tr, Td } from "@chakra-ui/react";
import { useApartmentContext } from "./context/ApartmentContext";

const TableRow = ({ appartment }) => {
  const { onOpen, setApartment } = useApartmentContext();

  const price =
    Number(appartment.price) * Number(appartment.surface) +
    Number(appartment.parking);
  const totalPayed = appartment.payments.reduce(
    (acc, pay) => acc + Number(pay.amount),
    0
  );

  let floorColor;
  switch (appartment.floor) {
    case "RDC":
      floorColor = "#e7dac8";
      break;
    case "1":
      floorColor = "#d1c2a9";
      break;
    case "2":
      floorColor = "#ae8957";
      break;
    default:
      floorColor = "#FFFFFF";
  }

  return (
    <Tr
      sx={{
        bgColor: floorColor,
        _hover: { bg: "#c1a684" },
        transition: "background-color 0.3s",
        cursor: "pointer",
      }}
      onClick={() => {
        onOpen();
        setApartment(appartment);
      }}
    >
      {[
        appartment.floor,
        appartment.name,
        appartment.buyer,
        appartment.surface,
        totalPayed.toLocaleString(),
        price.toLocaleString(),
        (price - totalPayed).toLocaleString(),
        appartment.parking && "YES",
      ].map((value, idx) => (
        <Td
          key={idx}
          p={{ base: 2, md: 4 }}
          lineHeight="1.5"
          minWidth={{ base: "80px", md: "150px" }}
          textAlign="center"
          verticalAlign="middle"
          whiteSpace={{ base: "normal", md: "nowrap" }}
          textOverflow="ellipsis"
          border="none"
          borderBottom="1px solid #ebe8e3"
          bg="inherit"
          fontSize={{ base: "sm", md: "md" }}
        >
          {value}
        </Td>
      ))}
    </Tr>
  );
};

export default TableRow;
