import { fetchVariabel, addVariabel } from "@/lib/variabel/data";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const variabels = await fetchVariabel();
    return NextResponse.json(
      { message: "Data berhasil didapatkan", data: variabels },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { variabel } = await req.json();

  try {
    const variabelData = { variabel };
    await addVariabel(variabelData);

    return NextResponse.json(
      { message: "Data berhasil ditambahkan", data: variabelData },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
