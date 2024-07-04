"use client";

import * as React from "react";


import { LiaPlaceOfWorshipSolid } from "react-icons/lia";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const frameworks = [
  {
    value: "Istanbul",
    label: "Istanbul",
  },
  {
    value: "Antalya",
    label: "Antalya",
  },
  {
    value: "Cappadocia",
    label: "Cappadocia",
  },
  {
    value: "Izmir",
    label: "Izmir",
  },
  {
    value: "Bodrum",
    label: "Bodrum",
  },
  {
    value: "Pamukkale",
    label: "Pamukkale",
  },
  {
    value: "Fethiye",
    label: "Fethiye",
  },
  {
    value: "Marmaris",
    label: "Marmaris",
  },
  {
    value: "Ankara",
    label: "Ankara",
  },
  {
    value: "Konya",
    label: "Konya",
  },
];

export function SearchPlaceBox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full lg:w-[25%] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select Place..."}
          <LiaPlaceOfWorshipSolid
            size={30}
            color="red"
            className="hover:bg-gray-300 rounded-md"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[25rem] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
