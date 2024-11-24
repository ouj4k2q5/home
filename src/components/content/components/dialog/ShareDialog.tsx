import {
  ClipboardIconButton,
  ClipboardInput,
  ClipboardRoot,
} from "@/components/ui/clipboard";
import {
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InputGroup } from "@/components/ui/input-group";
import { Image } from "@chakra-ui/react";

export const ShareDialog = () => {
  return (
    <DialogRoot
      placement="center"
      scrollBehavior="inside"
      size="sm"
      trapFocus={false}
    >
      <DialogTrigger asChild>
        <Image
          src="web-app-manifest-192x192.png"
          borderRadius="full"
          alt="Open a modal to share this page"
        />
      </DialogTrigger>
      <DialogContent bg="gray.800" color="white" width="70vw" maxWidth="500px">
        <DialogHeader display="flex" justifyContent="center">
          <DialogTitle textAlign="center">Share this page</DialogTitle>
        </DialogHeader>
        <DialogBody display="flex" justifyContent="center">
          <Image
            src="qrcode.png"
            width="70%"
            alt="QR code to share this page"
          />
        </DialogBody>
        <DialogFooter display="flex" justifyContent="space-evenly">
          <ClipboardRoot maxW="300px" value="https://ouj4k2q5.f5.si/">
            <InputGroup
              width="full"
              endElement={<ClipboardIconButton me="-2" />}
            >
              <ClipboardInput backgroundColor="gray.900" />
            </InputGroup>
          </ClipboardRoot>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
};
