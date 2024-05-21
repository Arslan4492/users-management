"use client";

import * as z from "zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { AddUser } from "@/schemas";
import { httpClient } from "@/lib/http";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";

// typescript
interface IUserForm {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const UserForm = ({ setOpen }: IUserForm) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof AddUser>>({
    defaultValues: {
      name: "",
      address: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(AddUser),
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: z.infer<typeof AddUser>) => {
    try {
      const { data } = await httpClient.post("/users", values);
      toast.success(data.message);
      setOpen(false);
      router.refresh();
    } catch (error: any) {
      if (error.response?.data) {
        if (Array.isArray(error.response.data.message)) {
          error.response.data.message.map((msg: string) => toast.error(msg));
        } else toast.error(error.response.data);
      } else toast.error("Something went wrong!");
    }
  };

  return (
    <Form {...form}>
      <form
        className="w-full space-y-2 py-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="grid w-full grid-cols-4 items-center gap-4">
          <FormLabel className="text-right">Name</FormLabel>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormControl>
                  <Input
                    className="focus-visible:ring-0"
                    disabled={isSubmitting}
                    placeholder="User name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid w-full grid-cols-4 items-center gap-4">
          <FormLabel className="text-right">Address</FormLabel>
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormControl>
                  <Input
                    className="focus-visible:ring-0"
                    disabled={isSubmitting}
                    placeholder="type user address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid w-full grid-cols-4 items-center gap-4">
          <FormLabel className="text-right">Email</FormLabel>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormControl>
                  <Input
                    className="focus-visible:ring-0"
                    disabled={isSubmitting}
                    placeholder="Type user email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid w-full grid-cols-4 items-center gap-4">
          <FormLabel className="text-right">Password</FormLabel>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormControl>
                  <Input
                    className="focus-visible:ring-0"
                    disabled={isSubmitting}
                    placeholder="Type user password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <DialogFooter>
          <Button disabled={isSubmitting} type="submit">
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Add User
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};

export default UserForm;
