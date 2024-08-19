import React from "react";
import { useNavigate } from "react-router-dom";
import { CiViewList } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";
import { Box, Button, Stack } from "@chakra-ui/react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      backgroundColor="gray.50"
    >
      <Stack direction="row" spacing={8}>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => navigate("/session")}
          _hover={{
            transform: "scale(1.05)",
            boxShadow: "lg",
          }}
        >
          <Box as="span" mr="2">
            <IoCreateOutline size="24px" />
          </Box>
          Start Conversation
        </Button>
        <Button
          colorScheme="blue"
          size="lg"
          onClick={() => navigate("/conversations")}
          _hover={{
            transform: "scale(1.05)",
            boxShadow: "lg",
          }}
        >
          <Box as="span" mr="2">
            <CiViewList size="24px" />
          </Box>
          Previous Conversations
        </Button>
      </Stack>
    </Box>
  );
};

export default Home;
