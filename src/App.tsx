import { LinkButton } from "@/components/ui/link-button";
import { HStack, Image, Text, VStack } from "@chakra-ui/react";
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
      <HStack>
        <LinkButton
          href="https://www.youtube.com/@ouj4k2q5"
          aria-label="go to YouTube"
        >
          <FaYoutube />
        </LinkButton>
        <LinkButton href="https://x.com/ouj4k2q5" aria-label="go to Twitter">
          <FaXTwitter />
        </LinkButton>
      </HStack>
    </VStack>
  );
}

export default App;
