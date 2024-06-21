import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function getAverageRating() {
  noStore();
  try {
    const result = await sql`
      SELECT 
        s.variabel_id, 
        v.nama_variabel,
        COUNT(CASE WHEN r.response = 1 THEN 1 END) AS sts,
        COUNT(CASE WHEN r.response = 2 THEN 1 END) AS ts,
        COUNT(CASE WHEN r.response = 3 THEN 1 END) AS n,
        COUNT(CASE WHEN r.response = 4 THEN 1 END) AS s,
        COUNT(CASE WHEN r.response = 5 THEN 1 END) AS ss,
        AVG(r.response) AS average_response
      FROM responses r
      JOIN statements s ON r.statement_id = s.id
      JOIN variabels v ON s.variabel_id = v.id
      GROUP BY s.variabel_id, v.nama_variabel
      ORDER BY s.variabel_id ASC
    `;

    return result.rows;
  } catch (error) {
    console.error("Error fetching average content:", error);
    throw error;
  }
}
