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

export async function addResponses(userDetails: User, responses: Response[]) {
  noStore();
  try {
    // Insert a new user into the users table
    const result = await sql`
      INSERT INTO users (nama_lengkap, nim, jurusan)
      VALUES (${userDetails.nama_lengkap}, ${userDetails.nim}, ${userDetails.jurusan})
      RETURNING id
    `;

    // Get the user_id of the newly inserted user
    const userId = result.rows[0].id;

    // Insert each response into the responses table
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
