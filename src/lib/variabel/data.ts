import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchVariabel() {
  noStore();

  const variabels = await sql`SELECT * FROM variabels`;
  return variabels.rows;
}

export async function addVariabel(variabel: { variabel: string }) {
  noStore();

  try {
    await sql`
      INSERT INTO variabels (nama_variabel)
      VALUES (${variabel.variabel})
    `;
  } catch (error) {
    console.error(error);
  }
}
