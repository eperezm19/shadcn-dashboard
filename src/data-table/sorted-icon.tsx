"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { SortDirection } from "@tanstack/react-table";

interface Props {
  isSorted: boolean | SortDirection;
}

export default function SortedIcon({ isSorted }: Props) {
  if (isSorted === "asc") {
    return <ChevronUpIcon className="h-4 w-4" />;
  }

  if (isSorted === "desc") {
    return <ChevronDownIcon className="h-4 w-4" />;
  }

  return null;
}
