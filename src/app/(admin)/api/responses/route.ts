import { addResponses } from "@/lib/responses/data";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { nama_lengkap, nim, jurusan, responses } = await req.json();

  try {
    const userDetails = { nama_lengkap, nim, jurusan };
    await addResponses(userDetails, responses);

    return NextResponse.json(
      { message: "Data berhasil ditambahkan", data: userDetails, responses },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
