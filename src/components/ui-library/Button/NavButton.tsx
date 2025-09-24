import React from "react";
import { Button, ButtonProps } from "@/components/ui-library/Button/Button";
import { TbArrowBigLeftFilled, TbArrowBigRightFilled } from "react-icons/tb";

export type NavButtonDirection = "left" | "right";

export type NavButtonProps = Omit<ButtonProps, "children" | "variant"> & {
  direction: NavButtonDirection;
};

export const NavButton: React.FC<NavButtonProps> = ({
  direction,
  ...buttonProps
}) => {
  const Icon = direction === "left" ? TbArrowBigLeftFilled : TbArrowBigRightFilled;
  
  return (
    <Button variant="navigation" {...buttonProps}>
      <Icon />
    </Button>
  );
};