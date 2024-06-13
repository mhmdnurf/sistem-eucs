import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchUsers() {
  noStore();
  try {
    const data = await sql`SELECT * FROM users`;
    return data.rows;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Error fetching users");
  }
}
