import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { DataTable } from "./data-table";
import AddUsers from "./_components/add-users";
import Heading from "@/components/page-heading";
import { Separator } from "@/components/ui/separator";

const Users = async () => {
  const users = await db.users.findMany({});

  if (!users) {
    redirect("/");
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <Heading description="Manage users" title="Users 🏫" />
        <AddUsers />
      </div>
      <Separator />
      <DataTable data={users} />
    </div>
  );
};

export default Users;
