import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { Box, Input, Button, Text, VStack, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await userCredential.user.getIdToken();
      const userId = userCredential.user.uid;
      const currDate = new Date();

      localStorage.setItem("token", token);
      localStorage.setItem("user", userId);
      localStorage.setItem("date", currDate);

      toast({
        title: "Login successful!",
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      navigate("/ventes");
    } catch (err) {
      toast({
        title: "Login failed!",
        description: err.message,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      maxW="500px"
      minW="350px"
      mx="auto"
      mt="100px"
      p={8}
      bg="#ae8957"
      boxShadow="lg"
      borderRadius="lg"
      border="1px solid #8c6d47"
    >
      <VStack as="form" spacing={6} onSubmit={handleLogin}>
        <Text fontSize="3xl" fontWeight="bold" color="white">
          Login
        </Text>

        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          isRequired
          focusBorderColor="teal.400"
          _hover={{ borderColor: "teal.400" }}
          bg="white"
          color="gray.800"
          borderRadius="md"
          border="1px solid #ccc"
        />

        <Input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          isRequired
          focusBorderColor="teal.400"
          _hover={{ borderColor: "teal.400" }}
          bg="white"
          color="gray.800"
          borderRadius="md"
          border="1px solid #ccc"
        />

        <Button
          type="submit"
          colorScheme="teal"
          isLoading={loading}
          loadingText="Logging in"
          width="full"
          bg="teal.500"
          _hover={{ bg: "teal.600" }}
          _active={{ bg: "teal.700" }}
          borderRadius="md"
        >
          Login
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;
