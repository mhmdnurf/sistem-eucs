import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

interface User {
  nama_lengkap: string;
  nim: string;
  jurusan: string;
}

interface Response {
  statement_id: number;
  response: any;
}

const ITEMS_PER_PAGE = 5;

export async function addResponses(userDetails: User, responses: Response[]) {
  noStore();
  try {
    const result = await sql`
      INSERT INTO users (nama_lengkap, nim, jurusan)
      VALUES (${userDetails.nama_lengkap}, ${userDetails.nim}, ${userDetails.jurusan})
      RETURNING id
    `;

    const userId = result.rows[0].id;

    for (let response of responses) {
      await sql`
        INSERT INTO responses (user_id, statement_id, response)
        VALUES (${userId}, ${response.statement_id}, ${response.response})
      `;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getResponsesByUserId(userId: number) {
  noStore();
  try {
    const result = await sql`
      SELECT * FROM responses
      WHERE user_id = ${userId}
    `;

    return result.rows;
  } catch (error) {
    console.error(error);
  }
}

export async function getStatementById(statementId: number) {
  noStore();
  try {
    const result = await sql`
      SELECT s.*, v.nama_variabel
      FROM statements s
      JOIN variabels v ON s.variabel_id = v.id
      WHERE s.id = ${statementId}`;
    return result.rows[0];
  } catch (error) {
    console.error(error);
  }
}
