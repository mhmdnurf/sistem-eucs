import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import Swal from "sweetalert2";

interface Statement {
  variabel_id: string;
  statement: string;
}

interface Statements {
  id: number;
  statement: string;
  variabel_id: string;
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

export async function fetchStatementsWithVariabel() {
  noStore();
  try {
    const data = await sql`
      SELECT statements.id, statements.statement, variabels.nama_variabel
      FROM statements
      JOIN variabels ON statements.variabel_id = variabels.id
    `;
    return data.rows;
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

export async function addStatement({ variabel_id, statement }: Statement) {
  noStore();
  try {
    await sql`INSERT INTO statements (variabel_id, statement) VALUES (${variabel_id}, ${statement})`;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Error inserting statement");
  }
}
