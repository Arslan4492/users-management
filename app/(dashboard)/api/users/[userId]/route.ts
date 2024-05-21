import { db } from "@/lib/db";
import { AddUser } from "@/schemas";
import { NextResponse } from "next/server";

export const PATCH = async (
  req: Request,
  { params }: { params: { userId: string } }
) => {
  try {
    const values = await req.json();

    // orm prisma
    await db.users.update({
      where: {
        id: params.userId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(
      {
        message: "User updated successfully!",
      },
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};

export const DELETE = async (
  req: Request,
  { params }: { params: { userId: string } }
) => {
  try {
    // orm prisma
    await db.users.delete({
      where: {
        id: params.userId,
      },
    });

    return NextResponse.json(
      {
        message: "User deleted successfully!",
      },
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
