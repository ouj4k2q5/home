import type { ButtonProps as ChakraCloseButtonProps } from "@chakra-ui/react";
import { IconButton as ChakraIconButton } from "@chakra-ui/react";
import * as React from "react";
import { LuX } from "react-icons/lu";

// workaround for the error
// `error  An interface declaring no members is equivalent to its supertype  @typescript-eslint/no-empty-object-type`
// use type instead of interface
// export interface CloseButtonProps extends ChakraCloseButtonProps {}
type CloseButtonProps = ChakraCloseButtonProps;

export const CloseButton = React.forwardRef<
  HTMLButtonElement,
  CloseButtonProps
>(function CloseButton(props, ref) {
  return (
    <ChakraIconButton variant="ghost" aria-label="Close" ref={ref} {...props}>
      {props.children ?? <LuX />}
    </ChakraIconButton>
  );
});
