import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

const ITEMS_PER_PAGE = 5;

export async function fetchUsers(currentPage: number) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const data =
      await sql`SELECT * FROM users LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`;
    return data.rows;
  } catch (error) {
    console.error("Error fetching users: ", error);
    throw new Error("Error fetching users");
  }
}

export async function fetchUsersPages() {
  noStore();

  try {
    const count = await sql`SELECT COUNT(*) FROM users`;
    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return { totalPages, ITEMS_PER_PAGE };
  } catch (error) {
    console.error("Error fetching users pages: ", error);
    throw new Error("Error fetching users pages");
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

export async function countTiapJurusan() {
  noStore();
  try {
    const data = await sql`
      SELECT LOWER(jurusan) as jurusan, COUNT(*) as jumlah
      FROM users
      GROUP BY LOWER(jurusan)
      ORDER BY LOWER(jurusan) ASC
    `;
    return data.rows;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Error counting jurusan");
  }
}
