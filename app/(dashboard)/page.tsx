import Heading from "@/components/page-heading";
import { DataTable } from "./data-table";
import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const Home = async () => {
  const users = await db.users.findMany({});

  if (!users) {
    return redirect("/");
  }
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <Heading description="Manage users" title="Users 🏫" />
        {/* <AddInstitute courses={courses} /> */}
      </div>
      <Separator />
      <DataTable data={users} />
    </div>
  );
};
export default Home;
