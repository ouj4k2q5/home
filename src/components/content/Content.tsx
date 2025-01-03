import { HStack, Link, VStack } from "@chakra-ui/react";
import { SiSoundcloud, SiX, SiYoutube } from "react-icons/si";
import { ShareDialog } from "./components/dialog/ShareDialog";
export const Content = () => {
  return (
    <VStack gapY="30px" marginY="50px">
      <ShareDialog />
      <HStack gapX="20px">
        <Link
          href="https://www.youtube.com/@ouj4k2q5"
          color="#e4e4e7"
          aria-label="go to YouTube"
          _hover={{ color: "red.500", transform: "scale(1.1)" }}
          _active={{ transform: "scale(0.9)" }}
          _focus={{ color: "red.500", transform: "scale(1.1)" }}
          transition="all 0.5s ease-in-out"
          focusRingColor="blackAlpha.200"
        >
          <SiYoutube size="35px" />
        </Link>
        <Link
          href="https://x.com/ouj4k2q5"
          color="#e4e4e7"
          aria-label="go to Twitter"
          _hover={{ color: "blue.400", transform: "scale(1.1)" }}
          _active={{ transform: "scale(0.9)" }}
          _focus={{ color: "blue.400", transform: "scale(1.1)" }}
          transition="all 0.5s ease-in-out"
          focusRingColor="blackAlpha.200"
        >
          <SiX size="30px" />
        </Link>
        <Link
          href="https://soundcloud.com/ouj4k2q5"
          color="#e4e4e7"
          aria-label="go to SoundCloud"
          _hover={{ color: "orange.500", transform: "scale(1.1)" }}
          _active={{ transform: "scale(0.9)" }}
          _focus={{ color: "orange.500", transform: "scale(1.1)" }}
          transition="all 0.5s ease-in-out"
          focusRingColor="blackAlpha.200"
        >
          <SiSoundcloud size="30px" />
        </Link>
      </HStack>
    </VStack>
  );
};
