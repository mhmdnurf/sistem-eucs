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

export async function countUsers() {
  noStore();
  try {
    const data = await sql`SELECT COUNT(*) FROM users`;
    return data.rows[0].count;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Error counting users");
  }
}
