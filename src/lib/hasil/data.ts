import { sql } from "@vercel/postgres"; // Import the join function
import { unstable_noStore as noStore } from "next/cache";

export async function getHasilContent() {
  noStore();

  const content =
    await sql`SELECT id FROM statements WHERE variabel = ${"content"}`;

  return content.rows;
}

export async function getAverageContent() {
  noStore();
  const variabel_id = 1;

  const query = sql`
    SELECT s.id, AVG(r.response) AS average_response
    FROM responses r
    INNER JOIN statements s ON s.id = r.statement_id
    WHERE r.variabel_id = ${variabel_id}
    GROUP BY s.id`;
  const result = await query;

  console.log("Average Responses:", result.rows);
}
