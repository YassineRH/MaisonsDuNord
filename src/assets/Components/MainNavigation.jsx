import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Link, HStack } from "@chakra-ui/react";

const MainNavigation = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  return (
    <Box
      as="nav"
      w="100%"
      p={4}
      bg="#594535"
      color="white"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      zIndex="10"
      position="sticky"
      top="0"
    >
      <HStack
        maxW="1200px"
        mx="auto"
        justifyContent="space-around"
        spacing={8}
        align="center"
      >
        <Link
          as={NavLink}
          to="/"
          fontSize={{ base: "1rem", md: "1.25rem", lg: "1.5rem" }}
          fontWeight="semibold"
          letterSpacing="1px"
          color="white"
          _activeLink={{ color: "#e7dac8", textDecoration: "underline" }}
          _hover={{
            color: "#d1c2a9",
            transform: "scale(1.05)",
            textDecoration: "none",
          }}
          _focus={{ outline: "none" }}
          px={2}
        >
          Logout
        </Link>
        <Link
          as={NavLink}
          to="/ventes"
          fontSize={{ base: "1rem", md: "1.25rem", lg: "1.5rem" }}
          fontWeight="semibold"
          letterSpacing="1px"
          color="white"
          _activeLink={{ color: "#e7dac8", textDecoration: "underline" }}
          _hover={{
            color: "#d1c2a9",
            transform: "scale(1.05)",
            textDecoration: "none",
          }}
          _focus={{ outline: "none" }}
          px={2}
        >
          Ventes
        </Link>
      </HStack>
    </Box>
  );
};

export default MainNavigation;
