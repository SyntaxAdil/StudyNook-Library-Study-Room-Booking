"use client";

import React, { useState } from "react";

import Image from "next/image";

import {
  Button,
  Checkbox,
  CheckboxGroup,
  Form,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";

import { BiEdit } from "react-icons/bi";
import { FiLoader, FiSave } from "react-icons/fi";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { authClient } from "../../lib/auth/auth-client";

export function EditRoom({ room }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const [formData, setFormData] = useState({
    roomName: room?.roomName || "",
    description: room?.description || "",
    imageUrl: room?.imageUrl || "",
    floor: room?.floor?.toString() || "",
    capacity: room?.capacity?.toString() || "",
    hourlyRate: room?.hourlyRate?.toString() || "",
  });

  // default amenities
  const [selectedAmenities, setSelectedAmenities] = useState(
    room?.amenities || [],
  );

  // amenities list
  const amenitiesList = [
    { id: "whiteboard", label: "Whiteboard" },
    { id: "projector", label: "Projector" },
    { id: "wifi", label: "Wi-Fi" },
    { id: "power_outlets", label: "Power Outlets" },
    { id: "quiet_zone", label: "Quiet Zone" },
    { id: "ac", label: "Air Conditioning" },
  ];

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // update room
  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedRoom = {
      roomName: formData.roomName,
      description: formData.description,
      imageUrl: formData.imageUrl,
      floor: Number(formData.floor),
      capacity: Number(formData.capacity),
      hourlyRate: Number(formData.hourlyRate),
      amenities: selectedAmenities,
    };

    setIsPending(true);

    try {
      const { data: tokenData } = await authClient.token();
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/rooms/${room?._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${tokenData?.token}`,
          },

          body: JSON.stringify(updatedRoom),
        },
      );

      const data = await res.json();

      if (data.success) {
        toast.success("Room updated successfully!");
        router.refresh();
      } else {
        toast.error("Failed to update room");
      }
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong");
    } finally {
      setIsPending(false);
      setIsOpen(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
      {/* trigger button */}
      <Button
        variant="ghost"
        className="rounded-full border border-default-200 px-5 hover:bg-default-100 transition-all"
      >
        <BiEdit className="text-lg" />
        <span>Edit</span>
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="w-full max-w-5xl rounded-3xl overflow-hidden p-0">
            <Modal.CloseTrigger />

            <Modal.Body className="p-0">
              <div className="grid lg:grid-cols-2 min-h-[650px]">
                {/* left side image */}
                <div className="hidden lg:block relative overflow-hidden">
                  <Image
                    src={room?.imageUrl}
                    alt={room?.roomName}
                    fill
                    priority
                    className="object-cover h-100"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                  {/* text */}
                  <div className="absolute bottom-10 left-8 z-10 text-white">
                    <h2 className="text-4xl font-black leading-tight">
                      {room?.roomName}
                    </h2>

                    <p className="mt-3 text-white/80 max-w-sm leading-relaxed">
                      Update your room information, pricing, and amenities with
                      a clean modern interface.
                    </p>
                  </div>
                </div>

                {/* form section */}
                <div className="overflow-y-auto max-h-[90vh] p-6 md:p-8">
                  {/* heading mobile */}
                  <div className="lg:hidden mb-6">
                    <h2 className="text-3xl font-black">Edit Room</h2>

                    <p className="text-muted mt-2 text-sm">
                      Update your room details and amenities.
                    </p>
                  </div>

                  <Surface
                    variant="default"
                    className="border border-border rounded-3xl p-5"
                  >
                    <Form
                      onSubmit={handleUpdate}
                      className="grid grid-cols-1 gap-5"
                    >
                      {/* room name */}
                      <div className="flex flex-col gap-2">
                        <Label>Room Name</Label>

                        <Input
                          name="roomName"
                          value={formData.roomName}
                          onChange={handleInputChange}
                          placeholder="Room name"
                        />
                      </div>

                      {/* description */}
                      <div className="flex flex-col gap-2">
                        <Label>Description</Label>

                        <Input
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          placeholder="Description"
                        />
                      </div>

                      {/* image url */}
                      <div className="flex flex-col gap-2">
                        <Label>Image URL</Label>

                        <Input
                          name="imageUrl"
                          value={formData.imageUrl}
                          onChange={handleInputChange}
                          placeholder="https://..."
                        />
                      </div>

                      {/* grid fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {/* floor */}
                        <div className="flex flex-col gap-2">
                          <Label>Floor</Label>

                          <Input
                            name="floor"
                            type="number"
                            value={formData.floor}
                            onChange={handleInputChange}
                            placeholder="Floor"
                          />
                        </div>

                        {/* capacity */}
                        <div className="flex flex-col gap-2">
                          <Label>Capacity</Label>

                          <Input
                            name="capacity"
                            type="number"
                            value={formData.capacity}
                            onChange={handleInputChange}
                            placeholder="Capacity"
                          />
                        </div>

                        {/* hourly rate */}
                        <div className="flex flex-col gap-2">
                          <Label>Hourly Rate</Label>

                          <Input
                            name="hourlyRate"
                            type="number"
                            value={formData.hourlyRate}
                            onChange={handleInputChange}
                            placeholder="Rate"
                          />
                        </div>

                        <div className="flex flex-col gap-2 col-span-3 ">
                          <Label className="text-sm font-semibold mb-1">
                            Amenities
                          </Label>
                          <CheckboxGroup
                            orientation="horizontal"
                            value={selectedAmenities}
                            onChange={setSelectedAmenities}
                            className="grid grid-cols-2 md:grid-cols-2 gap-2 "
                          >
                            {amenitiesList.map((item) => (
                              <Checkbox
                                key={item.id}
                                value={item.id}
                                color="primary"
                                className=" m-0 p-4 bg-field-background border border-border rounded-xl flex items-center gap-3 data-[selected=true]:border-primary hover:bg-default-100 transition-colors cursor-pointer "
                              >
                                <Checkbox.Control>
                                  <Checkbox.Indicator />
                                </Checkbox.Control>
                                <Checkbox.Content>
                                  <Label className="text-foreground font-medium text-sm cursor-pointer">
                                    {item.label}
                                  </Label>
                                </Checkbox.Content>
                              </Checkbox>
                            ))}
                          </CheckboxGroup>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={isPending}
                        className="mt-4"
                      >
                        {isPending ? (
                          <>
                            <FiLoader className="animate-spin" />
                            Updating...
                          </>
                        ) : (
                          <>
                            <FiSave />
                            Update Room
                          </>
                        )}
                      </Button>
                    </Form>
                  </Surface>
                </div>
              </div>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
