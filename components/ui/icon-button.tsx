import { cn } from "@/lib/utils";
import { MouseEventHandler, ReactElement } from "react";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: ReactElement;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        `
        flex items-center justify-center rounded-full bg-white border shadow-md p-2 hover:scale-110 transition `,
        className
      )}>
      {icon}
    </button>
  );
};

export default IconButton;
