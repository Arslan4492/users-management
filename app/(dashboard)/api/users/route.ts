import { db } from "@/lib/db";
import { AddUser } from "@/schemas";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const values = await req.json();
    const _values = AddUser.safeParse(values);

    if (!_values.success) {
      return NextResponse.json({ message: "Values are not valid" });
    }

    const { name, address, email, password } = _values.data;

    // orm prisma
    await db.users.create({
      data: {
        name,
        address,
        email,
        password,
        gender: "MALE",
      },
    });

    return NextResponse.json(
      {
        message: "User created successfully!",
      },
      { status: 201 }
    );
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
