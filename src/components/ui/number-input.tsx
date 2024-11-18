import { NumberInput as ChakraNumberInput } from "@chakra-ui/react";
import * as React from "react";

// workaround for the error
// `error  An interface declaring no members is equivalent to its supertype  @typescript-eslint/no-empty-object-type`
// use type instead of interface
// export interface NumberInputProps extends ChakraNumberInput.RootProps {}
type NumberInputProps = ChakraNumberInput.RootProps;

export const NumberInputRoot = React.forwardRef<
  HTMLDivElement,
  NumberInputProps
>(function NumberInput(props, ref) {
  const { children, ...rest } = props;
  return (
    <ChakraNumberInput.Root ref={ref} variant="outline" {...rest}>
      {children}
      <ChakraNumberInput.Control>
        <ChakraNumberInput.IncrementTrigger />
        <ChakraNumberInput.DecrementTrigger />
      </ChakraNumberInput.Control>
    </ChakraNumberInput.Root>
  );
});

export const NumberInputField = ChakraNumberInput.Input;
export const NumberInputScruber = ChakraNumberInput.Scrubber;
export const NumberInputLabel = ChakraNumberInput.Label;
