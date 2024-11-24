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
import { Toaster, toaster } from "@/components/ui/toaster";
import { IconButton, Image } from "@chakra-ui/react";
import { useCallback } from "react";
import { FaShare } from "react-icons/fa6";

export const ShareDialog = () => {
  const handleClick = useCallback(() => {
    const url = window.location.origin;

    void (async () => {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (navigator.share) {
        await navigator.share({
          title: "ouj4k2q5",
          url: url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        toaster.create({
          description: "URL copied to clipboard successfully",
          duration: 3000,
          type: "success",
        });
      }
    })();
  }, []);

  return (
    <>
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
        <DialogContent
          bg="gray.800"
          color="white"
          width="70vw"
          maxWidth="400px"
        >
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
            <IconButton
              bg="gray.900"
              color="white"
              size="xs"
              onClick={handleClick}
              aria-label="Share this website"
            >
              <FaShare />
            </IconButton>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
      <Toaster />
    </>
  );
};
