import { Box, Center, Text } from "@chakra-ui/react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="Footer">
      <Box backgroundColor={"blackAlpha.300"}>
        <Center h={16}>
          <Text>&copy; 2024 ouj4k2q5</Text>
        </Center>
      </Box>
    </footer>
  );
};
