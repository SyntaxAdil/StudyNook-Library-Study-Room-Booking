"use client";

import {
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  Label,
  SearchField,
  Surface,
} from "@heroui/react";
import { BiX } from "react-icons/bi";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getAllRooms } from "../../lib/data/data";
import { useRouter, useSearchParams } from "next/navigation";

const RoomActionSidebar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const amenitiesList = [
    { id: "whiteboard", label: "Whiteboard" },
    { id: "projector", label: "Projector" },
    { id: "wifi", label: "Wi-Fi" },
    { id: "power_outlets", label: "Power Outlets" },
    { id: "quiet_zone", label: "Quiet Zone" },
    { id: "ac", label: "Air Conditioning" },
  ];

  const [query, setQuery] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [amenities, setAmenities] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (query) {
      params.set("search", query.trim());
    } else {
      params.delete("search");
    }
    if (amenities.length > 0) {
      params.set("amenities", amenities.join(","));
    } else {
      params.delete("amenities");
    }
    if (max) {
      params.set("max", Number(max));
    } else {
      params.delete("max");
    }
    if (min) {
      params.set("min", Number(min));
    } else {
      params.delete("min");
    }

    router.push(`/rooms?${params.toString()}`);
  }, [query, amenities,max,min]);

  const reset = () => {
    router.push("/rooms");
    setQuery("");
    setMax("")
    setMin("")
    setAmenities([]);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border px-4  h-full rounded-xl pb-18  "
    >
      <div className="flex items-center justify-between my-4">
        <h4 className="text-xl font-semibold ">Refine</h4>
        <Button onClick={reset} variant="ghost">
          <BiX></BiX>
          Reset
        </Button>
      </div>
      <SearchField name="search">
        <Label className="mb-2">Search by name</Label>
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-70"
            placeholder="Search..."
          />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>

      {/* checkbox for Amenities */}
      <Surface className="w-full mt-4 rounded-2xl p-6">
        <CheckboxGroup
          name="amenities"
          variant="secondary"
          value={amenities}
          onChange={setAmenities}
        >
          <Label>Amenities</Label>
          {amenitiesList.map((a) => (
            <Checkbox key={a.id} value={a.id}>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              <Checkbox.Content>
                <Label>{a.label}</Label>
              </Checkbox.Content>
            </Checkbox>
          ))}
        </CheckboxGroup>
      </Surface>

      <div className="mt-4">
        <Label>Hourly rate ($)</Label>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="flex flex-col gap-1">
            <Input
              min={0}
              value={min}
              onChange={(e) => setMin(e.target.value)}
              placeholder="Min"
              type="number"
              className={"rounded-md"}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Input
              min={0}
              value={max}
              onChange={(e) => setMax(e.target.value)}
              placeholder="Max"
              type="number"
              className={"rounded-md"}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomActionSidebar;
