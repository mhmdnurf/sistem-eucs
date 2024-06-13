import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import Swal from "sweetalert2";

interface Statement {
  variabel: string;
  statement: string;
}

interface Statements {
  id: number;
  statement: string;
  variabel: string;
}

export async function fetchStatements(): Promise<Statements[]> {
  noStore();
  try {
    const data = await sql`SELECT * FROM statements`;
    return data.rows as Statements[];
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Error fetching statements");
  }
}

export async function fetchStatementsWithLimit(): Promise<Statements[]> {
  noStore();
  try {
    const data = await sql`SELECT * FROM statements LIMIT 5`;
    return data.rows as Statements[];
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Error fetching statements");
  }
}

export async function addStatement({ variabel, statement }: Statement) {
  let limit = 0;

  if (variabel === "content") {
    limit = 3;
  } else if (variabel === "format") {
    limit = 2;
  } else if (variabel === "accuracy") {
    limit = 2;
  } else if (variabel === "eout") {
    limit = 4;
  } else if (variabel === "kepuasan") {
    limit = 3;
  }

  const existingStatements =
    await sql`SELECT COUNT(*) FROM statements WHERE variabel = ${variabel}`;
  console.log(existingStatements);

  if (Number(existingStatements.rows[0].count) >= limit) {
    throw new Error(`Limit exceeded for ${variabel}`);
  }

  try {
    await sql`INSERT INTO statements (variabel, statement) VALUES (${variabel}, ${statement})`;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Error inserting statement");
  }
}
