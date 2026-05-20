"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { BiTrash } from "react-icons/bi";
import { FiLoader } from "react-icons/fi";
import { authClient } from "../../lib/auth/auth-client";

export function DeleteRoom({ room }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteRoom = async () => {
    setIsDeleting(true);

    try {
      const { data: tokenData } = await authClient.token();
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/rooms/${room?._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${tokenData?.token}`,
          },
          body: JSON.stringify({ _id: room._id }),
        },
      );

      const data = await res.json();

      if (data.success) {
        toast.success("Room deleted successfully!");
        router.push("/rooms");
      } else {
        toast.error(data.message || "Failed to delete room");
      }
    } catch (error) {
      console.error("Delete room error:", error);
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
        <span>Delete</span>
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete room permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{room?.roomName}</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary" disabled={isDeleting}>
                Cancel
              </Button>
              <Button
                onClick={handleDeleteRoom}
                slot="close"
                variant="danger"
                disabled={isDeleting}
              >
                {isDeleting ? (
                  <>
                    <FiLoader className="animate-spin" />
                    Deleting...
                  </>
                ) : (
                  "Delete"
                )}
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
