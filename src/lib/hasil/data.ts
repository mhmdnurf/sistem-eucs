import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function getAverageRating() {
  noStore();
  try {
    const result = await sql`
      SELECT s.variabel_id, v.nama_variabel, AVG(r.response) AS average_response
      FROM responses r
      JOIN statements s ON r.statement_id = s.id
      JOIN variabels v ON s.variabel_id = v.id
      GROUP BY s.variabel_id, v.nama_variabel
    `;

    return result.rows;
  } catch (error) {
    console.error("Error fetching average content:", error);
    throw error;
  }
}
