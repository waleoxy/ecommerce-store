"use client";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface NavbarActionsProps {}

const NavbarActions: React.FC<NavbarActionsProps> = ({}) => {
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full px-4 py-2">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-white text-sm font-medium">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
