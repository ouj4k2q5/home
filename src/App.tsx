import { HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import "./App.css";

function App() {
  return (
    <VStack gapY="10px">
      <Image
        src="web-app-manifest-192x192.png"
        borderRadius="full"
        alt="ouj4k2q5"
      />
      <Text fontSize="2xl" fontWeight="bold">
        ouj4k2q5
      </Text>
      <HStack gapX="20px">
        <Link
          href="https://www.youtube.com/@ouj4k2q5"
          aria-label="go to YouTube"
          _hover={{ color: "red.500", transform: "scale(1.1)" }}
          _active={{ transform: "scale(0.9)" }}
          _focus={{ color: "red.500", transform: "scale(1.1)" }}
          transition="all 0.2s ease-in-out"
        >
          <FaYoutube size="35px" />
        </Link>
        <Link
          href="https://x.com/ouj4k2q5"
          aria-label="go to Twitter"
          _hover={{ color: "blue.400", transform: "scale(1.1)" }}
          _active={{ transform: "scale(0.9)" }}
          _focus={{ color: "blue.400", transform: "scale(1.1)" }}
          transition="all 0.2s ease-in-out"
        >
          <FaXTwitter size="30px" />
        </Link>
      </HStack>
    </VStack>
  );
}

export default App;
