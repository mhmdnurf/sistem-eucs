import { fetchUsers } from "@/lib/users/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    const users = await fetchUsers();
    return NextResponse.json(
      { message: "Data berhasil didapatkan", data: users },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
