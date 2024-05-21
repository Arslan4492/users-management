"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UserForm from "./user-form";

const AddUser = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-4 flex w-full justify-end">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="text-xs md:text-sm">
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New User</DialogTitle>
            <DialogDescription>
              Fill all the required fields. Click save when you are done.
            </DialogDescription>
          </DialogHeader>

          <UserForm setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddUser;
