"use client";

import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  Label,
  TextField,
  CheckboxGroup,
  Checkbox,
} from "@heroui/react";
import { motion } from "motion/react";
import toast from "react-hot-toast";
import { FiLoader, FiPlusCircle } from "react-icons/fi";

import { useRouter } from "next/navigation";
import Wrapper from "../../components/shared/Wrapper";
import { useSession } from "../../lib/auth/auth-client";

const AddRoomWrapper = () => {
  const [isPending, setIsPending] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const { data: session } = useSession();
  const user = session?.user;
  const router=useRouter()
  const onSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const roomData = Object.fromEntries(formdata.entries());

    roomData.amenities = selectedAmenities;
    roomData.userId = user.id;
    roomData.userName = user.name;
    roomData.userEmail = user.email;
    roomData.userImage = user.image;
    roomData.createdAt=new Date();


    setIsPending(true);
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_URL + "/rooms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(roomData),
      });

      const data= await res.json()

      if(data.success){
        router.push("/my-listing")
        toast.success("Room Published Successfully!");
      }
      e.target.reset();
      setSelectedAmenities([]);
    } catch (error) {
      toast.error("Failed to publish room.");
    } finally {
      setIsPending(false);
    }
  };

  const amenitiesList = [
    { id: "whiteboard", label: "Whiteboard" },
    { id: "projector", label: "Projector" },
    { id: "wifi", label: "Wi-Fi" },
    { id: "power_outlets", label: "Power Outlets" },
    { id: "quiet_zone", label: "Quiet Zone" },
    { id: "ac", label: "Air Conditioning" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-12 transition-colors duration-500">
      <Wrapper className="my-0">
        <div className="max-w-2xl mx-auto">
          {/* Header Section */}
          <motion.header
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-10 text-center md:text-left"
          >
            <h1 className="text-3xl md:text-4xl font-black mb-2 tracking-tight">
              Add a New Room
            </h1>
            <p className="text-muted text-sm md:text-base">
              Share your study room with others. You can edit or remove it any
              time.
            </p>
          </motion.header>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-surface p-6 md:p-10 rounded-2xl shadow-surface-shadow border border-border backdrop-blur-md"
          >
            <Form className="grid grid-cols-1 gap-6" onSubmit={onSubmit}>
              {/* Room Name */}
              <TextField
                isRequired
                name="roomName"
                type="text"
                validate={(v) =>
                  v.trim().length < 3
                    ? "Room name must be at least 3 characters"
                    : null
                }
              >
                <Label className="text-sm font-semibold mb-1">Room Name</Label>
                <Input
                  placeholder="Enter room name"
                  className="bg-field-background"
                />
              </TextField>

              {/* Description */}
              <TextField
                isRequired
                name="description"
                type="text"
                validate={(v) =>
                  v.trim().length < 10
                    ? "Description must be at least 10 characters"
                    : null
                }
              >
                <Label className="text-sm font-semibold mb-1">
                  Description
                </Label>
                <Input
                  placeholder="Describe the room environment, rules, etc."
                  className="bg-field-background"
                />
              </TextField>

              {/* Image URL */}
              <TextField
                isRequired
                name="imageUrl"
                type="text"
                validate={(v) =>
                  !/^(https?:\/\/.*\.(?:png|jpg|jpeg|webp|svg))/i.test(v)
                    ? "Please enter a valid image URL"
                    : null
                }
              >
                <Label className="text-sm font-semibold mb-1">Image URL</Label>
                <Input
                  placeholder="https://..."
                  className="bg-field-background"
                />
              </TextField>

              {/* Grid for Floor, Capacity, Hourly Rate */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Floor */}
                <TextField
                  isRequired
                  name="floor"
                  type="text"
                  validate={(v) =>
                    v.trim().length === 0 ? "Floor details required" : null
                  }
                >
                  <Label className="text-sm font-semibold mb-1">Floor</Label>
                  <Input
                    placeholder="e.g. 3rd Floor"
                    className="bg-field-background"
                  />
                </TextField>

                {/* Capacity */}
                <TextField
                  isRequired
                  name="capacity"
                  type="number"
                  validate={(v) =>
                    Number(v) <= 0 ? "Capacity must be greater than 0" : null
                  }
                >
                  <Label className="text-sm font-semibold mb-1">Capacity</Label>
                  <Input
                    placeholder="2"
                    type="number"
                    className="bg-field-background"
                  />
                </TextField>

                {/* Hourly Rate */}
                <TextField
                  isRequired
                  name="hourlyRate"
                  type="number"
                  validate={(v) =>
                    Number(v) < 0 ? "Rate cannot be negative" : null
                  }
                >
                  <Label className="text-sm font-semibold mb-1">
                    Hourly Rate ($)
                  </Label>
                  <Input
                    placeholder="5"
                    type="number"
                    className="bg-field-background"
                  />
                </TextField>
              </div>

              {/* Your Specific Sub-component Architecture Followed Here */}
              <div className="flex flex-col gap-2">
                <Label className="text-sm font-semibold mb-1">Amenities</Label>
                <CheckboxGroup
                  orientation="horizontal"
                  value={selectedAmenities}
                  onChange={setSelectedAmenities}
                  className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full"
                >
                  {amenitiesList.map((item) => (
                    <Checkbox
                      key={item.id}
                      value={item.id}
                      color="primary"
                      className=" m-0 p-4 bg-field-background border border-border rounded-xl flex items-center gap-3 data-[selected=true]:border-primary hover:bg-default-100 transition-colors cursor-pointer"
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

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full md:w-auto md:px-8 h-12 bg-accent text-accent-foreground font-bold rounded-xl shadow-lg shadow-accent/20 hover:opacity-90 transition-all mt-4"
                isDisabled={isPending}
              >
                {isPending ? (
                  <FiLoader className="animate-spin text-xl" />
                ) : (
                  <div className="flex items-center gap-2">
                    <FiPlusCircle size={20} />
                    <span>Publish Room</span>
                  </div>
                )}
              </Button>
            </Form>
          </motion.div>
        </div>
      </Wrapper>
    </div>
  );
};

export default AddRoomWrapper;
