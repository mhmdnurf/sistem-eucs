import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

interface Statement {
  variabel_id: string;
  statement: string;
}

interface Statements {
  id: number;
  statement: string;
  variabel_id: string;
  nama_variabel: string;
}

const ITEMS_PER_PAGE = 5;

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

export async function fetchStatementsWithVariabel(
  currentPage: number
): Promise<Statements[]> {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const data = await sql<Statements>`
      SELECT statements.id, statements.statement, variabels.nama_variabel
      FROM statements
      JOIN variabels ON statements.variabel_id = variabels.id LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;
    return data.rows;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Error fetching statements");
  }
}

export async function fetchStatementsPage() {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*) FROM statements`;
    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return { totalPages, ITEMS_PER_PAGE };
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Error fetching statements pages");
  }
}

export async function fetchStatementsWithLimit(): Promise<Statements[]> {
  noStore();
  try {
    const data =
      await sql<Statements>`SELECT statements.id, statements.statement, variabels.nama_variabel
      FROM statements
      JOIN variabels ON statements.variabel_id = variabels.id LIMIT 5`;
    return data.rows;
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
