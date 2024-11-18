"use client";

import type { HTMLChakraProps, RecipeProps } from "@chakra-ui/react";
import { createRecipeContext } from "@chakra-ui/react";

// workaround for the error
// `error  An interface declaring no members is equivalent to its supertype  @typescript-eslint/no-empty-object-type`
// use type instead of interface
// export interface LinkButtonProps
// extends HTMLChakraProps<"a", RecipeProps<"button">> {}
type LinkButtonProps = HTMLChakraProps<"a", RecipeProps<"button">>;

const { withContext } = createRecipeContext({ key: "button" });

// Replace "a" with your framework's link component
export const LinkButton = withContext<HTMLAnchorElement, LinkButtonProps>("a");
