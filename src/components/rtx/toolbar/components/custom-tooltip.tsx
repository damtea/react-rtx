import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { JSX } from "react";

type SimpleToolTipProps = {
  children: JSX.Element;
  title: string;
};

export const SimpleToolTip = ({ children, title }: SimpleToolTipProps) => {
  return (
    <Tooltip>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent>{title}</TooltipContent>
    </Tooltip>
  );
};
