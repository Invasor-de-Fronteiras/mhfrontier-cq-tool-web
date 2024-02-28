import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { styled, keyframes } from "@stitches/react";
import { blackA } from "@radix-ui/colors";

interface FileDropdownMenuProps {
  triggerComponent: React.ReactNode;
}

const FileDropdownMenu = ({ triggerComponent }: FileDropdownMenuProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{triggerComponent}</DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenuContent sideOffset={5}>
          <DropdownMenuItem>
            Open File... <RightSlot>Ctrl+O</RightSlot>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            Download As... <RightSlot>Ctrl+S</RightSlot>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const contentStyles = {
  minWidth: 220,
  backgroundColor: "white",
  borderRadius: 6,
  padding: 5,
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
};

const DropdownMenuContent = styled(DropdownMenu.Content, contentStyles);

const itemStyles = {
  all: "unset",
  fontSize: 13,
  lineHeight: 1,
  color: blackA.blackA11,
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 25,
  padding: "0 5px",
  position: "relative",
  paddingLeft: 25,
  userSelect: "none",

  "&[data-disabled]": {
    color: blackA.blackA8,
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    backgroundColor: blackA.blackA2,
    color: blackA.blackA11,
    cursor: "pointer",
  },
};

const DropdownMenuItem = styled(DropdownMenu.Item, itemStyles);

const RightSlot = styled("div", {
  marginLeft: "auto",
  paddingLeft: 20,
  color: blackA.blackA11,
  "[data-disabled] &": { color: blackA.blackA8 },
});

export default FileDropdownMenu;
