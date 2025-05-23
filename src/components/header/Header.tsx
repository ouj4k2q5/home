import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { SiGithub } from "react-icons/si";

export const Header = () => {
  return (
    <header>
      <Box backgroundColor={"blackAlpha.300"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link
            variant="plain"
            href="https://ouj4k2q5.f5.si/"
            aria-label="go to top page"
            _hover={{
              color: "gray.500",
              transform: "scale(1.1)",
              textDecoration: "none",
            }}
            _active={{ transform: "scale(0.9)" }}
            _focus={{
              color: "gray.500",
              transform: "scale(1.1)",
              textDecoration: "none",
            }}
            transition="all 0.5s ease-in-out"
          >
            <Text fontWeight="bold" color="#e4e4e7">
              ouj4k2q5
            </Text>
          </Link>
          <Link
            href="https://github.com/ouj4k2q5/home"
            color="#e4e4e7"
            aria-label="go to Github"
            _hover={{ color: "gray.500", transform: "scale(1.1)" }}
            _active={{ transform: "scale(0.9)" }}
            _focus={{ color: "gray.500", transform: "scale(1.1)" }}
            transition="all 0.5s ease-in-out"
            focusRingColor="blackAlpha.200"
          >
            <SiGithub size="20px" />
          </Link>
        </Flex>
      </Box>
    </header>
  );
};
