"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { BiTrash } from "react-icons/bi";
import { FiLoader } from "react-icons/fi";

export function CancelBooking({ data }) {
  const router = useRouter();
  
  const [isDeleting, setIsDeleting] = useState(false);

  const handleCancelBooking = async () => {
    setIsDeleting(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/book-room/${data._id}/cancel`,
        {
          method: "PATCH",
        },
      );

      const result = await res.json();

      if (result.success) {
        toast.success("Booking cancelled successfully!");
        router.refresh();
      } else {
        toast.error(result.message || "Failed to cancel booking");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <AlertDialog>
      <Button
        variant="danger"
        className="rounded-full px-5 shadow-md hover:shadow-lg transition-all"
      >
        <BiTrash className="text-lg" />
        <span>Cancel</span>
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />

              <AlertDialog.Heading>Cancel this booking?</AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                Are you sure you want to cancel this booking? This action cannot
                be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="secondary" disabled={isDeleting}>
                Close
              </Button>

              <Button
                onClick={handleCancelBooking}
                slot="close"
                variant="danger"
                disabled={isDeleting}
              >
                {isDeleting ? (
                  <>
                    <FiLoader className="animate-spin" />
                    Cancelling...
                  </>
                ) : (
                  "Confirm Cancel"
                )}
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
