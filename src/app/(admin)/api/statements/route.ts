import { addStatement, fetchStatements } from "@/lib/statements/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    const statements = await fetchStatements();
    return NextResponse.json(
      { message: "Data berhasil didapatkan", data: statements },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

export const POST = async (req: Request, res: Response) => {
  const { variabel_id, statement } = await req.json();

  try {
    const statementData = { variabel_id, statement };
    await addStatement(statementData);

    return NextResponse.json(
      { message: "Data berhasil ditambahkan", data: statementData },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
