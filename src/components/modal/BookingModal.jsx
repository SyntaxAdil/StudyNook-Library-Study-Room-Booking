"use client";

import {
  Button,
  Calendar,
  DateField,
  DatePicker,
  Input,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
  ListBox,
  Select,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { BiInfoCircle } from "react-icons/bi";

export function BookingModal({ room }) {
  const [isOpen, setIsOpen] = useState(false);
  const router=useRouter()
  const [timeStart, setTimeStart] = useState("9");
  const [timeEnd, setTimeEnd] = useState("10");
  const roomHour = room.hourlyRate;
  const totalPrice = Math.abs(roomHour * (Number(timeEnd) - Number(timeStart)));

  const startTime = [
    { label: "08:00", value: "8" },
    { label: "09:00", value: "9" },
    { label: "10:00", value: "10" },
    { label: "11:00", value: "11" },
    { label: "12:00", value: "12" },
    { label: "13:00", value: "13" },
    { label: "14:00", value: "14" },
    { label: "15:00", value: "15" },
    { label: "16:00", value: "16" },
    { label: "17:00", value: "17" },
    { label: "18:00", value: "18" },
    { label: "19:00", value: "19" },
  ];
  const endTime = [
    { label: "10:00", value: "10" },
    { label: "11:00", value: "11" },
    { label: "12:00", value: "12" },
    { label: "13:00", value: "13" },
    { label: "14:00", value: "14" },
    { label: "15:00", value: "15" },
    { label: "16:00", value: "16" },
    { label: "17:00", value: "17" },
    { label: "18:00", value: "18" },
    { label: "19:00", value: "19" },
    { label: "20:00", value: "20" },
  ];
  const handleConfirmBooking = async (e) => {
    e.preventDefault();

    // validation
    if (!timeStart || !timeEnd) {
      return toast.error("Please select booking time");
    }

    if (Number(timeEnd) <= Number(timeStart)) {
      return toast.error("End time must be greater than start time");
    }

    if (totalPrice <= 0) {
      return toast.error("Invalid booking duration");
    }

    const formdata = new FormData(e.target);

    const newBooking = Object.fromEntries(formdata.entries());

    // extra booking data
    newBooking.roomId = room?._id;
    newBooking.roomName = room?.roomName;
    newBooking.roomImage = room?.imageUrl;
    newBooking.hourlyRate = room?.hourlyRate;

    newBooking.start = timeStart;
    newBooking.end = timeEnd;

    newBooking.totalPrice = totalPrice;

    console.log(newBooking);

    // success demo
    toast.success("Booking validated successfully");
    setIsOpen(false)
    router.push("/my-bookings")
  };
  return (
    <Modal isOpen={isOpen} onOpenChange={setIsOpen} >
      <Button className="w-full h-14 bg-accent text-accent-foreground font-black text-base rounded-2xl shadow-lg shadow-accent/20 hover:opacity-95 active:scale-[0.98] transition-all">
        Book This Space
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>
                Book <strong>{room?.roomName}</strong>
              </Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Pick a date and time slot. Bookings run on the hour.
              </p>
            </Modal.Header>
            <Modal.Body className="p-2">
              <Surface variant="default">
                <form
                  onSubmit={handleConfirmBooking}
                  className="flex flex-col gap-6 "
                >
                  {/* date */}
                  <DatePicker isRequired name="date">
                    <Label>Date</Label>
                    <DateField.Group fullWidth>
                      <DateField.Input>
                        {(segment) => <DateField.Segment segment={segment} />}
                      </DateField.Input>
                      <DateField.Suffix>
                        <DatePicker.Trigger>
                          <DatePicker.TriggerIndicator />
                        </DatePicker.Trigger>
                      </DateField.Suffix>
                    </DateField.Group>
                    <DatePicker.Popover>
                      <Calendar aria-label="Event date">
                        <Calendar.Header>
                          <Calendar.YearPickerTrigger>
                            <Calendar.YearPickerTriggerHeading />
                            <Calendar.YearPickerTriggerIndicator />
                          </Calendar.YearPickerTrigger>
                          <Calendar.NavButton slot="previous" />
                          <Calendar.NavButton slot="next" />
                        </Calendar.Header>
                        <Calendar.Grid>
                          <Calendar.GridHeader>
                            {(day) => (
                              <Calendar.HeaderCell>{day}</Calendar.HeaderCell>
                            )}
                          </Calendar.GridHeader>
                          <Calendar.GridBody>
                            {(date) => <Calendar.Cell date={date} />}
                          </Calendar.GridBody>
                        </Calendar.Grid>
                        <Calendar.YearPickerGrid>
                          <Calendar.YearPickerGridBody>
                            {({ year }) => (
                              <Calendar.YearPickerCell year={year} />
                            )}
                          </Calendar.YearPickerGridBody>
                        </Calendar.YearPickerGrid>
                      </Calendar>
                    </DatePicker.Popover>
                  </DatePicker>

                  <div className="flex items-center gap-2">
                    {/* start */}
                    <Select
                      isRequired
                      name="start"
                      selectedKey={timeStart}
                      onSelectionChange={(key) => setTimeStart(key)}
                      className="w-full"
                    >
                      <Label>Start</Label>

                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>

                      <Select.Popover>
                        <ListBox>
                          {startTime.map((t) => (
                            <ListBox.Item
                              id={t.value}
                              key={t.value}
                              textValue={t.label}
                            >
                              {t.label}
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          ))}
                        </ListBox>
                      </Select.Popover>
                    </Select>

                    {/* end */}
                    <Select
                      isRequired
                      name="end"
                      selectedKey={timeEnd}
                      onSelectionChange={(key) => setTimeEnd(key)}
                      isInvalid={Number(timeEnd) <= Number(timeStart)}
                      errorMessage={
                        Number(timeEnd) <= Number(timeStart)
                          ? "End time must be greater than start time"
                          : ""
                      }
                      className="w-full"
                    >
                      <Label>End</Label>

                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>

                      <Select.Popover>
                        <ListBox>
                          {endTime.map((t) => (
                            <ListBox.Item
                              id={t.value}
                              key={t.value}
                              textValue={t.label}
                            >
                              {t.label}
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          ))}
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>
                  {Number(timeEnd) <= Number(timeStart) && (
                    <p className="text-sm text-danger font-medium flex items-center gap-1">
                      <BiInfoCircle /> End time must be greater than start time
                    </p>
                  )}
                  {/* note */}
                  <TextField className="w-full" name="message">
                    <Label>Special Note (Optional)</Label>
                    <TextArea
                      className="h-22 w-full"
                      placeholder="Enter your message..."
                    />
                  </TextField>
                  {/* cost */}
                  <div className="flex items-center justify-between p-4 w-full  bg-gray-100  rounded-md my-4 border border-gray-200 ">
                    <span className="font-medium">Total Cost</span>
                    <strong className="text-accent text-md font-black tracking-tight">
                      ${totalPrice}
                    </strong>
                  </div>
                  <Modal.Footer>
                    <Button type="button" slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit">Confirm Booking</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
