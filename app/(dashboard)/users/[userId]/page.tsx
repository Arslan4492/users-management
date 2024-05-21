import { ScrollArea } from "@/components/ui/scroll-area";
import { db } from "@/lib/db";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import NameForm from "./_components/name";

const User = async ({ params }: { params: { userId: string } }) => {
  const user = await db.users.findUnique({
    where: { id: params.userId },
  });

  if (!user) {
    return redirect("/users");
  }
  return (
    <ScrollArea className="h-full p-6">
      <div className="flex items-center justify-between">
        <div className="w-full">
          <Link
            className="tex-sm mb-4 flex items-center transition hover:opacity-75"
            href={"/users"}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to users
          </Link>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-2xl font-medium">User setup</h1>
              <span className="text-sm text-slate-700  dark:text-white">
                Complete all fields
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-x-2">
        <h2 className="text-xl">Customize your user</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <NameForm userId={user.id} initialData={user} />
        </div>
      </div>
    </ScrollArea>
  );
};

export default User;
